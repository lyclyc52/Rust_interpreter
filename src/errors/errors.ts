/* tslint:disable: max-classes-per-file */
/* tslint:disable:max-line-length */
import { baseGenerator, generate } from 'astring'
import * as es from 'estree'
import { ErrorSeverity, ErrorType, SourceError, Value } from '../types'
import { stringify } from '../utils/stringify'
import { RuntimeSourceError } from './runtimeSourceError'

export class ModuleNotFound extends RuntimeSourceError {
  constructor(public moduleName: string, node?: es.Node) {
    super(node)
  }

  public explain() {
    return `Module "${this.moduleName}" not found.`
  }

  public elaborate() {
    return `
      You should check your Internet connection, and ensure you have used the correct module path.
    `
  }
}

export class ModuleInternalError extends RuntimeSourceError {
  constructor(public moduleName: string, node?: es.Node) {
    super(node)
  }

  public explain() {
    return `Error(s) occured when executing the module "${this.moduleName}".`
  }

  public elaborate() {
    return `
      You may need to contact with the author for this module to fix this error.
    `
  }
}

export class ExceptionError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: es.SourceLocation) {}

  public explain() {
    return this.error.toString()
  }

  public elaborate() {
    return 'TODO'
  }
}

export class MaximumStackLimitExceeded extends RuntimeSourceError {
  public static MAX_CALLS_TO_SHOW = 3

  private customGenerator = {
    ...baseGenerator,
    CallExpression(node: any, state: any) {
      state.write(generate(node.callee))
      state.write('(')
      const argsRepr = node.arguments.map((arg: any) => stringify(arg.value))
      state.write(argsRepr.join(', '))
      state.write(')')
    }
  }

  constructor(node: es.Node, private calls: es.CallExpression[]) {
    super(node)
  }

  public explain() {
    const repr = (call: es.CallExpression) => generate(call, { generator: this.customGenerator })
    return (
      'Maximum call stack size exceeded\n  ' + this.calls.map(call => repr(call) + '..').join('  ')
    )
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CallingNonFunctionValue extends RuntimeSourceError {
  constructor(private callee: Value, private node: es.Node) {
    super(node)
  }

  public explain() {
    return `Calling non-function value ${stringify(this.callee)}.`
  }

  public elaborate() {
    const calleeVal = this.callee
    const calleeStr = stringify(calleeVal)
    let argStr = ''

    const callArgs = (this.node as es.CallExpression).arguments

    argStr = callArgs.map(generate).join(', ')

    const elabStr = `Because ${calleeStr} is not a function, you cannot run ${calleeStr}(${argStr}).`
    const multStr = `If you were planning to perform multiplication by ${calleeStr}, you need to use the * operator.`

    if (Number.isFinite(calleeVal)) {
      return `${elabStr} ${multStr}`
    } else {
      return elabStr
    }
  }
}

export class UndefinedVariable extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} not declared.`
  }

  public elaborate() {
    return `Before you can read the value of ${this.name}, you need to declare it as a variable or a constant. You can do this using the let or const keywords.`
  }
}

export class UnassignedVariable extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} declared later in current scope but not yet assigned`
  }

  public elaborate() {
    return `If you're trying to access the value of ${this.name} from an outer scope, please rename the inner ${this.name}. An easy way to avoid this issue in future would be to avoid declaring any variables or constants with the name ${this.name} in the same scope.`
  }
}

export class InvalidNumberOfArguments extends RuntimeSourceError {
  private calleeStr: string

  constructor(node: es.Node, private expected: number, private got: number) {
    super(node)
    this.calleeStr = generate((node as es.CallExpression).callee)
  }

  public explain() {
    return `Expected ${this.expected} arguments, but got ${this.got}.`
  }

  public elaborate() {
    const calleeStr = this.calleeStr
    const pluralS = this.expected === 1 ? '' : 's'

    return `Try calling function ${calleeStr} again, but with ${this.expected} argument${pluralS} instead. Remember that arguments are separated by a ',' (comma).`
  }
}

export class VariableRedeclaration extends RuntimeSourceError {
  constructor(private node: es.Node, private name: string, private writable?: boolean) {
    super(node)
  }

  public explain() {
    return `Redeclaring name ${this.name}.`
  }

  public elaborate() {
    if (this.writable === true) {
      const elabStr = `Since ${this.name} has already been declared, you can assign a value to it without re-declaring.`

      let initStr = ''

      if (this.node.type === 'FunctionDeclaration') {
        initStr =
          '(' + (this.node as es.FunctionDeclaration).params.map(generate).join(',') + ') => {...'
      } else if (this.node.type === 'VariableDeclaration') {
        initStr = generate((this.node as es.VariableDeclaration).declarations[0].init)
      }

      return `${elabStr} As such, you can just do\n\n\t${this.name} = ${initStr};\n`
    } else if (this.writable === false) {
      return `You will need to declare another variable, as ${this.name} is read-only.`
    } else {
      return ''
    }
  }
}

export class ConstAssignment extends RuntimeSourceError {
  constructor(node: es.Node, private name: string) {
    super(node)
  }

  public explain() {
    return `Cannot assign new value to constant ${this.name}.`
  }

  public elaborate() {
    return `As ${this.name} was declared as a constant, its value cannot be changed. You will have to declare a new variable.`
  }
}

export class GetPropertyError extends RuntimeSourceError {
  constructor(node: es.Node, private obj: Value, private prop: string) {
    super(node)
  }

  public explain() {
    return `Cannot read property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class GetInheritedPropertyError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node: es.Node, private obj: Value, private prop: string) {
    super(node)
    this.location = node.loc!
  }

  public explain() {
    return `Cannot read inherited property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class SetPropertyError extends RuntimeSourceError {
  constructor(node: es.Node, private obj: Value, private prop: string) {
    super(node)
  }

  public explain() {
    return `Cannot assign property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class ConstWithoutInitialValue extends RuntimeSourceError {
  public const_variable: string

  constructor(node: es.Node, public variable_name: string) {
    super(node)
    this.const_variable = variable_name
  }

  public explain() {
    return `Constant variable ${this.const_variable} need to be initialized.`
  }

  public elaborate() {
    return `Assign a value to ${this.const_variable} when it is declared.`
  }
}

export class InvalidOperator extends RuntimeSourceError {
  public variable: string
  public is_array: boolean
  constructor(node: es.Node, public variable_name: string, is_array: boolean) {
    super(node)
    this.variable = variable_name
  }

  public explain() {
    return `Invaild indexing operator for variable ${this.variable}.`
  }

  public elaborate() {
    if (this.is_array) {
      return `"." operator might be used for Array object. `
    } else {
      return `"[]" operator might be used for Tuple object. `
    }
  }
}


export class MultipleMutReference extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `${this.name} already has a mut reference.`
  }

  public elaborate() {
    return `One variable can only have one mutable reference.`
  }
}

export class DifferentTypeReference extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `${this.name} already has mut/unmut reference. Cannot assign a different type of reference`
  }

  public elaborate() {
    return ``
  }
}

export class InvaildParameter extends RuntimeSourceError {
  constructor(node: es.Node) {
    super(node)
  }

  public explain() {
    return `Function parameter(s) must have initial type.`
  }

  public elaborate() {
    return `Need : operator to assign a type`
  }
}


export class NotMatchprintln extends RuntimeSourceError {
  public replace_num: number
  public replace_arg: number
  constructor(node: es.Node, replace_num:number, replace_arg:number) {
    super(node)
    this.replace_num = replace_num
    this.replace_arg = replace_arg
  }

  public explain() {
    return this.replace_num+` positional arguments in format string, but `+this.replace_arg+ ` arguments given`
  }

  public elaborate() {
    return this.replace_num+` positional arguments in format string, but `+this.replace_arg+ ` arguments given`
  }
}




export class NotPrintable extends RuntimeSourceError {
  public value:any;
  constructor(node: es.Node, value:any) {
    super(node)
    this.value = value
  }

  public explain() {
    return this.value+` cannot be printed.`
  }

  public elaborate() {
    return `Only string, boolean and number type can be printed.`
  }
}

export class InvaildprintlnArgumnet extends RuntimeSourceError {
  constructor(node: es.Node) {
    super(node)
  }

  public explain() {
    return `println! can only output string.`
  }

  public elaborate() {
    return `Use "{}" instead.`
  }
}


export class ReferUninit extends RuntimeSourceError {
  public name:string;
  constructor(name:string, node: es.Node) {
    super(node)
    this.name = this.name
  }

  public explain() {
    return  `Assign a reference to an uninitialized variable `+this.name +`.`
  }

  public elaborate() {
    return `Only string, boolean and number type can be printed.`
  }
}


export class ReturnLocalReference extends RuntimeSourceError {
  public name:string;
  constructor(name:string, node: es.Node) {
    super(node)
    this.name =name
  }

  public explain() {
    return  this.name +` returns a local reference.`
  }

  public elaborate() {
    return `Only string, boolean and number type can be printed.`
  }
}


export class InvaildEnumValue extends RuntimeSourceError {
  public root:string;
  public leaf:string;
  constructor(root:string, leaf:string, node: es.Node) {
    super(node)
    this.root =root
    this.leaf =leaf
  }

  public explain() {
    return  this.root +` does not have `+this.leaf +`.`
  }

  public elaborate() {
    return `Only string, boolean and number type can be printed.`
  }
}

export class RecursiveDefiniton extends RuntimeSourceError {
  public name:string;

  constructor(name:string, node: es.Node) {
    super(node)
    this.name =name

  }

  public explain() {
    return  this.name +` has recursive definition.`
  }

  public elaborate() {
    return ``
  }
}


export class InvaildProperty extends RuntimeSourceError {
  public struct_type:string;
  public property:string;

  constructor(node: es.Node, type:string, property:string) {
    super(node)
    this.struct_type =type
    this.property = property

  }

  public explain() {
    return  this.struct_type +` does not have property `+this.property+`.`
  }

  public elaborate() {
    return ``
  }
}