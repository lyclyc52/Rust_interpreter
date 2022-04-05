/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { isArray} from 'lodash'
// import { result } from 'lodash'
// import { assign, values } from 'lodash'
// import { freemem, type } from 'os'
// import { start } from 'repl'
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'

import { Context, Environment, Frame, Value } from '../types'
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
const SIZE_BOOLEAN = 6
const FIRST_BOOLEAN = 0
const LAST_BOOLEAN = -1
// string type
const NODETYPE_STRING = 2
const SIZE_STRING = 6
const FIRST_STRING = 0
const LAST_STRING = -1


// reference type
const NODETYPE_REFERENCE = 3
const SIZE_REFERENCE = 6
const FIRST_REFERENCE = 0
const LAST_REFERENCE = -1

let OBJECT_TYPES = {"()":4, "[]":5} as Frame


// object type constants(including array and tuple)

const FIRST_OBJECT = 6

// const UNMARKED = 0

const node_type_offset = 0
const node_size_offset = 1
const garbage_pointer_offset = 2
const first_offset = 3
const last_offset = 4

const value_offset = 5


const object_value_offset = 5



class BreakValue {
  constructor(public value: Value) {}
}

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

function declareIdentifier(context: Context, id: es.Pattern, variable_type: string, node: es.Node) {
  const environment = currentEnvironment(context)
  const name = ((id as es.AssignmentPattern).left as es.Identifier).name
  const init_type = ((id as es.AssignmentPattern).right as es.Identifier).name
  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)

    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }
  environment.head[name] = {
    variable_type: variable_type,
    init_type: init_type === "null"? "any":init_type,
    value: DECLARED_BUT_NOT_YET_ASSIGNED
  } 

  return environment
}

function declareVariables(context: Context, node: es.VariableDeclaration) {
  const type = node.kind
  for (const declaration of node.declarations) {
    declareIdentifier(context, declaration.id, type, node)
  }
}

function declareFunctions(context: Context, node: es.FunctionDeclaration) {
  const environment = currentEnvironment(context)
  const name = (node.id as es.Identifier).name
  const init_type = "fn"
  
  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)
    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }
  let closure = []

  for(let i=0; i<node.params.length-1;i+=1)
  {
    if(node.params[i].type === "Identifier"){
      return handleRuntimeError(
        context,
        new errors.InvaildParameter(node)
      )
    }
    const param = node.params[i] as es.AssignmentPattern
    const variable_type = ((param.left as es.ArrayPattern).elements[0] as es.Identifier).name
    const param_name = ((param.left as es.ArrayPattern).elements[1]as es.Identifier).name
    const init_type = (param.right as es.Identifier).name
    
    closure.push( {
      param_name: param_name,
      variable_type: variable_type === "mut"? "var":"let",
      init_type: init_type === "null"? "any":init_type,
      value: DECLARED_BUT_NOT_YET_ASSIGNED
    })
  } 
  environment.head[name] = {
    variable_type: "const",
    init_type: init_type,
    env: closure,
    value: node.body
  } 

  return environment
}

function declareFunctionsAndVariables(context: Context, node: es.BlockStatement) {
  for (const statement of node.body) {
    switch (statement.type) {
      case 'VariableDeclaration':
        declareVariables(context, statement)
        break
      case 'FunctionDeclaration':
        declareFunctions(context, statement)
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

function* setVariableReferenceByName(node: es.Identifier, environment: Environment, context: Context): any {
  const name = node.name
  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    if (environment.head[name] !== undefined) {
      if(environment.head[name].has_mutable_reference)
      {
        handleRuntimeError(context, new errors.MultipleMutReference(name, node))
      }
      else
      {
        environment.head[name].has_mutable_reference = true
      }

    } else {
      return yield* getVariableByName(node, environment.tail as Environment, context)
    }
  }
}


function* getVariableByName(node: es.Identifier, environment: Environment, context: Context): any {
  const name = node.name
  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    const variable = environment.head[name]
    if (variable !== undefined) {
      return variable
    } else {
      return yield* getVariableByName(node, environment.tail as Environment, context)
    }
  }
}


function* getValueByName(node: es.Identifier, environment: Environment, context: Context) {
  const variable = yield* getVariableByName(node, environment, context)
  if (variable.value === DECLARED_BUT_NOT_YET_ASSIGNED) {
    handleRuntimeError(context, new errors.UnassignedVariable(node.name, node))
  } else {
    if (variable.value_type === undefined){
      return variable.value
    }
    else {
      return {vale: variable.value, type:variable.value_type}
    }
    
  }
}

function* read_heap_value(start: number, context: Context, index: any): any {
  if (index === null) {
    return context.heap[start + value_offset]
  } else {
    const object_p = context.heap[start + object_value_offset + index]
    return yield* read_heap_value(object_p, context, null)
  }
}

function* getValueByIndex(node: es.Identifier, index: any, context: Context, is_array: boolean) {
  const environment = currentEnvironment(context)
  const variable = yield* getVariableByName(node, environment, context)
  if (variable.value_type === "Box") {
    const starting = variable.value
    if ((is_array && context.heap[starting] !== context.object_type["[]"]) || (!is_array && context.heap[starting] === context.object_type["[]"])) {
      return handleRuntimeError(context, new errors.InvalidOperator(node, node.name, is_array))
    }
    return read_heap_value(starting, context, index)
  }
  if ((is_array && variable.value_type != '[]') || (!is_array && variable.value_type === '[]')) {
    return handleRuntimeError(context, new errors.InvalidOperator(node, node.name, is_array))
  } else {
      return variable.value[index]
    
  }
}

function* assignValueByName(
  node: es.Pattern | es.MemberExpression,
  value: any,
  environment: Environment | null,
  context: Context
): any {
  let name, property
  if (node.type === 'MemberExpression') {
    name = (node.object as es.Identifier).name
    property = yield* evaluate(node.property, context)
  } else {
    name = (node as es.Identifier).name
  }

  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    if (environment.head[name] !== undefined) {
      if (node.type === 'MemberExpression') {
        environment.head[name].value[property] = value
      } else {
        environment.head[name].value = value
      }
    } else {
      return yield* assignValueByName(node, value, environment.tail, context)
    }
  }
}

function pushToHeap(value: any, context:Context) {
  if(isArray(value.value)) {
    pushArrayToHeap(value.value,value.type,context)
  }
  else{
    if(value.type !== undefined)
    {
      pushItemToHeap(value, context)
    }

  }
}

function pushItemToHeap(value: any, context: Context) {
  if (typeof value === 'number') {
    context.heap[context.free + node_type_offset] = NODETYPE_NUMBER
    context.heap[context.free + node_size_offset] = SIZE_NUMBER
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_NUMBER
    context.heap[context.free + last_offset] = (LAST_NUMBER)
    context.heap[context.free + value_offset] = value
    context.free += SIZE_NUMBER
  } else if (typeof value === 'boolean') {
    

    context.heap[context.free + node_type_offset] = NODETYPE_BOOLEAN
    context.heap[context.free + node_size_offset] = SIZE_BOOLEAN
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_BOOLEAN
    context.heap[context.free + last_offset] = LAST_BOOLEAN
    context.heap[context.free + value_offset] = value
    context.free += SIZE_BOOLEAN
  } else if (typeof value === 'string') {

    context.heap[context.free + node_type_offset] = NODETYPE_STRING
    context.heap[context.free + node_size_offset] = SIZE_STRING
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_STRING
    context.heap[context.free + last_offset] = LAST_STRING
    context.heap[context.free + value_offset] = value
    context.free += SIZE_STRING
  } 
  else if(value.type === "&")
  {
    context.heap[context.free + node_type_offset] = NODETYPE_REFERENCE
    context.heap[context.free + node_size_offset] = SIZE_REFERENCE
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_REFERENCE
    context.heap[context.free + last_offset] = LAST_REFERENCE
    context.heap[context.free + value_offset] = value.value
    context.free += SIZE_REFERENCE
  }
  else{

  }
}

function pushArrayToHeap(value: any[], type: string, context: Context) {
  const starting = context.free
  context.heap[starting + node_type_offset] = (context.object_type[type])
  context.heap[starting + node_size_offset] = (value.length + 5)
  context.heap[starting + garbage_pointer_offset] = starting
  context.heap[starting + first_offset] = FIRST_OBJECT
  context.heap[starting + last_offset] = FIRST_OBJECT + value.length


  context.free = context.free + value.length + 5

  for (let i = 0; i < value.length; i = i + 1) {
    context.heap[starting + 5 + i] = context.free
    pushItemToHeap(value[i], context)
  }
}




export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

/**
 * Evaluation Functions
 *  */

function* evaluateIdentifier(context: Context, node: es.Identifier) {
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

function* evaluateBinaryExpression(
  context: Context,
  left: any,
  right: any,
  node: es.BinaryExpression
) {
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
    case '==':
      return left === right
    case '!=':
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

  for (let i = 0; i < node.body.length; i += 1) {
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
  if (node.object.type === 'ArrayExpression') {
    const type_name = (node.property as es.Identifier).name
    const result = { value: yield* evaluate(node.object, context), type: type_name }
    
    return result
  } 
  else if((node.property as es.Identifier).name === "&"){
    
    const env = currentEnvironment(context)    
    getVariableByName(node.object as es.Identifier, env, context)
    return { value: node.object, type: "&" }
    
  }
  else if((node.property as es.Identifier).name === "&mut") {
    const env = currentEnvironment(context)
    setVariableReferenceByName(node.object as es.Identifier, env, context)
    return { value: node.object, type: "&mut" }
  }
  else if((node.property as es.Identifier).name === "*") {
    
    const env = currentEnvironment(context)
    const variable = yield* getVariableByName(node.object as es.Identifier, env, context)
    if (variable.value.type === "Identifier"){
      return yield* evaluate(variable.value, context)
    }
    else {
      return yield* read_heap_value(variable.value, context, null)
    }
      
  }
  else {
    const property = yield* evaluate(node.property, context)
    const is_array = node.optional
    return yield* getValueByIndex(node.object as es.Identifier, property, context, is_array)
  }
}

function* evaluateVariableDeclaration(context: Context, node: es.VariableDeclaration) {
  const environment = currentEnvironment(context)
  for (const declaration of node.declarations) {
    const name = ((declaration.id as es.AssignmentPattern).left as es.Identifier).name
    if (declaration.init !== null && declaration.init !== undefined) {
      // console.log(environment.head[name].value)
      const result = yield* evaluate(declaration.init as es.Expression, context)
      if (result.type === undefined){
        environment.head[name].value = result
      }
      else{      
        environment.head[name].value_type = result.type
        environment.head[name].value = result.value
      }
      // if (declaration.init.type === 'MemberExpression') {
        
      //   if(declaration.init.object.type === "ArrayExpression")
      //   {
      //     const result = yield* evaluate(declaration.init as es.MemberExpression, context)
      //     environment.head[name].value_type = result.type
      //     environment.head[name].value = context.free
          
          
      //   }
      //   else
      //   {
      //     const result = yield* evaluate(declaration.init as es.MemberExpression, context)
      //     environment.head[name].value_type = result.type
      //     environment.head[name].value = result.value
      //   }

      // } 
      // else {
      //   environment.head[name].value = yield* evaluate(declaration.init as es.Expression, context)
      // }
    } else {
      if (
        environment.head[name].variable_type === 'const' &&
        environment[name].value === DECLARED_BUT_NOT_YET_ASSIGNED
      ) {
        handleRuntimeError(context, new errors.ConstWithoutInitialValue(node, name))
      }
    }
  }
  return undefined
}

function* evaluateAssignmentExpression(context: Context, node: es.AssignmentExpression) {
  const environment = currentEnvironment(context)

  let value = yield* evaluate(node.right, context)
  if(value instanceof ReturnValue){
    value = value.value
  }
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

function* evaluateCallExpression(context:Context, node:es.CallExpression){
  const environment = currentEnvironment(context)
  const func  = yield* getVariableByName(node.callee as es.Identifier, environment,context)
  if(func.is_builtin)
  {
    const result = yield* builtin_evaluators[func.name](node,context)
    return result
    
  }
  else
  {
    const func_body = {type:"BlockStatement", body: func.value} as es.BlockStatement
    let closure:Frame = {}
    for(let i = 0; i<node.arguments.length; i+=1){
      const param = func.env[i]
      closure[param.param_name] = param
      closure[param.param_name].value = yield* evaluate(node.arguments[i], context)
    }
    const func_env = {
      name:'function_environment',
      tail: currentEnvironment(context),
      head:closure
    }
  
    pushEnvironment(context, func_env)
    let result = yield* evaluateBlockSatement(context, func_body)
    popEnvironment(context)
    if(result instanceof ReturnValue){
      result = result.value
    }
    return result
  }

} 

function* evaluateWhileStatement(context:Context, node:es.WhileStatement){
  let condition = yield* evaluate(node.test, context)
  let result
  while(condition){
    
    result = yield* evaluate(node.body, context)
    condition = yield* evaluate(node.test, context)
  }

  return result
}

function* evaluateBreakStatement(context:Context, node:es.BreakStatement) {
  return node.label === null? new BreakValue(undefined) :
        new BreakValue(yield* evaluate(node.label as es.Expression, context))
}

function* evaluateRangeExpression(context:Context, node:es.BinaryExpression) {
  let iter = yield* evaluate(node.left,context)
  const end = yield* evaluate(node.right, context)
  const result = []
  for(iter; iter<end; iter += 1){
    result.push(iter)
  }
  return result
}

function* evaluateForInStatement(context:Context, node:es.ForInStatement) {
  let range
  if(node.right.type === "BinaryExpression"){
    range = yield* evaluateRangeExpression(context, node.right)
  }
  else{
    range = yield* evaluate(node.right, context)
  }

  const iter_name = (node.left as es.ArrayPattern).elements[1] as es.Identifier
  const iter_type = (node.left as es.ArrayPattern).elements[0] as es.Identifier
  
  let for_env = {
    name:'for_loop_environment',
    tail: currentEnvironment(context),
    head:{}
  }
  for_env.head[iter_name.name]= { param_name: iter_name.name,
    variable_type: iter_type.name === "mut"? "var":"let",
    init_type: "any",
    value: DECLARED_BUT_NOT_YET_ASSIGNED}
  
  
  let result

  pushEnvironment(context, for_env)
  

  for(const iter of range){
    assignValueByName(iter_name, iter,
                      currentEnvironment(context), context)

    result = yield* evaluate(node.body, context)
    if(result instanceof ReturnValue){
         break
    }
    else if(result instanceof BreakValue){
      result = undefined
      break
    }
    else if(result instanceof ContinueValue){
      continue
    }
  }
  popEnvironment(context)
  return result
} 

function* evaluateIfStatement(context:Context, node:es.IfStatement | es.ConditionalExpression) {
    const condition = yield* evaluate(node.test, context)

    if(condition){
      return yield* evaluate(node.consequent as es.Statement, context)
    }
    else{

      return yield* evaluate(node.alternate as es.Statement, context)
    }
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

export const builtin_evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
  "Box::new" :function*(node: es.CallExpression, context: Context) {
    const starting = context.free
    const value = yield* evaluate(node.arguments[0] as es.Expression, context)
    pushToHeap(value,context)

    return {value:starting, type:"Box"}
  },
}

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
        return yield* evaluateCallExpression(context, node)
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
      return yield* evaluateBreakStatement(context, node)
    },

    ForStatement: function*(node: es.ForStatement, context: Context) {
        // Create a new block scope for the loop variables
        throw new Error("For statements not supported in x-slang");
    },
    ForInStatement: function*(node: es.ForInStatement, context: Context) {
      // Create a new block scope for the loop variables
      return yield* evaluateForInStatement(context, node)  
    },
    MemberExpression: function*(node: es.MemberExpression, context: Context) {
        return yield* evaluateMemberExpression(context, node)
    },

    AssignmentExpression: function*(node: es.AssignmentExpression, context: Context) {
        return yield* evaluateAssignmentExpression(context, node)
    },

    FunctionDeclaration: function*(node: es.FunctionDeclaration, context: Context) {
        return undefined
    },

    IfStatement: function*(node: es.IfStatement | es.ConditionalExpression, context: Context) {
        yield* evaluateIfStatement(context, node)

        return 
    },

    ExpressionStatement: function*(node: es.ExpressionStatement, context: Context) {
        return yield* evaluate(node.expression, context)
    },

    ReturnStatement: function*(node: es.ReturnStatement, context: Context) {
        return  new ReturnValue(yield* evaluate(node.argument as es.Expression, context))
    },



    WhileStatement: function*(node: es.WhileStatement, context: Context) {
        return yield* evaluateWhileStatement(context, node as es.WhileStatement)
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
        context.object_type = OBJECT_TYPES

        const environment = createBlockEnvironment(context, 'programEnvironment')
        addBuiltinFunctions(environment)


        pushEnvironment(context, environment)
        const result = yield* forceIt(yield* evaluateBlockSatement(context, node), context);
        return result;
    }
}
const builtin_function_name = [
  "Box::new",
  "println!"
]
function addBuiltinFunctions(environment: Environment) {
  
   for(const name of builtin_function_name){
     environment.head[name] = {is_builtin: true, name: name}
   }

   return environment
}


// tslint:enable:object-literal-shorthand
export function* evaluate(node: es.Node, context: Context) {
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
