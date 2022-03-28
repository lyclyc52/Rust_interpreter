/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
// import { result } from 'lodash'
// import { assign, values } from 'lodash'
// import { freemem, type } from 'os'
// import { start } from 'repl'
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'

import { Context, Environment, Frame,  Value } from '../types'
import { primitive } from '../utils/astCreator'
// import { evaluateBinaryExpression, evaluateUnaryExpression } from '../utils/operators'
import * as rttc from '../utils/rttc'
import Closure from './closure'



// number type
const NODETYPE_NUMBER = 0
const SIZE_NUMBER = 6
const FIRST_NUMBER = 0
const LAST_NUMBER = -1
// boolean type
const NODETYPE_BOOLEAN = 1
const SIZE_BOOLEAN= 6
const FIRST_BOOLEAN = 0
const LAST_BOOLEAN= -1
// string type
const NODETYPE_STRING = 2
const SIZE_STRING= 6
const FIRST_STRING = 0
const LAST_STRING= -1

// object type constants(including array and tuple)

const FIRST_OBJECT = 6
const MARKED = 1
// const UNMARKED = 0


// const node_type_offset = 0
// const node_size_offset = 1
// const marking_offset = 2
// const first_offset = 3
// const last_offset = 4
const value_offset = 5
const object_value_offset = 6

export const object_type_offset = 3



class BreakValue {}

class ContinueValue {}

class ReturnValue {
  constructor(public value: Value) {}
}

class TailCallReturnValue {
  constructor(public callee: Closure, public args: Value[], public node: es.CallExpression) {}
}

class Thunk {
  public value: Value
  public isMemoized: boolean
  constructor(public exp: es.Node, public env: Environment) {
    this.isMemoized = false
    this.value = null
  }
}

function* forceIt(val: any, context: Context): Value {
  if (val instanceof Thunk) {
    if (val.isMemoized) return val.value

    pushEnvironment(context, val.env)
    const evalRes = yield* actualValue(val.exp, context)
    popEnvironment(context)
    val.value = evalRes
    val.isMemoized = true
    return evalRes
  } else return val
}

export function* actualValue(exp: es.Node, context: Context): Value {
  const evalResult = yield* evaluate(exp, context)
  const forced = yield* forceIt(evalResult, context)
  return forced
}

const createEnvironment = (
  closure: Closure,
  args: Value[],
  callExpression?: es.CallExpression
): Environment => {
  const environment: Environment = {
    name: closure.functionName, // TODO: Change this
    tail: closure.environment,
    head: {}
  }
  if (callExpression) {
    environment.callExpression = {
      ...callExpression,
      arguments: args.map(primitive)
    }
  }
  closure.node.params.forEach((param, index) => {
    const ident = param as es.Identifier
    environment.head[ident.name] = args[index]
  })
  return environment
}

const createBlockEnvironment = (
  context: Context,
  name = 'blockEnvironment',
  head: Frame = {}
): Environment => {
  return {
    name,
    tail: currentEnvironment(context),
    head
  }
}

const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments
  )
  throw error
}

const DECLARED_BUT_NOT_YET_ASSIGNED = Symbol('Used to implement hoisting')

function declareIdentifier(context: Context, id: es.Pattern, variable_type:string, node: es.Node) {
  const environment = currentEnvironment(context)
  const name = ((id as es.AssignmentPattern).left as es.Identifier).name 
  const value_type = ((id as es.AssignmentPattern).right as es.Identifier).name 
  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)

    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }
  environment.head[name] = {
    "variable_type": variable_type, 
    "value_type": value_type,
    "value": DECLARED_BUT_NOT_YET_ASSIGNED
  } as Frame
  
  return environment
}

function declareVariables(context: Context, node: es.VariableDeclaration) {
  const type = node.kind
  for (const declaration of node.declarations) {
    declareIdentifier(context, declaration.id , type, node)
  }
}

function declareFunctionsAndVariables(context: Context, node: es.BlockStatement) {
  for (const statement of node.body) {
    switch (statement.type) {
      case 'VariableDeclaration':
        declareVariables(context, statement)
        break
      case 'FunctionDeclaration':
        declareIdentifier(context, statement.id as es.Pattern , "fn", statement)
        break
    }
  }
}


function* visit(context: Context, node: es.Node) {
  context.runtime.nodes.unshift(node)
  yield context
}

function* leave(context: Context) {
  context.runtime.nodes.shift()
  yield context
}

const currentEnvironment = (context: Context) => context.runtime.environments[0]
const replaceEnvironment = (context: Context, environment: Environment) =>
  (context.runtime.environments[0] = environment)
const popEnvironment = (context: Context) => context.runtime.environments.shift()
const pushEnvironment = (context: Context, environment: Environment) =>
  context.runtime.environments.unshift(environment)

const checkNumberOfArguments = (
  context: Context,
  callee: Closure | Value,
  args: Value[],
  exp: es.CallExpression
) => {
  if (callee instanceof Closure) {
    if (callee.node.params.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(exp, callee.node.params.length, args.length)
      )
    }
  } else {
    if (callee.hasVarArgs === false && callee.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(exp, callee.length, args.length)
      )
    }
  }
  return undefined
}


function* getVariableByName(node: es.Identifier, environment:Environment, context:Context):any{
  
  const name = node.name
  if (environment === null || environment === undefined){
    handleRuntimeError(          context,
      new errors.UndefinedVariable(name, node))
  }
  else{
    const variable = environment.head[name]
    if (variable !== undefined) {
        return variable
    }
    else{
      return yield* getVariableByName(node, environment.tail as Environment, context)
    }
  }
}

function* getValueByName(node: es.Identifier, environment:Environment, context:Context) {
  const variable = yield* getVariableByName(node, environment, context)
  if (variable.value === DECLARED_BUT_NOT_YET_ASSIGNED) {
    handleRuntimeError(          context,
      new errors.UnassignedVariable(node.name, node))
  }
  else {
    return variable.value
  }
}

function* read_heap_value(start: number, context: Context, index: any): any{
  if(index === null){
    return context.heap[start+value_offset]
  }
  else {
    const object_p = context.heap[start+object_value_offset + index]
    console.log(object_p)
    console.log(context.heap)
    return yield*  read_heap_value(object_p, context, null)
  }
}

function* getValueByIndex(node: es.Identifier, right:any, context:Context, is_array:boolean) {
  const environment = currentEnvironment(context)
  const variable = yield* getVariableByName(node, environment, context)
  if((is_array && variable.value_type != "[]") || (!is_array && variable.value_type != "()")){
    return handleRuntimeError(          context,
      new errors.InvalidOperator(node, node.name, is_array))
  }
  else{
    console.log(variable)
    return yield* read_heap_value(variable.value, context, right)
  }
  

}

function* assignValueByName(node: es.Pattern | es.MemberExpression, value:any, environment:Environment | null, context:Context):any {
  let name,property
  if(node.type === "MemberExpression"){
    name = (node.object as es.Identifier).name
    property = yield* evaluate(node.property, context)
  }
  else{
    name = (node as es.Identifier).name
  }

  if (environment === null || environment === undefined){
    handleRuntimeError(          context,
      new errors.UndefinedVariable(name, node))
  }
  else{
    if (environment.head[name] !== undefined) {
      if(node.type === "MemberExpression"){
        environment.head[name].value[property] = value
      }
      else{
        environment.head[name].value = value
      }
      
    }
    else{
      return yield* assignValueByName(node, value, environment.tail, context)
    }
  }
}

function pushItem(value:any, context:Context) {

  if(typeof value === "number") {
    context.heap.push(NODETYPE_NUMBER)
    context.heap.push(SIZE_NUMBER)
    context.heap.push(MARKED)
    context.heap.push(FIRST_NUMBER)
    context.heap.push(LAST_NUMBER)
    context.heap.push(value)
    context.free += SIZE_NUMBER
  }
  else if (typeof value === "boolean") {
    context.heap.push(NODETYPE_BOOLEAN)
    context.heap.push(SIZE_BOOLEAN)
    context.heap.push(MARKED)
    context.heap.push(FIRST_BOOLEAN)
    context.heap.push(LAST_BOOLEAN)
    context.heap.push(value)
    context.free += SIZE_BOOLEAN
  }
  else if (typeof value === "string") {
    context.heap.push(NODETYPE_STRING)
    context.heap.push(SIZE_STRING)
    context.heap.push(MARKED)
    context.heap.push(FIRST_STRING)
    context.heap.push(LAST_STRING)
    context.heap.push(value)
    context.free += SIZE_STRING
  }
  else{

  }
}

function pushArrayToHeap(value:any[], type:string, context:Context) {
  context.heap.push(context.object_type[type])
  context.heap.push(value.length + 6)
  context.heap.push(MARKED)
  context.heap.push(FIRST_OBJECT)
  context.heap.push(FIRST_OBJECT + value.length)
  context.heap.push(type)
  const starting = context.free
  for(let i=0; i< value.length; i = i + 1){
    context.heap.push(i)
  }

  context.free = context.free + value.length + 6

  for(let i=0; i< value.length; i = i + 1){
    context.heap[starting + 6 + i] = context.free
    pushItem(value[i], context)
  }
}


export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

/**
 * Evaluation Functions
 *  */ 

function* evaluateIdentifier(context:Context, node: es.Identifier) {
  const environment = currentEnvironment(context)
  return yield* getValueByName(node, environment, context)
}
function* evaluateUnaryExpression(operator: es.UnaryOperator, value: any) {
  if (operator === '!') {
    return !value
  } else if (operator === '-') {
    return -value
  } else {
    return +value
  }
}

function* evaluateBinaryExpression(context: Context, left:any, right:any, node: es.BinaryExpression) {
  const operator = node.operator as string
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    case '%':
      return left % right
    case '===':
      return left === right
    case '!==':
      return left !== right
    case '<=':
      return left <= right
    case '<':
      return left < right
    case '>':
      return left > right
    case '>=':
      return left >= right
    default:
      return undefined
  }
}
function* evaluateBlockSatement(context: Context, node: es.BlockStatement) {
  
  declareFunctionsAndVariables(context, node)
  let result
  
  for (let i =0; i<node.body.length; i+=1) {

    const statement = node.body[i]
    
    result = yield* evaluate(statement, context)
    if (
      result instanceof ReturnValue ||
      result instanceof TailCallReturnValue ||
      result instanceof BreakValue ||
      result instanceof ContinueValue
    ) {
      break
    }
  }

  return result
}

function* evaluateMemberExpression(context: Context, node: es.MemberExpression) {
  
  // If we check it in the typechecker, we will not need to check the type here
  if(node.object.type === "ArrayExpression"){

    let type_name = (node.property as es.Identifier).name
    return {value: yield* evaluate(node.object,context), type: type_name}
  }
  else{
    const property = yield* evaluate(node.property,context)
    const is_array = node.optional
    return yield* getValueByIndex(node.object as es.Identifier, property, context, is_array)
  }
}

function* evaluateVariableDeclaration(context: Context, node: es.VariableDeclaration) {
  const environment = currentEnvironment(context)
  for (const declaration of node.declarations) {
    const name = ((declaration.id as es.AssignmentPattern).left as es.Identifier).name
    if(declaration.init !== null && declaration.init !== undefined){
      // console.log(environment.head[name].value)
      if(declaration.init.type === "MemberExpression") {
        const result = yield* evaluate(declaration.init as es.MemberExpression, context)
        environment.head[name].value_type = result.type
        environment.head[name].value = context.free
        pushArrayToHeap(result.value, result.type, context)
      }
      else {
        environment.head[name].value = yield* evaluate(declaration.init as es.Expression, context)
      }
      
    }
    else{
      if(environment.head[name].variable_type === "const" && environment[name].value === DECLARED_BUT_NOT_YET_ASSIGNED) {
        handleRuntimeError(
          context,
          new errors.ConstWithoutInitialValue(node, name)
        )
      }
    }
  }
  return undefined
}


function* evaluateAssignmentExpression(context: Context, node: es.AssignmentExpression) {
  let environment = currentEnvironment(context)

  const value = yield* evaluate(node.right, context)
  return yield* assignValueByName(node.left, value, environment, context)
  // const name = node.name
  // if (environment === null || environment === undefined){
  //   handleRuntimeError(          context,
  //     new errors.UndefinedVariable(name, node))
  // }
  // else{
  //   const variable = environment.head[name]
  //   if (variable !== undefined) {
  //     if (variable.value != DECLARED_BUT_NOT_YET_ASSIGNED) {
  //       handleRuntimeError(          context,
  //         new errors.UnassignedVariable(name, node))
  //     }
  //     else {
  //       return variable.value
  //     }
      
  //   }
  //   else{
  //     return getValueByName(node, environment.tail as Environment, context)
  //   }
  // }
}
/**
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
// tslint:disable:object-literal-shorthand
// prettier-ignore
export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
    /** Simple Values */
    Literal: function*(node: es.Literal, context: Context) {
        return node.value
    },

    TemplateLiteral: function*(node: es.TemplateLiteral) {
        // Expressions like `${1}` are not allowed, so no processing needed
        return node.quasis[0].value.cooked
    },

    ThisExpression: function*(node: es.ThisExpression, context: Context) {
        return context.runtime.environments[0].thisContext
    },

    ArrayExpression: function*(node: es.ArrayExpression, context: Context) {
        const array_value = []
        for(const element of node.elements){
          array_value.push(yield* evaluate(element, context))
        }
        return array_value
    },

    DebuggerStatement: function*(node: es.DebuggerStatement, context: Context) {
        yield
    },

    FunctionExpression: function*(node: es.FunctionExpression, context: Context) {
        throw new Error("Function expressions not supported in x-slang");
    },

    ArrowFunctionExpression: function*(node: es.ArrowFunctionExpression, context: Context) {
        throw new Error("Arrow functions expressions not supported in x-slang");
    },

    Identifier: function*(node: es.Identifier, context: Context) {
        return yield* evaluateIdentifier(context, node)
    },

    CallExpression: function*(node: es.CallExpression, context: Context) {
        throw new Error("Call expressions not supported in x-slang");
    },

    NewExpression: function*(node: es.NewExpression, context: Context) {
        const callee = yield* evaluate(node.callee, context)
        const args = []
        for (const arg of node.arguments) {
            args.push(yield* evaluate(arg, context))
        }
        const obj: Value = {}
        if (callee instanceof Closure) {
            obj.__proto__ = callee.fun.prototype
            callee.fun.apply(obj, args)
        } else {
            obj.__proto__ = callee.prototype
            callee.apply(obj, args)
        }
        return obj
    },

    UnaryExpression: function*(node: es.UnaryExpression, context: Context) {
        const value = yield* actualValue(node.argument, context)

        const error = rttc.checkUnaryExpression(node, node.operator, value)
        if (error) {
            return handleRuntimeError(context, error)
        }
        return yield* evaluateUnaryExpression(node.operator, value)
    },

    BinaryExpression: function*(node: es.BinaryExpression, context: Context) {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const error = rttc.checkBinaryExpression(node, node.operator, left, right)
        if (error) {
            return handleRuntimeError(context, error)
        }
        return yield* evaluateBinaryExpression(context, left, right, node)
    },

    ConditionalExpression: function*(node: es.ConditionalExpression, context: Context) {
        throw new Error("Conditional expressions not supported in x-slang");
    },

    LogicalExpression: function*(node: es.LogicalExpression, context: Context) {
        throw new Error("Logical expressions not supported in x-slang");
    },

    VariableDeclaration: function*(node: es.VariableDeclaration, context: Context) {
      yield* evaluateVariableDeclaration(context, node)
      return undefined
      
    },

    ContinueStatement: function*(node: es.ContinueStatement, context: Context) {
        throw new Error("Continue statements not supported in x-slang");
    },

    BreakStatement: function*(node: es.BreakStatement, context: Context) {
        throw new Error("Break statements not supported in x-slang");
    },

    ForStatement: function*(node: es.ForStatement, context: Context) {
        // Create a new block scope for the loop variables
        throw new Error("For statements not supported in x-slang");
    },

    MemberExpression: function*(node: es.MemberExpression, context: Context) {
        return yield* evaluateMemberExpression(context, node)
    },

    AssignmentExpression: function*(node: es.AssignmentExpression, context: Context) {
        return yield* evaluateAssignmentExpression(context, node)
    },

    FunctionDeclaration: function*(node: es.FunctionDeclaration, context: Context) {
        throw new Error("Function declarations not supported in x-slang");
    },

    IfStatement: function*(node: es.IfStatement | es.ConditionalExpression, context: Context) {
        throw new Error("If statements not supported in x-slang");
    },

    ExpressionStatement: function*(node: es.ExpressionStatement, context: Context) {
        return yield* evaluate(node.expression, context)
    },

    ReturnStatement: function*(node: es.ReturnStatement, context: Context) {
        return  yield* evaluate(node.argument as es.Expression, context)
    },

    WhileStatement: function*(node: es.WhileStatement, context: Context) {
        throw new Error("While statements not supported in x-slang");
    },

    ObjectExpression: function*(node: es.ObjectExpression, context: Context) {
        throw new Error("Object expressions not supported in x-slang");
    },

    BlockStatement: function*(node: es.BlockStatement, context: Context) {
        const environment = createBlockEnvironment(context, 'block')
        pushEnvironment(context,environment)
        const result =  yield* evaluateBlockSatement(context, node)
        popEnvironment(context)
        return result
    },

    ImportDeclaration: function*(node: es.ImportDeclaration, context: Context) {
        throw new Error("Import declarations not supported in x-slang");
    },

    Program: function*(node: es.BlockStatement, context: Context) {
        context.numberOfOuterEnvironments += 1
        context.object_type["()"] = 3
        context.object_type["[]"] = 4

        const environment = createBlockEnvironment(context, 'programEnvironment')
        pushEnvironment(context, environment)
        const result = yield* forceIt(yield* evaluateBlockSatement(context, node), context);
        return result;
    }
}
// tslint:enable:object-literal-shorthand

export function* evaluate(node: es.Node,  context: Context) {
  yield* visit(context, node)
  const result = yield* evaluators[node.type](node, context)
  
  yield* leave(context)
  return result
}

export function* apply(
  context: Context,
  fun: Closure | Value,
  args: (Thunk | Value)[],
  node: es.CallExpression,
  thisContext?: Value
) {
  let result: Value
  let total = 0

  while (!(result instanceof ReturnValue)) {
    if (fun instanceof Closure) {
      checkNumberOfArguments(context, fun, args, node!)
      const environment = createEnvironment(fun, args, node)
      if (result instanceof TailCallReturnValue) {
        replaceEnvironment(context, environment)
      } else {
        pushEnvironment(context, environment)
        total++
      }
      const bodyEnvironment = createBlockEnvironment(context, 'functionBodyEnvironment')
      bodyEnvironment.thisContext = thisContext
      pushEnvironment(context, bodyEnvironment)
      result = yield* evaluateBlockSatement(context, fun.node.body as es.BlockStatement)
      popEnvironment(context)
      if (result instanceof TailCallReturnValue) {
        fun = result.callee
        node = result.node
        args = result.args
      } else if (!(result instanceof ReturnValue)) {
        // No Return Value, set it as undefined
        result = new ReturnValue(undefined)
      }
    } else if (typeof fun === 'function') {
      checkNumberOfArguments(context, fun, args, node!)
      try {
        const forcedArgs = []

        for (const arg of args) {
          forcedArgs.push(yield* forceIt(arg, context))
        }

        result = fun.apply(thisContext, forcedArgs)
        break
      } catch (e) {
        // Recover from exception
        context.runtime.environments = context.runtime.environments.slice(
          -context.numberOfOuterEnvironments
        )

        const loc = node ? node.loc! : constants.UNKNOWN_LOCATION
        if (!(e instanceof RuntimeSourceError || e instanceof errors.ExceptionError)) {
          // The error could've arisen when the builtin called a source function which errored.
          // If the cause was a source error, we don't want to include the error.
          // However if the error came from the builtin itself, we need to handle it.
          return handleRuntimeError(context, new errors.ExceptionError(e, loc))
        }
        result = undefined
        throw e
      }
    } else {
      return handleRuntimeError(context, new errors.CallingNonFunctionValue(fun, node))
    }
  }
  // Unwraps return value and release stack environment
  if (result instanceof ReturnValue) {
    result = result.value
  }
  for (let i = 1; i <= total; i++) {
    popEnvironment(context)
  }
  return result
}
