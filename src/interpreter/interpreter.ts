/* tslint:disable:max-classes-per-file */
import * as es from 'estree'

import { isArray } from 'lodash'
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

// box type
const NODETYPE_BOX = 4
const SIZE_BOX = 6
const FIRST_BOX = 0
const LAST_BOX = 1

const OBJECT_TYPES = { '()': 5, '[]': 6 } as Frame
let NODE_TYPE_NUM = 7

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
    popEnvironment(context, val)
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

function evaluateType(type: es.Pattern): any {
  if (type.type === 'Identifier') {
    return type.name
  } else if (type.type === 'MemberExpression') {
    return [evaluateType(type.object as es.Pattern), evaluateType(type.property as es.Pattern)]
  }
}

function declareIdentifier(context: Context, id: es.Pattern, variable_type: string, node: es.Node) {
  const environment = currentEnvironment(context)
  const name = ((id as es.AssignmentPattern).left as es.Identifier).name
  const init_type = evaluateType((id as es.AssignmentPattern).right as es.Pattern)
  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)

    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }
  environment.head[name] = {
    variable_type: variable_type,
    init_type: init_type === 'null' ? 'any' : init_type,
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
  const init_type = 'fn'

  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)
    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }
  const closure = []

  for (let i = 0; i < node.params.length - 1; i += 1) {
    if (node.params[i].type === 'Identifier') {
      return handleRuntimeError(context, new errors.InvaildParameter(node))
    }
    const param = node.params[i] as es.AssignmentPattern

    const variable_type = ((param.left as es.ArrayPattern).elements[0] as es.Identifier).name
    const param_name = ((param.left as es.ArrayPattern).elements[1] as es.Identifier).name
    const init_type = evaluateType(param.right as es.Pattern)
    // if(param.right.type === 'Identifier'){
    //   init_type = param.right.name
    // } else {
    //   const temp = param.right as es.MemberExpression
    //   init_type = [(temp.object as es.Identifier).name, (temp.property as es.Identifier).name]

    // }

    closure.push({
      param_name: param_name,
      variable_type: variable_type === 'mut' ? 'var' : 'let',
      init_type: init_type === 'null' ? 'any' : init_type,
      value: DECLARED_BUT_NOT_YET_ASSIGNED
    })
  }

  environment.head[name] = {
    variable_type: 'const',
    init_type: init_type,
    env: closure,
    value: node.body
  }

  return environment
}

function declareClass(context: Context, node: es.ClassDeclaration) {
  const environment = currentEnvironment(context)
  const name = (node.id as es.Identifier).name

  if (environment.head.hasOwnProperty(name)) {
    const descriptors = Object.getOwnPropertyDescriptors(environment.head)
    return handleRuntimeError(
      context,
      new errors.VariableRedeclaration(node, name, descriptors[name].writable)
    )
  }

  environment.head[name] = {
    variable_type: 'const',
    variable_name: name,
    value: node.body
  }

  if ((node.superClass as es.Identifier).name === 'enum') {
    environment.head[name].init_type = 'enum'
    environment.head[name].value = evaluateEnumItem(context, node.body)

    for (const i in environment.head[name].value) {
      OBJECT_TYPES[name + '::' + i] = NODE_TYPE_NUM
      NODE_TYPE_NUM += 1
      for (const j of environment.head[name].value[i]) {
        if (j === name) {
          handleRuntimeError(context, new errors.RecursiveDefiniton(name, node))
        }
      }
    }
  } else if ((node.superClass as es.Identifier).name === 'struct') {
    environment.head[name].init_type = 'struct'
    const struct_value = evaluateStructItem(context, node.body)
    environment.head[name].value = struct_value.names
    environment.head[name].value_type = struct_value.types

    OBJECT_TYPES[name] = NODE_TYPE_NUM
    NODE_TYPE_NUM += 1

    for (const i of struct_value.types) {
      if (i === name) {
        handleRuntimeError(context, new errors.RecursiveDefiniton(name, node))
      }
    }
  }

  return undefined
}

function evaluateEnumItem(context: Context, node: es.ClassBody) {
  const enum_items = {}
  const items = (node.body[0].key as es.ArrayExpression).elements
  for (const item of items) {
    const name = ((item as es.ClassExpression).id as es.Identifier).name

    enum_items[name] = []
    let value = (item as es.ClassExpression).body.body[0].key
    if (value.type === 'MemberExpression') {
      value = value as es.MemberExpression
      for (const type of (value.object as es.ArrayExpression).elements) {
        enum_items[name].push(evaluateType(type as es.Pattern))
      }
    }
  }
  return enum_items
}

function evaluateStructItem(context: Context, node: es.ClassBody) {
  const items = (node.body[0].key as es.ArrayExpression).elements
  const names = []
  const types = []
  for (const i of items) {
    const pairs = (i as es.ArrayExpression).elements
    names.push((pairs[0] as es.Identifier).name)
    types.push(evaluateType(pairs[1] as es.Pattern))
  }
  return { names: names, types: types }
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
      case 'ClassDeclaration':
        declareClass(context, statement)
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
function popEnvironment(context: Context, result: any = undefined) {
  const env = currentEnvironment(context)

  context.runtime.environments.shift()
  const out_env = currentEnvironment(context)
  for (const i in env.head) {
    if (env.head[i].value_type === '&' || env.head[i].value_type === '&mut') {
      const variable_name = (env.head[i].value as es.Identifier).name
      if (env.head[variable_name] !== undefined) {
        continue
      } else {
        updateVariableReferenceByName(variable_name, i, out_env, context)
      }
    }
  }
  garbage_collection(context, result)
}

function copy(context: Context, starting: number) {
  if (
    context.heap[starting + garbage_pointer_offset] >= context.to_space &&
    context.heap[starting + garbage_pointer_offset] <= context.top_of_space
  ) {
    return context.heap[starting + garbage_pointer_offset]
  } else {
    const free = context.free
    for (let i = 0; i < context.heap[starting + node_size_offset]; i += 1) {
      context.heap[free + i] = context.heap[starting + i]
    }
    context.free += context.heap[starting + node_size_offset]
    context.heap[starting + garbage_pointer_offset] = free
    return free
  }
}

function copy_environment(context: Context, environment: Environment) {
  if (environment === null || environment === undefined) {
    return
  }
  for (const i in environment.head) {
    if (environment.head[i].value_type === 'Box') {
      copy(context, environment.head[i].value)
    }
  }
}

function garbage_collection(context: Context, result: any = undefined) {
  const temp = context.from_space
  context.from_space = context.to_space
  context.to_space = temp
  context.top_of_space = context.to_space + context.heap_size / 2 - 1

  context.free = context.to_space
  let position = context.free

  if (result !== undefined && result.type === 'Box') {
    copy(context, result.value)
  }
  copy_environment(context, currentEnvironment(context))

  while (position < context.free) {
    for (
      let i = context.heap[position + first_offset];
      i < context.heap[position + last_offset];
      i += 1
    ) {
      context.heap[position + i] = copy(context, context.heap[object_value_offset + i])
    }
    position += context.heap[position + node_size_offset]
  }
}

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

function getStructPropertyIndex(type: any, property: string) {
  let index = undefined
  for (let i = 0; i < type.value.length; i += 1) {
    if (type.value[i] === property) {
      index = i
      break
    }
  }
  return index
}

function updateVariableReferenceByName(
  variable_name: string,
  ref_name: string,
  environment: Environment,
  context: Context
): any {
  if (environment === null || environment === undefined) {
    return
  }
  if (environment.head[variable_name] !== undefined) {
    for (let i = environment.head[variable_name].reference_names.length - 1; i >= 0; i -= 1) {
      if (environment.head[variable_name].reference_names[i] === ref_name) {
        environment.head[variable_name].reference_names.splice(i, 1)
        break
      }
    }
    if (environment.head[variable_name].reference_names.length === 0) {
      environment.head[variable_name].has_reference = 'null'
    }
  } else {
    return updateVariableReferenceByName(
      variable_name,
      ref_name,
      environment.tail as Environment,
      context
    )
  }
}
function* checkVariableReferenceByName(
  node: es.Identifier,
  ref_name: string,
  environment: Environment,
  context: Context,
):any{
  const name = node.name
  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    if (environment.head[name] !== undefined) {
      if (environment.head[name].reference_names !== undefined && environment.head[name].reference_names.includes(ref_name) ) {
        
      } else {
        handleRuntimeError(context, new errors.MultipleMutReference(name, node))
      }
    } else {
      return yield* checkVariableReferenceByName(
        node,
        ref_name,
        environment.tail as Environment,
        context
      )
    }
  }
}
function* setVariableReferenceByName(
  node: es.Identifier,
  ref_name: string,
  environment: Environment,
  context: Context,
  ref_type: string
): any {
  const name = node.name

  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    if (environment.head[name] !== undefined) {
      if (environment.head[name].value === undefined) {
        handleRuntimeError(context, new errors.ReferUninit(name, node))
       
      } else if (
        (environment.head[name].has_reference === '&' && ref_type === '&mut') ||
        (environment.head[name].has_reference === '&mut' && ref_type === '&')
      ) {
        handleRuntimeError(context, new errors.DifferentTypeReference(name, node))
      } 
      else if (environment.head[name].has_reference === '&mut' && ref_type === '&mut') {
        environment.head[name].reference_names.pop()
        environment.head[name].reference_names.push(ref_name)
      }  else {
        environment.head[name].has_reference = ref_type
        // list all reference variables of the object
        if (environment.head[name].reference_names === undefined) {
          environment.head[name].reference_names = []
          environment.head[name].reference_names.push(ref_name)
        } else {
          environment.head[name].reference_names.push(ref_name)
        }
      }
      
    } else {
      return yield* setVariableReferenceByName(
        node,
        ref_name,
        environment.tail as Environment,
        context,
        ref_type
      )
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
    if (variable.value_type === undefined) {
      return variable.value
    } else {
      return { value: variable.value, type: variable.value_type }
    }
  }
}

function* read_heap_value(start: number, context: Context, index: any): any {
  if (index === null) {
    if (context.heap[start] <= 4) {
      return context.heap[start + value_offset]
    } else {
      return { type: context.heap[start], value: start }
    }
  } else {
    const object_p = context.heap[start + object_value_offset + index]
    return yield* read_heap_value(object_p, context, null)
  }
}

function* getValueByIndex(node: es.Identifier, index: any, context: Context, is_array: boolean) {
  const environment = currentEnvironment(context)
  const variable = yield* getVariableByName(node, environment, context)
  if (variable.value_type === 'Box') {
    const starting = variable.value
    if (
      (is_array && context.heap[starting] !== context.object_type['[]']) ||
      (!is_array && context.heap[starting] === context.object_type['[]'])
    ) {
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
    if (node.property.type === 'Identifier' && node.property.name === '*') {
      const value = yield* evaluate(node.object, context)
      if (value.type === 'Box') {
        return
      } else {
        name = (value.value as es.Identifier).name
      }
    } else {
      name = (node.object as es.Identifier).name
      property = yield* evaluate(node.property, context)
    }
  } else {
    name = (node as es.Identifier).name
  }

  if (environment === null || environment === undefined) {
    handleRuntimeError(context, new errors.UndefinedVariable(name, node))
  } else {
    if (environment.head[name] !== undefined) {
      if (environment.head[name].variable_type === 'const') {
        handleRuntimeError(context, new errors.ConstAssignment(node, name))
      }
      if (node.type === 'MemberExpression' && (node.property as es.Identifier).name !== '*') {
        environment.head[name].value[property] = value
      } else {
        environment.head[name].value = value
      }

      return undefined
    } else {
      return yield* assignValueByName(node, value, environment.tail, context)
    }
  }
}

function pushToHeap(node: es.Node, value: any, context: Context) {
  if (isArray(value.value)) {
    pushArrayToHeap(node, value.value, value.type, context)
  } else {
    pushItemToHeap(node, value, context)
  }
}

function pushItemToHeap(node: es.Node, value: any, context: Context) {
  if (context.free + 6 > context.from_space) {
    garbage_collection(context)
  }
  if (context.free + 6 > context.from_space) {
    handleRuntimeError(context, new errors.HeapOverflow(node))
  }

  if (typeof value === 'number') {
    context.heap[context.free + node_type_offset] = NODETYPE_NUMBER
    context.heap[context.free + node_size_offset] = SIZE_NUMBER
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_NUMBER
    context.heap[context.free + last_offset] = LAST_NUMBER
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
  } else if (value.type === '&') {
    context.heap[context.free + node_type_offset] = NODETYPE_REFERENCE
    context.heap[context.free + node_size_offset] = SIZE_REFERENCE
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_REFERENCE
    context.heap[context.free + last_offset] = LAST_REFERENCE
    context.heap[context.free + value_offset] = value.value
    context.free += SIZE_REFERENCE
  } else if (value.type === 'Box') {
    context.heap[context.free + node_type_offset] = NODETYPE_BOX
    context.heap[context.free + node_size_offset] = SIZE_BOX
    context.heap[context.free + garbage_pointer_offset] = context.free
    context.heap[context.free + first_offset] = FIRST_BOX
    context.heap[context.free + last_offset] = LAST_BOX
    context.heap[context.free + value_offset] = value.value
  } else {
  }
}

function pushArrayToHeap(node: es.Node, value: any[], type: string, context: Context) {
  const starting = context.free
  let type_value
  if (isArray(type)) {
    if (type[0] === 'Box') {
      type_value = 'Box'
    } else {
      type_value = type[0] + '::' + type[1][0]
    }
  } else {
    type_value = type
  }

  if (value.length + 5 + starting > context.from_space) {
    garbage_collection(context)
  }
  if (value.length + 5 + starting > context.from_space) {
    handleRuntimeError(context, new errors.HeapOverflow(node))
  }

  context.heap[starting + node_type_offset] = context.object_type[type_value]
  context.heap[starting + node_size_offset] = value.length + 5
  context.heap[starting + garbage_pointer_offset] = starting
  context.heap[starting + first_offset] = FIRST_OBJECT
  context.heap[starting + last_offset] = FIRST_OBJECT + value.length

  context.free = context.free + value.length + 5

  for (let i = 0; i < value.length; i = i + 1) {
    context.heap[starting + 5 + i] = context.free
    pushToHeap(node, value[i], context)
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
function* evaluateBlockStatement(context: Context, node: es.BlockStatement) {
  let result
  declareFunctionsAndVariables(context, node)

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
    if (type_name === '::') {
      return yield* getEnumValue(context, currentEnvironment(context), node)
    } else {
      const result = { value: yield* evaluate(node.object, context), type: type_name }
      return result
    }
  } else if ((node.property as es.Identifier).name === '&') {
    // for mut reference
    return { value: node.object, type: '&' }
  } else if ((node.property as es.Identifier).name === '&mut') {
    // for mut reference
    return { value: node.object, type: '&mut' }
  } else if ((node.property as es.Identifier).name === '*') {
    // for dereference
    const env = currentEnvironment(context)
    const variable = yield* getVariableByName(node.object as es.Identifier, env, context)

    if (variable.value.type === 'Identifier') {
      yield* checkVariableReferenceByName(variable.value, (node.object as es.Identifier).name,env,context)
      return yield* evaluate(variable.value, context)
    } else {
      return yield* read_heap_value(variable.value, context, null)
    }
  } else {
    // array type and tuple type
    if (node.property.type === 'Literal') {
      const property = yield* evaluate(node.property, context)
      const is_array = node.optional
      if (node.object.type === 'Identifier') {
        return yield* getValueByIndex(node.object, property, context, is_array)
      } else {
        const value = yield* evaluate(node.object, context)
        if (value.type === undefined || typeof value.type !== 'number') {
          return value[property]
        } else {
          if (value.type === 5 || value.type === 6) {
            // for array and tuple type
            return yield* read_heap_value(value.value, context, property)
          }
        }
      }
    } else {
      // struct type
      const environment = currentEnvironment(context)
      const property = (node.property as es.Identifier).name

      // variable can be directly accessed
      if (node.object.type === 'Identifier') {
        const variable = yield* getVariableByName(
          node.object as es.Identifier,
          environment,
          context
        )
        const type = yield* getVariableByName(
          { type: 'Identifier', name: variable.value_type },
          environment,
          context
        )

        const index = getStructPropertyIndex(type, property)

        if (index === undefined) {
          return handleRuntimeError(
            context,
            new errors.InvaildProperty(node, type.variable_name, property)
          )
        } else {
          return variable.value[index]
        }
      } else {
        // variable cannot be directly accessed
        const variable = yield* evaluate(node.object, context)

        if (variable.type === undefined || typeof variable.type !== 'number') {
          const type = yield* getVariableByName(
            { type: 'Identifier', name: variable.value_type },
            environment,
            context
          )
          const index = getStructPropertyIndex(type, property)

          if (index === undefined) {
            return handleRuntimeError(
              context,
              new errors.InvaildProperty(node, type.variable_name, property)
            )
          } else {
            return variable.value[index]
          }
        } else {
          // get the type of the node
          let type_name
          for (const i in OBJECT_TYPES) {
            if (OBJECT_TYPES[i] === variable.type) {
              type_name = i
              break
            }
          }

          // find the index and get the value from the heap
          if (type_name === undefined) {
            return
          } else {
            const type = yield* getValueByName(
              { type: 'Identifier', name: type_name },
              currentEnvironment(context),
              context
            )

            const index = getStructPropertyIndex(type, property)

            if (index === undefined) {
              return handleRuntimeError(
                context,
                new errors.InvaildProperty(node, type.variable_name, property)
              )
            } else {
              return yield* read_heap_value(variable.value, context, index)
            }
          }
        }
      }
    }
  }
}

function* evaluateVariableDeclaration(context: Context, node: es.VariableDeclaration) {
  const environment = currentEnvironment(context)
  for (const declaration of node.declarations) {
    const name = ((declaration.id as es.AssignmentPattern).left as es.Identifier).name
    if (declaration.init !== null && declaration.init !== undefined) {
      const result = yield* evaluate(declaration.init as es.Expression, context)

      if (result.type === '&' || result.type === '&mut') {
        yield* setVariableReferenceByName(result.value, name, environment, context, result.type)
      }

      if (result.type === undefined) {
        environment.head[name].value = result
      } else {
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
  if (value instanceof ReturnValue) {
    value = value.value
  }
  if (value !== undefined) {
    if (value.type === '&' || value.type === '&mut') {
      yield* setVariableReferenceByName(
        value.value,
        (node.left as es.Identifier).name,
        currentEnvironment(context),
        context,
        value.type
      )
    }
  }
  yield* assignValueByName(node.left, value, environment, context)
  return undefined
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

function* getEnumValue(context: Context, environment: Environment, node: es.MemberExpression) {
  const temp = (node.object as es.ArrayExpression).elements

  const root = temp[0] as es.Identifier
  const leaf = (temp[1] as es.Identifier).name
  const value = yield* getVariableByName(root, environment, context)
  const return_value = { value: value[leaf], type: [root.name, [leaf]] }

  if (return_value === undefined) {
    return handleRuntimeError(context, new errors.InvaildEnumValue(root.name, leaf, node))
  } else {
    return return_value
  }
}

function* getCallee(context: Context, environment: Environment, node: es.Expression) {
  if (node.type === 'Identifier') {
    return yield* getVariableByName(node, environment, context)
  } else if (node.type === 'MemberExpression') {
    return yield* getEnumValue(context, environment, node)
  } else {
    return
  }
}

function* evaluateCallExpression(context: Context, node: es.CallExpression) {
  const environment = currentEnvironment(context)
  const func = yield* getCallee(context, environment, node.callee as es.Expression)
  if (
    node.callee.type === 'MemberExpression' &&
    node.callee.property.type === 'Identifier' &&
    node.callee.property.name === '::'
  ) {
    const value = []
    for (let i = 0; i < node.arguments.length; i += 1) {
      value.push(yield* evaluate(node.arguments[i], context))
    }
    return { value: value, type: func.type }
  } else {
    if (func.is_builtin) {
      const result = yield* builtin_evaluators[func.name](node, context)
      return result
    } else {
      if (func.init_type === 'struct') {
        const items = {}
        for (const i of node.arguments) {
          const temp = i as es.AssignmentExpression
          const name = (temp.left as es.Identifier).name
          const value = yield* evaluate(temp.right, context)
          items[name] = value
        }

        const return_value = []
        for (const i of func.value) {
          return_value.push(items[i])
        }

        return { value: return_value, type: func.variable_name }
      } else {
        const func_body = { type: 'BlockStatement', body: func.value } as es.BlockStatement

        const closure: Frame = {}
        for (let i = 0; i < node.arguments.length; i += 1) {
          const param = func.env[i]
          closure[param.param_name] = param
          const value = yield* evaluate(node.arguments[i], context)
          if (value.type) {
            closure[param.param_name].value = value.value
            closure[param.param_name].value_type = value.type
          } else {
            closure[param.param_name].value = value
          }
          if (value.type === '&mut' || value.type === '&') {
            yield* setVariableReferenceByName(
              value.value,
              param.param_name,
              environment,
              context,
              value.type
            )
          }
        }
        const func_env = {
          name: 'function_environment',
          tail: currentEnvironment(context),
          head: closure
        }

        pushEnvironment(context, func_env)
        let result = yield* evaluateBlockStatement(context, func_body)
        const env = currentEnvironment(context)
        popEnvironment(context, result)

        if (result instanceof ReturnValue) {
          result = result.value
        }

        if (result !== undefined) {
          if (result.type === '&' || result.type === '&mut') {
            if (env.head[(result.value as es.Identifier).name] !== undefined) {
              handleRuntimeError(
                context,
                new errors.ReturnLocalReference((node.callee as es.Identifier).name, node)
              )
            }
          }
        }

        return result
      }
    }
  }
}

function* evaluateWhileStatement(context: Context, node: es.WhileStatement) {
  let condition = yield* evaluate(node.test, context)
  let result: any

  while (condition) {
    result = yield* evaluate(node.body, context)
    condition = yield* evaluate(node.test, context)
    if (result instanceof ReturnValue) {
      return result
    } else if (result instanceof BreakValue) {
      return undefined
    }
  }

  return result
}

function* evaluateBreakStatement(context: Context, node: es.BreakStatement) {
  // process.exit(1)
  return node.label === null
    ? new BreakValue(undefined)
    : new BreakValue(yield* evaluate(node.label as es.Expression, context))
}

function* evaluateRangeExpression(context: Context, node: es.BinaryExpression) {
  let iter = yield* evaluate(node.left, context)
  const end = yield* evaluate(node.right, context)
  const result = []
  for (iter; iter < end; iter += 1) {
    result.push(iter)
  }
  return result
}

function* evaluateForInStatement(context: Context, node: es.ForInStatement) {
  let range
  if (node.right.type === 'BinaryExpression') {
    range = yield* evaluateRangeExpression(context, node.right)
  } else {
    range = yield* evaluate(node.right, context)
  }

  const iter_name = (node.left as es.ArrayPattern).elements[1] as es.Identifier
  const iter_type = (node.left as es.ArrayPattern).elements[0] as es.Identifier

  const for_env = {
    name: 'for_loop_environment',
    tail: currentEnvironment(context),
    head: {}
  }
  for_env.head[iter_name.name] = {
    param_name: iter_name.name,
    variable_type: iter_type.name === 'mut' ? 'var' : 'let',
    init_type: 'any',
    value: DECLARED_BUT_NOT_YET_ASSIGNED
  }

  let result

  for (const iter of range) {
    for_env.head[iter_name.name].value = iter
    pushEnvironment(context, for_env)

    result = yield* evaluate(node.body, context)
    if (result instanceof ReturnValue) {
      break
    } else if (result instanceof BreakValue) {
      result = undefined
      break
    } else if (result instanceof ContinueValue) {
      continue
    }
    popEnvironment(context, result)
  }

  return result
}

function* evaluateIfStatement(context: Context, node: es.IfStatement | es.ConditionalExpression) {
  const condition = yield* evaluate(node.test, context)

  if (condition) {
    return yield* evaluate(node.consequent as es.Statement, context)
  } else if (node.alternate === null) {
    return
  } else {
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
    pushToHeap(node,value,context)
    return {value:starting, type:"Box"}
  },

  "println!":function*(node: es.CallExpression, context: Context) {
    
    const length = node.arguments.length
    if(length === 0){
      // If there is nothing inside, print a newline 
      console.log("")
      return
    }

    const first = node.arguments[0]
    const first_value = yield* evaluate(first, context)
    if(first.type !== "Literal" || typeof first_value !== "string"){
      handleRuntimeError(
        context,
        new errors.InvaildprintlnArgumnet(node)
      )
    }
    
    let replace_num = 0
    let p = 0
    while( p < first_value.length-1){
      if(first_value.slice(p,p+2) === "{}"){
        replace_num += 1
        p+=2
      }
      else{
        p+=1
      }
    }

    if(length - 1 !== replace_num){
      handleRuntimeError(
        context,
        new errors.NotMatchprintln(node, replace_num, length - 1)
      )
    }

    let count = 0
    let replace_count = 1
    let value 
    let output = ""
    while( count < first_value.length-1){
      if(first_value.slice(count,count+2) === "{}"){
        value = yield* evaluate(node.arguments[replace_count], context)
        if(typeof value !== "number" && 
           typeof value !== "string" &&
           typeof value !== "boolean"){
            handleRuntimeError(
              context,
              new errors.NotPrintable(node, value)
            )
        }
        output = output +value
        count += 2 
        replace_count += 1
      } else{
        output = output +first_value.slice(count, count + 1)
        count += 1 
      }
    }
    
    // for(let i =0; i<length;i+=1){
    //   const arg = node.arguments[i]
    //   let value
    //   if(arg.type === "Identifier"){
    //     if(arg.name === "{}"){
          
          
    //       replace_count += 1
    //     }
    //     else{
    //       value = yield* evaluate(arg, context)
    //     }
    //   }
    //   else{
    //     value = yield* evaluate(arg, context)
    //   }
    //   output = output + value
    // }

    // Output in the terminal
    console.log(output)
    return 
  },
}

export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
  /** Simple Values */
  Literal: function* (node: es.Literal, context: Context) {
   const n = Number(node.raw)
    if (!isNaN(n)) {
      // const float = parseFloat(node.raw as string)
      // console.log(float)
      // if (float - n > 0.00000001){
      return n

        
    } else {
      if (node.raw === 'true') {
        return true
      } else if (node.raw === 'false') {
        return false
      } else {
        return (node.raw as string).slice(1, -1)
      }
    }
  },

  TemplateLiteral: function* (node: es.TemplateLiteral) {
    // Expressions like `${1}` are not allowed, so no processing needed
    return node.quasis[0].value.cooked
  },

  ThisExpression: function* (node: es.ThisExpression, context: Context) {
    return context.runtime.environments[0].thisContext
  },

  ArrayExpression: function* (node: es.ArrayExpression, context: Context) {
    const array_value = []
    for (const element of node.elements) {
      array_value.push(yield* evaluate(element, context))
    }
    return array_value
  },

  DebuggerStatement: function* (node: es.DebuggerStatement, context: Context) {
    yield
  },

  FunctionExpression: function* (node: es.FunctionExpression, context: Context) {
    throw new Error('Function expressions not supported in x-slang')
  },

  ArrowFunctionExpression: function* (node: es.ArrowFunctionExpression, context: Context) {
    throw new Error('Arrow functions expressions not supported in x-slang')
  },

  Identifier: function* (node: es.Identifier, context: Context) {
    return yield* evaluateIdentifier(context, node)
  },

  CallExpression: function* (node: es.CallExpression, context: Context) {
    return yield* evaluateCallExpression(context, node)
  },

  NewExpression: function* (node: es.NewExpression, context: Context) {
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

  UnaryExpression: function* (node: es.UnaryExpression, context: Context) {
    const value = yield* actualValue(node.argument, context)

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return yield* evaluateUnaryExpression(node.operator, value)
  },

  BinaryExpression: function* (node: es.BinaryExpression, context: Context) {
    const left = yield* actualValue(node.left, context)
    const right = yield* actualValue(node.right, context)
    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return yield* evaluateBinaryExpression(context, left, right, node)
  },

  ConditionalExpression: function* (node: es.ConditionalExpression, context: Context) {
    throw new Error('Conditional expressions not supported in x-slang')
  },

  LogicalExpression: function* (node: es.LogicalExpression, context: Context) {
    throw new Error('Logical expressions not supported in x-slang')
  },

  VariableDeclaration: function* (node: es.VariableDeclaration, context: Context) {
    yield* evaluateVariableDeclaration(context, node)
    return undefined
  },

  ContinueStatement: function* (node: es.ContinueStatement, context: Context) {
    throw new Error('Continue statements not supported in x-slang')
  },

  BreakStatement: function* (node: es.BreakStatement, context: Context) {
    return yield* evaluateBreakStatement(context, node)
  },

  ForStatement: function* (node: es.ForStatement, context: Context) {
    // Create a new block scope for the loop variables
    throw new Error('For statements not supported in x-slang')
  },
  ForInStatement: function* (node: es.ForInStatement, context: Context) {
    // Create a new block scope for the loop variables
    return yield* evaluateForInStatement(context, node)
  },
  MemberExpression: function* (node: es.MemberExpression, context: Context) {
    return yield* evaluateMemberExpression(context, node)
  },

  AssignmentExpression: function* (node: es.AssignmentExpression, context: Context) {
    return yield* evaluateAssignmentExpression(context, node)
  },

  FunctionDeclaration: function* (node: es.FunctionDeclaration, context: Context) {
    return undefined
  },

  IfStatement: function* (node: es.IfStatement | es.ConditionalExpression, context: Context) {
    return yield* evaluateIfStatement(context, node)
  },

  ExpressionStatement: function* (node: es.ExpressionStatement, context: Context) {
    return yield* evaluate(node.expression, context)
  },

  ReturnStatement: function* (node: es.ReturnStatement, context: Context) {
    return new ReturnValue(yield* evaluate(node.argument as es.Expression, context))
  },

  WhileStatement: function* (node: es.WhileStatement, context: Context) {
    return yield* evaluateWhileStatement(context, node as es.WhileStatement)
  },

  ObjectExpression: function* (node: es.ObjectExpression, context: Context) {
    throw new Error('Object expressions not supported in x-slang')
  },

  BlockStatement: function* (node: es.BlockStatement, context: Context) {
    const environment = createBlockEnvironment(context, 'block')

    pushEnvironment(context, environment)
    const result = yield* evaluateBlockStatement(context, node)
    popEnvironment(context, result)

    return result
  },

  ClassDeclaration: function* (node: es.ClassDeclaration, context: Context) {},

  ImportDeclaration: function* (node: es.ImportDeclaration, context: Context) {
    throw new Error('Import declarations not supported in x-slang')
  },

  Program: function* (node: es.Program, context: Context) {
    context.numberOfOuterEnvironments += 1
    context.object_type = OBJECT_TYPES

    const environment = createBlockEnvironment(context, 'programEnvironment')
    addBuiltinFunctions(environment)

    pushEnvironment(context, environment)
    declareFunctionsAndVariables(context, node.body[0] as es.BlockStatement)

    const main_call = {
      type: 'CallExpression',
      optional: false,
      callee: { type: 'Identifier', name: 'main' },
      arguments: []
    } as es.CallExpression

    // const result = yield* forceIt(yield* evaluateBlockSatement(context, node), context)

    yield* evaluate(main_call, context)

    return undefined
  }
}
const builtin_function_name = ['Box::new', 'println!']
//@ts-ignore
const reserved = ['i32', 'let', 'fn', 'mut']
function addBuiltinFunctions(environment: Environment) {
  for (const name of builtin_function_name) {
    environment.head[name] = { is_builtin: true, name: name }
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
      result = yield* evaluateBlockStatement(context, fun.node.body as es.BlockStatement)
      popEnvironment(context, result)
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
