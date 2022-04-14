/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { RustLexer } from '../Rust/RustLexer'
import { RustParser } from '../Rust/RustParser'

// import { CalcLexer } from '../lang/CalcLexer'
// import { CalcParser }  from '../lang/CalcParser'
// import {
//   AdditionContext,
//   // CalcParser,
//   DivisionContext,
//   ExpressionContext,
//   MultiplicationContext,
//   NumberContext,
//   ParenthesesContext,
//   PowerContext,
//   StartContext,
//   SubtractionContext
// } from '../lang/CalcParser'

// import { CalcVisitor } from '../lang/CalcVisitor'
// import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
// import { ParseTree } from 'antlr4ts/tree/ParseTree'
// import { RuleNode } from 'antlr4ts/tree/RuleNode'
// import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

// import { AttributedExpressionContext } from "../Rust/RustParser";
import { LiteralExpressionContext } from '../Rust/RustParser'
import { PathExpression_Context } from '../Rust/RustParser'
// import { MethodCallExpressionContext } from "../Rust/RustParser";
// import { FieldExpressionContext } from "../Rust/RustParser";
import { TupleIndexingExpressionContext } from '../Rust/RustParser'
// import { AwaitExpressionContext } from "../Rust/RustParser";
import { CallExpressionContext } from '../Rust/RustParser'
import { IndexExpressionContext } from '../Rust/RustParser'
// import { ErrorPropagationExpressionContext } from "../Rust/RustParser";
import { BorrowExpressionContext } from '../Rust/RustParser'
import { DereferenceExpressionContext } from '../Rust/RustParser'
// import { NegationExpressionContext } from "../Rust/RustParser";
// import { TypeCastExpressionContext } from "../Rust/RustParser";
import { ArithmeticOrLogicalExpressionContext } from '../Rust/RustParser'
import { ComparisonExpressionContext } from '../Rust/RustParser'
// import { LazyBooleanExpressionContext } from "../Rust/RustParser";
import { RangeExpressionContext } from '../Rust/RustParser'
import { AssignmentExpressionContext } from '../Rust/RustParser'
// import { CompoundAssignmentExpressionContext } from "../Rust/RustParser";
import { ContinueExpressionContext } from '../Rust/RustParser'
import { BreakExpressionContext } from '../Rust/RustParser'
// import { ReturnExpressionContext } from "../Rust/RustParser";
import { GroupedExpressionContext } from '../Rust/RustParser'
import { ArrayExpressionContext } from '../Rust/RustParser'
import { TupleExpressionContext } from '../Rust/RustParser'
// import { StructExpression_Context } from "../Rust/RustParser";
// import { EnumerationVariantExpression_Context } from "../Rust/RustParser";
// import { ClosureExpression_Context } from "../Rust/RustParser";
import { ExpressionWithBlock_Context } from '../Rust/RustParser'
// import { MacroInvocationAsExpressionContext } from "../Rust/RustParser";
import { CrateContext } from '../Rust/RustParser'
// import { MacroInvocationContext } from "../Rust/RustParser";
import { DelimTokenTreeContext } from '../Rust/RustParser'
import { TokenTreeContext } from '../Rust/RustParser'
import { TokenTreeTokenContext } from '../Rust/RustParser'
import { MacroInvocationSemiContext } from '../Rust/RustParser'
// import { MacroRulesDefinitionContext } from "../Rust/RustParser";
// import { MacroRulesDefContext } from "../Rust/RustParser";
// import { MacroRulesContext } from "../Rust/RustParser";
// import { MacroRuleContext } from "../Rust/RustParser";
// import { MacroMatcherContext } from "../Rust/RustParser";
// import { MacroMatchContext } from "../Rust/RustParser";
// import { MacroMatchTokenContext } from "../Rust/RustParser";
// import { MacroFragSpecContext } from "../Rust/RustParser";
// import { MacroRepSepContext } from "../Rust/RustParser";
// import { MacroRepOpContext } from "../Rust/RustParser";
// import { MacroTranscriberContext } from "../Rust/RustParser";
import { ItemContext } from '../Rust/RustParser'
import { VisItemContext } from '../Rust/RustParser'
import { MacroItemContext } from '../Rust/RustParser'
// import { ModuleContext } from "../Rust/RustParser";
// import { ExternCrateContext } from "../Rust/RustParser";
// import { CrateRefContext } from "../Rust/RustParser";
// import { AsClauseContext } from "../Rust/RustParser";
// import { UseDeclarationContext } from "../Rust/RustParser";
// import { UseTreeContext } from "../Rust/RustParser";
import { Function_Context } from '../Rust/RustParser'
// import { FunctionQualifiersContext } from "../Rust/RustParser";
// import { AbiContext } from "../Rust/RustParser";
import { FunctionParametersContext } from '../Rust/RustParser'
// import { SelfParamContext } from "../Rust/RustParser";
// import { ShorthandSelfContext } from "../Rust/RustParser";
// import { TypedSelfContext } from "../Rust/RustParser";
import { FunctionParamContext } from '../Rust/RustParser'
import { FunctionParamPatternContext } from '../Rust/RustParser'
import { FunctionReturnTypeContext } from '../Rust/RustParser'
// import { TypeAliasContext } from "../Rust/RustParser";
// import { Struct_Context } from "../Rust/RustParser";
import { StructStructContext } from '../Rust/RustParser'
// import { TupleStructContext } from "../Rust/RustParser";
import { StructFieldsContext } from '../Rust/RustParser'
import { StructFieldContext } from '../Rust/RustParser'
import { TupleFieldsContext } from '../Rust/RustParser'
import { TupleFieldContext } from '../Rust/RustParser'
import { EnumerationContext } from '../Rust/RustParser'
import { EnumItemsContext } from '../Rust/RustParser'
import { EnumItemContext } from '../Rust/RustParser'
import { EnumItemTupleContext } from '../Rust/RustParser'
// import { EnumItemStructContext } from "../Rust/RustParser";
// import { EnumItemDiscriminantContext } from "../Rust/RustParser";
// import { Union_Context } from "../Rust/RustParser";
// import { ConstantItemContext } from "../Rust/RustParser";
// import { StaticItemContext } from "../Rust/RustParser";
// import { Trait_Context } from "../Rust/RustParser";
// import { ImplementationContext } from "../Rust/RustParser";
// import { InherentImplContext } from "../Rust/RustParser";
// import { TraitImplContext } from "../Rust/RustParser";
// import { ExternBlockContext } from "../Rust/RustParser";
// import { ExternalItemContext } from "../Rust/RustParser";
// import { GenericParamsContext } from "../Rust/RustParser";
// import { GenericParamContext } from "../Rust/RustParser";
// import { LifetimeParamContext } from "../Rust/RustParser";
// import { TypeParamContext } from "../Rust/RustParser";
// import { ConstParamContext } from "../Rust/RustParser";
// import { WhereClauseContext } from "../Rust/RustParser";
// import { WhereClauseItemContext } from "../Rust/RustParser";
// import { LifetimeWhereClauseItemContext } from "../Rust/RustParser";
// import { TypeBoundWhereClauseItemContext } from "../Rust/RustParser";
// import { ForLifetimesContext } from "../Rust/RustParser";
// import { AssociatedItemContext } from "../Rust/RustParser";
// import { InnerAttributeContext } from "../Rust/RustParser";
// import { OuterAttributeContext } from "../Rust/RustParser";
// import { AttrContext } from "../Rust/RustParser";
// import { AttrInputContext } from "../Rust/RustParser";
import { StatementContext } from '../Rust/RustParser'
import { LetStatementContext } from '../Rust/RustParser'
import { ExpressionStatementContext } from '../Rust/RustParser'
import { ExpressionContext } from '../Rust/RustParser'
// import { ComparisonOperatorContext } from "../Rust/RustParser";
// import { CompoundAssignOperatorContext } from "../Rust/RustParser";
import { ExpressionWithBlockContext } from '../Rust/RustParser'
import { LiteralExpression_Context } from '../Rust/RustParser'
import { PathExpressionContext } from '../Rust/RustParser'
import { BlockExpressionContext } from '../Rust/RustParser'
// import { StatementsContext } from "../Rust/RustParser";
// import { AsyncBlockExpressionContext } from "../Rust/RustParser";
// import { UnsafeBlockExpressionContext } from "../Rust/RustParser";
import { ArrayElementsContext } from '../Rust/RustParser'
import { TupleElementsContext } from '../Rust/RustParser'
import { TupleIndexContext } from '../Rust/RustParser'
import { StructExpressionContext } from '../Rust/RustParser'
import { StructExprStructContext } from '../Rust/RustParser'
import { StructExprFieldsContext } from '../Rust/RustParser'
import { StructExprFieldContext } from '../Rust/RustParser'
// import { StructBaseContext } from "../Rust/RustParser";
// import { StructExprTupleContext } from "../Rust/RustParser";
// import { StructExprUnitContext } from "../Rust/RustParser";
// import { EnumerationVariantExpressionContext } from "../Rust/RustParser";
// import { EnumExprStructContext } from "../Rust/RustParser";
// import { EnumExprFieldsContext } from "../Rust/RustParser";
// import { EnumExprFieldContext } from "../Rust/RustParser";
// import { EnumExprTupleContext } from "../Rust/RustParser";
// import { EnumExprFieldlessContext } from "../Rust/RustParser";
import { CallParamsContext } from '../Rust/RustParser'
// import { ClosureExpressionContext } from "../Rust/RustParser";
// import { ClosureParametersContext } from "../Rust/RustParser";
// import { ClosureParamContext } from "../Rust/RustParser";
import { LoopExpressionContext } from '../Rust/RustParser'
import { InfiniteLoopExpressionContext } from '../Rust/RustParser'
import { PredicateLoopExpressionContext } from '../Rust/RustParser'
// import { PredicatePatternLoopExpressionContext } from "../Rust/RustParser";
import { IteratorLoopExpressionContext } from '../Rust/RustParser'
// import { LoopLabelContext } from "../Rust/RustParser";
import { IfExpressionContext } from '../Rust/RustParser'
// import { IfLetExpressionContext } from "../Rust/RustParser";
// import { MatchExpressionContext } from "../Rust/RustParser";
// import { MatchArmsContext } from "../Rust/RustParser";
// import { MatchArmExpressionContext } from "../Rust/RustParser";
// import { MatchArmContext } from "../Rust/RustParser";
// import { MatchArmPatternsContext } from "../Rust/RustParser";
// import { MatchArmGuardContext } from "../Rust/RustParser";
import { PatternContext } from '../Rust/RustParser'
import { PatternWithoutRangeContext } from '../Rust/RustParser'
// import { LiteralPatternContext } from "../Rust/RustParser";
import { IdentifierPatternContext } from '../Rust/RustParser'
// import { WildcardPatternContext } from "../Rust/RustParser";
// import { RestPatternContext } from "../Rust/RustParser";
// import { RangePatternContext } from "../Rust/RustParser";
// import { ObsoleteRangePatternContext } from "../Rust/RustParser";
// import { RangePatternBoundContext } from "../Rust/RustParser";
// import { ReferencePatternContext } from "../Rust/RustParser";
// import { StructPatternContext } from "../Rust/RustParser";
// import { StructPatternElementsContext } from "../Rust/RustParser";
// import { StructPatternFieldsContext } from "../Rust/RustParser";
// import { StructPatternFieldContext } from "../Rust/RustParser";
// import { StructPatternEtCeteraContext } from "../Rust/RustParser";
// import { TupleStructPatternContext } from "../Rust/RustParser";
// import { TupleStructItemsContext } from "../Rust/RustParser";
// import { TuplePatternContext } from "../Rust/RustParser";
// import { TuplePatternItemsContext } from "../Rust/RustParser";
// import { GroupedPatternContext } from "../Rust/RustParser";
// import { SlicePatternContext } from "../Rust/RustParser";
// import { SlicePatternItemsContext } from "../Rust/RustParser";
// import { PathPatternContext } from "../Rust/RustParser";
import { Type_Context } from '../Rust/RustParser'
import { TypeNoBoundsContext } from '../Rust/RustParser'
// import { ParenthesizedTypeContext } from "../Rust/RustParser";
// import { NeverTypeContext } from "../Rust/RustParser";
import { TupleTypeContext } from '../Rust/RustParser'
// import { ArrayTypeContext } from "../Rust/RustParser";
// import { SliceTypeContext } from "../Rust/RustParser";
import { ReferenceTypeContext } from '../Rust/RustParser'
// import { RawPointerTypeContext } from "../Rust/RustParser";
// import { BareFunctionTypeContext } from "../Rust/RustParser";
// import { FunctionTypeQualifiersContext } from "../Rust/RustParser";
// import { BareFunctionReturnTypeContext } from "../Rust/RustParser";
// import { FunctionParametersMaybeNamedVariadicContext } from "../Rust/RustParser";
// import { MaybeNamedFunctionParametersContext } from "../Rust/RustParser";
// import { MaybeNamedParamContext } from "../Rust/RustParser";
// import { MaybeNamedFunctionParametersVariadicContext } from "../Rust/RustParser";
// import { TraitObjectTypeContext } from "../Rust/RustParser";
import { TraitObjectTypeOneBoundContext } from '../Rust/RustParser'
// import { ImplTraitTypeContext } from "../Rust/RustParser";
// import { ImplTraitTypeOneBoundContext } from "../Rust/RustParser";
// import { InferredTypeContext } from "../Rust/RustParser";
// import { TypeParamBoundsContext } from "../Rust/RustParser";
// import { TypeParamBoundContext } from "../Rust/RustParser";
import { TraitBoundContext } from '../Rust/RustParser'
// import { LifetimeBoundsContext } from "../Rust/RustParser";
// import { LifetimeContext } from "../Rust/RustParser";
import { SimplePathContext } from '../Rust/RustParser'
// import { SimplePathSegmentContext } from "../Rust/RustParser";
import { PathInExpressionContext } from '../Rust/RustParser'
import { PathExprSegmentContext } from '../Rust/RustParser'
import { PathIdentSegmentContext } from '../Rust/RustParser'
import { GenericArgsContext } from '../Rust/RustParser'
// import { GenericArgContext } from "../Rust/RustParser";
// import { GenericArgsConstContext } from "../Rust/RustParser";
// import { GenericArgsLifetimesContext } from "../Rust/RustParser";
// import { GenericArgsTypesContext } from "../Rust/RustParser";
// import { GenericArgsBindingsContext } from "../Rust/RustParser";
// import { GenericArgsBindingContext } from "../Rust/RustParser";
// import { QualifiedPathInExpressionContext } from "../Rust/RustParser";
// import { QualifiedPathTypeContext } from "../Rust/RustParser";
// import { QualifiedPathInTypeContext } from "../Rust/RustParser";
import { TypePathContext } from '../Rust/RustParser'
import { TypePathSegmentContext } from '../Rust/RustParser'
// import { TypePathFnContext } from "../Rust/RustParser";
// import { TypePathInputsContext } from "../Rust/RustParser";
// import { VisibilityContext } from "../Rust/RustParser";
import { IdentifierContext } from '../Rust/RustParser'
// import { KeywordContext } from "../Rust/RustParser";
import { MacroIdentifierLikeTokenContext } from '../Rust/RustParser'
import { MacroLiteralTokenContext } from '../Rust/RustParser'
import { MacroPunctuationTokenContext } from '../Rust/RustParser'
// import { ShlContext } from "../Rust/RustParser";
// import { ShrContext } from "../Rust/RustParser";

// type IsSameType<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;

import { RustParserVisitor } from '../Rust/RustParserVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

const Statement_type = [
  'ExpressionStatement',
  'BlockStatement',
  'EmptyStatement',
  'DebuggerStatement',
  'WithStatement',
  'ReturnStatement',
  'LabeledStatement',
  'BreakStatement',
  'ContinueStatement',
  'IfStatement',
  'SwitchStatement',
  'ThrowStatement',
  'TryStatement',
  'WhileStatement',
  'DoWhileStatement',
  'ForStatement',
  'ForInStatement',
  'ForOfStatement',
  'Declaration'
]
// @ts-ignore
const BinaryOperator = [
  '==',
  '!=',
  '===',
  '!==',
  '<',
  '<=',
  '>',
  '>=',
  '<<',
  '>>',
  '>>>',
  '+',
  '-',
  '*',
  '/',
  '%',
  '**',
  '|',
  '^',
  '&',
  'in',
  'instanceof'
]

// @ts-ignore
const LogicalOperator = ['||', '&&', '??']

const Expression_type = [
  'ThisExpression',
  'ArrayExpression',
  'ObjectExpression',
  'FunctionExpression',
  'ArrowFunctionExpression',
  'YieldExpression',
  'Literal',
  'UnaryExpression',
  'UpdateExpression',
  'BinaryExpression',
  'AssignmentExpression',
  'LogicalExpression',
  'MemberExpression',
  'ConditionalExpression',
  'CallExpression',
  'NewExpression',
  'SequenceExpression',
  'TemplateLiteral',
  'TaggedTemplateExpression',
  'ClassExpression',
  'MetaProperty',
  'Identifier',
  'AwaitExpression',
  'ImportExpression',
  'ChainExpression'
]

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

// class ExpressionGenerator implements RustParserVisitor<es.Expression> {

//   visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined
//   // visitStart?: ((ctx: StartContext) => es.Expression) | undefined

//   visit(tree: ParseTree): es.Expression {
//     return tree.accept(this)
//   }
//   visitChildren(node: RuleNode): es.Expression {
//     const expressions: es.Expression[] = []
//     for (let i = 0; i < node.childCount; i++) {
//       expressions.push(node.getChild(i).accept(this))
//     }
//     return {
//       type: 'SequenceExpression',
//       expressions
//     }
//   }
//   visitTerminal(node: TerminalNode): es.Expression{
//     return node.accept(this)
//   }

//   visitErrorNode(node: ErrorNode): es.Expression {
//     throw new FatalSyntaxError(
//       {
//         start: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine
//         },
//         end: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine + 1
//         }
//       },
//       `invalid syntax ${node.text}`
//     )
//   }
// }

class PatternGenerator implements RustParserVisitor<es.Pattern> {
  // visitPattern(ctx: PatternContext): es.Pattern{
  //   return this.visit(ctx.getChild(0))
  // }

  visitPatternWithoutRange(ctx: PatternWithoutRangeContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitIdentifier(ctx: IdentifierContext): es.Pattern {
    return {
      type: 'Identifier',
      name: ctx.text
    }
  }

  visitType_(ctx: Type_Context): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitTypeNoBounds(ctx: TypeNoBoundsContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitTraitBound(ctx: TraitBoundContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitSimplePath(ctx: SimplePathContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitTraitObjectTypeOneBound(ctx: TraitObjectTypeOneBoundContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitTypePath(ctx: TypePathContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitPathIdentSegment(ctx: PathIdentSegmentContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitGenericArgs(ctx: GenericArgsContext): es.Pattern {
    return this.visit(ctx.getChild(1))
  }
  visitTypePathSegment(ctx: TypePathSegmentContext): es.Pattern {
    if (ctx.childCount === 1) {
      return this.visit(ctx.getChild(0))
    } else {
      return {
        type: 'MemberExpression',
        object: this.visit(ctx.getChild(0)) as es.Identifier | es.MemberExpression,
        property: this.visit(ctx.getChild(1)) as es.Identifier | es.MemberExpression,
        optional: false,
        computed: false
      }
    }
  }

  visitReferenceType(ctx: ReferenceTypeContext): es.Pattern {
    if (ctx.childCount === 3) {
      return {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: '&mut' },
        property: this.visit(ctx.getChild(2)) as es.Identifier,
        optional: false,
        computed: false
      }
    } else {
      return {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: '&' },
        property: this.visit(ctx.getChild(1)) as es.Identifier,
        optional: false,
        computed: false
      }
    }
  }

  visitTupleType(ctx: TupleTypeContext): es.Pattern {
    const type_tuple: es.Pattern[] = []
    for (let i = 1; i < ctx.childCount; i += 2) {
      type_tuple.push(this.visit(ctx.getChild(i)))
    }
    return {
      type: 'ArrayPattern',
      elements: type_tuple
    }
  }

  visitFunctionParameters(ctx: FunctionParametersContext): es.Pattern {
    const params_array: es.Pattern[] = []
    for (let i = 0; i < ctx.childCount; i = i + 2) {
      params_array.push(this.visit(ctx.getChild(i)))
    }
    return {
      type: 'ArrayPattern',
      elements: params_array
    }
  }

  visitFunctionParam(ctx: FunctionParamContext): es.Pattern {
    return this.visit(ctx.getChild(0))
  }

  visitFunctionParamPattern(ctx: FunctionParamPatternContext): es.Pattern {
    return {
      type: 'AssignmentPattern',
      left: this.visit(ctx.getChild(0)),
      right: this.visit(ctx.getChild(2)) as es.Identifier | es.MemberExpression
    }
  }

  visitFunctionReturnType(ctx: FunctionReturnTypeContext): es.Pattern {
    return this.visit(ctx.getChild(1))
  }

  visitIdentifierPattern(ctx: IdentifierPatternContext): es.Pattern {
    let variable_name, variable_kind

    if (ctx.getChild(0).text === 'mut') {
      variable_kind = 'mut'
      variable_name = this.visit(ctx.getChild(1))
    } else {
      variable_kind = 'not_mut'
      variable_name = this.visit(ctx.getChild(0))
    }
    const pattern_array: es.Pattern[] = []

    pattern_array.push({ type: 'Identifier', name: variable_kind })
    pattern_array.push(variable_name)
    return {
      type: 'ArrayPattern',
      elements: pattern_array
    }
  }

  visitPattern?: ((ctx: PatternContext) => es.Pattern) | undefined
  // visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Pattern {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Pattern {
    if (node.childCount === 1) {
      return this.visit(node.getChild(0))
    }
    const patterns: es.Pattern[] = []
    for (let i = 0; i < node.childCount; i++) {
      patterns.push(node.getChild(i).accept(this))
    }
    return {
      type: 'ArrayPattern',
      elements: patterns
    }
  }
  visitTerminal(node: TerminalNode): es.Pattern {
    return { type: 'Identifier', name: node.text }
  }

  visitErrorNode(node: ErrorNode): es.Pattern {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

class StatementGenerator implements RustParserVisitor<es.Statement | es.Expression> {
  public pattern_generator = new PatternGenerator()

  /**
   * This part is for Expression output
   *
   */

  visitLiteralExpression_(ctx: LiteralExpression_Context): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitLiteralExpression(ctx: LiteralExpressionContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx.getChild(1).text as es.BinaryOperator,
      left: this.visit(ctx.getChild(0)) as es.Expression,
      right: this.visit(ctx.getChild(2)) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitComparisonExpression(ctx: ComparisonExpressionContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx.getChild(1).text as es.BinaryOperator,
      left: this.visit(ctx.getChild(0)) as es.Expression,
      right: this.visit(ctx.getChild(2)) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }

  // Store the range in a BinaryExpression
  visitRangeExpression(ctx: RangeExpressionContext): es.Expression {
    if (ctx.childCount === 3) {
      return {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as es.BinaryOperator,
        left: this.visit(ctx.getChild(0)) as es.Expression,
        right: this.visit(ctx.getChild(2)) as es.Expression,
        loc: contextToLocation(ctx)
      }
    } else if (ctx.childCount === 2) {
      if (ctx.getChild(0).text === '..' || ctx.getChild(0).text === '..=') {
        return {
          type: 'BinaryExpression',
          operator: ctx.getChild(0).text as es.BinaryOperator,
          left: { type: 'Literal', value: null },
          right: this.visit(ctx.getChild(1)) as es.Expression,
          loc: contextToLocation(ctx)
        }
      } else {
        return {
          type: 'BinaryExpression',
          operator: ctx.getChild(1).text as es.BinaryOperator,
          left: this.visit(ctx.getChild(0)) as es.Expression,
          right: { type: 'Literal', value: null },
          loc: contextToLocation(ctx)
        }
      }
    } else {
      return {
        type: 'BinaryExpression',
        operator: ctx.getChild(0).text as es.BinaryOperator,
        left: { type: 'Literal', value: null },
        right: { type: 'Literal', value: null },
        loc: contextToLocation(ctx)
      }
    }
  }

  // To distinguish tuple from array, we use the property in MemberExpression
  visitTupleElements(ctx: TupleElementsContext): es.Expression {
    const value_array: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i += 2) {
      value_array.push(this.visit(ctx.getChild(i)) as es.Expression)
    }
    return {
      type: 'ArrayExpression',
      elements: value_array
    }
  }

  visitTupleExpression(ctx: TupleExpressionContext): es.Expression {
    return {
      type: 'MemberExpression',
      object: this.visit(ctx.getChild(1)) as es.Expression,
      property: { type: 'Identifier', name: '()' },
      computed: false,
      optional: false
    }
  }

  visitArrayElements(ctx: ArrayElementsContext): es.Expression {
    const value_array: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i += 2) {
      value_array.push(this.visit(ctx.getChild(i)) as es.Expression)
    }
    return {
      type: 'ArrayExpression',
      elements: value_array
    }
  }
  visitArrayExpression(ctx: ArrayExpressionContext): es.Expression {
    return {
      type: 'MemberExpression',
      object: this.visit(ctx.getChild(1)) as es.Expression,
      property: { type: 'Identifier', name: '[]' },
      computed: false,
      optional: false
    }
  }

  visitBorrowExpression(ctx: BorrowExpressionContext): es.Expression {
    if (ctx.getChild(1).text === 'mut') {
      return {
        type: 'MemberExpression',
        object: this.visit(ctx.getChild(2)) as es.Expression,
        property: { type: 'Identifier', name: '&mut' },
        computed: false,
        optional: false
      }
    } else {
      return {
        type: 'MemberExpression',
        object: this.visit(ctx.getChild(1)) as es.Expression,
        property: { type: 'Identifier', name: '&' },
        computed: false,
        optional: false
      }
    }
  }

  visitDereferenceExpression(ctx: DereferenceExpressionContext): es.Expression {
    return {
      type: 'MemberExpression',
      object: this.visit(ctx.getChild(1)) as es.Expression,
      property: { type: 'Identifier', name: '*' },
      computed: false,
      optional: false
    }
  }

  visitPathExpression_(ctx: PathExpression_Context): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  visitPathExpression(ctx: PathExpressionContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  /**
   * We return a call pattern name directly.
   * Box::new will be regarded as a whole.
   */

  visitPathInExpression(ctx: PathInExpressionContext): es.Expression {
    if (ctx.childCount === 1) {
      return this.visit(ctx.getChild(0)) as es.Expression
    } else {
      if (ctx.text === 'Box::new') {
        return {
          type: 'Identifier',
          name: ctx.text
        }
      } else {
        const elements = []
        elements.push(this.visit(ctx.getChild(0)) as es.Expression)
        elements.push(this.visit(ctx.getChild(2)) as es.Expression)

        return {
          type: 'MemberExpression',
          object: { type: 'ArrayExpression', elements: elements },
          property: { type: 'Identifier', name: '::' },
          computed: false,
          optional: false
        }
      }
    }
  }
  visitPathExprSegment(ctx: PathExprSegmentContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  visitPathIdentSegment(ctx: PathIdentSegmentContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  // option represent whether it is a tuple
  visitIndexExpression(ctx: IndexExpressionContext): es.Expression {
    return {
      type: 'MemberExpression',
      object: this.visit(ctx.getChild(0)) as es.Expression,
      property: this.visit(ctx.getChild(2)) as es.Expression,
      computed: false,
      optional: true
    }
  }

  visitStructExpression(ctx: StructExpressionContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  visitStructExprStruct(ctx: StructExprStructContext): es.Expression {
    const struct_body = this.visit(ctx.getChild(2)) as es.ArrayExpression
    return {
      type: 'CallExpression',
      callee: this.visit(ctx.getChild(0)) as es.Expression,
      arguments: struct_body.elements,
      optional: false
    }
  }

  visitStructExprFields(ctx: StructExprFieldsContext): es.Expression {
    const items: es.Expression[] = []

    for (let i = 0; i < ctx.childCount; i += 2) {
      items.push(this.visit(ctx.getChild(i)) as es.Expression)
    }

    return {
      type: 'ArrayExpression',
      elements: items
    }
  }

  visitStructExprField(ctx: StructExprFieldContext): es.Expression {
    return {
      type: 'AssignmentExpression',
      operator: '=',
      left: this.pattern_generator.visit(ctx.getChild(0)),
      right: this.visit(ctx.getChild(2)) as es.Expression
    }
  }

  visitTupleIndex(ctx: TupleIndexContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitTupleIndexingExpression(ctx: TupleIndexingExpressionContext): es.Expression {
    return {
      type: 'MemberExpression',
      object: this.visit(ctx.getChild(0)) as es.Expression,
      property: this.visit(ctx.getChild(2)) as es.Expression,
      computed: false,
      optional: false
    }
  }
  visitAssignmentExpression(ctx: AssignmentExpressionContext): es.Expression {
    const operator = ctx.getChild(1).text
    return {
      type: 'AssignmentExpression',
      operator: operator as es.AssignmentOperator,
      left: this.visit(ctx.getChild(0)) as es.Identifier,
      right: this.visit(ctx.getChild(2)) as es.Expression
    }
  }

  visitIdentifier(ctx: IdentifierContext): es.Identifier {
    return {
      type: 'Identifier',
      name: ctx.text
    }
  }

  visitGroupedExpression(ctx: GroupedExpressionContext): es.Expression {
    return this.visit(ctx.getChild(1)) as es.Expression
  }

  visitCallParams(ctx: CallParamsContext): es.ArrayExpression {
    const params_array: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i = i + 2) {
      params_array.push(this.visit(ctx.getChild(i)) as es.Expression)
    }
    return {
      type: 'ArrayExpression',
      elements: params_array
    }
  }

  visitCallExpression(ctx: CallExpressionContext): es.Expression {
    let params: es.Expression[] = []
    if (ctx.getChild(ctx.childCount - 2).text !== '(') {
      const temp = this.visit(ctx.getChild(ctx.childCount - 2)) as es.ArrayExpression
      params = temp.elements as es.Expression[]
    }

    const callee_name = this.visit(ctx.getChild(0))
    return {
      type: 'CallExpression',
      callee: callee_name as es.Expression,
      arguments: params,
      optional: false
    }
  }

  /**
   * This part is for statement output
   *
   */
  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    if (
      ctx.getChild(0) instanceof ExpressionWithBlock_Context ||
      ctx.getChild(0) instanceof ExpressionWithBlockContext
    ) {
      return this.visit(ctx.getChild(0)) as es.Statement
    } else {
      let result
      if (ctx.getChild(0) instanceof BreakExpressionContext) {
        result = this.visitBreakExpressionContext(ctx.getChild(0) as BreakExpressionContext)
      } else {
        result = this.visit(ctx.getChild(0))
      }

      if (Statement_type.includes(result.type)) {
        return result as es.Statement
      } else {
        return {
          type: 'ExpressionStatement',
          expression: result as es.Expression
        }
      }
    }
  }

  visitExpressionWithBlock(ctx: ExpressionWithBlockContext): es.Statement {
    return this.visit(ctx.getChild(0)) as es.Statement
  }

  visitStructStruct(ctx: StructStructContext): es.Statement {
    const struct_body = this.visit(ctx.getChild(3))

    // const struct_variables: es.VariableDeclarator[] = []
    // for (let i = 0; i < body_node.childCount; i += 2) {
    //   const variable = {
    //     type: 'VariableDeclarator',
    //     id: {
    //       type: 'AssignmentPattern',
    //       left: this.pattern_generator.visit(ctx.getChild(0)),
    //       right: this.pattern_generator.visit(ctx.getChild(2))
    //     } as es.AssignmentPattern,
    //     init: null
    //   } as es.VariableDeclarator
    //   struct_variables.push(variable)
    // }

    // const struct_body = {
    //   type: 'VariableDeclaration',
    //   declarations: struct_variables,
    //   kind: 'const'
    // }
    return {
      type: 'ClassDeclaration',
      id: this.pattern_generator.visit(ctx.getChild(1)) as es.Identifier,
      superClass: { type: 'Identifier', name: 'struct' },
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: struct_body as es.Expression,
            value: {} as es.FunctionExpression,
            kind: 'set',
            computed: false,
            static: false
          }
        ]
      }
    }
  }

  visitStructFields(ctx: StructFieldsContext): es.Expression {
    const items: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i += 2) {
      items.push(this.visit(ctx.getChild(i)) as es.Expression)
    }
    return {
      type: 'ArrayExpression',
      elements: items
    }
  }

  visitStructField(ctx: StructFieldContext): es.Expression {
    return {
      type: 'ArrayExpression',
      elements: [
        this.visit(ctx.getChild(0)) as es.Expression,
        this.visit(ctx.getChild(2)) as es.Expression
      ]
    }
  }

  visitLetStatement(ctx: LetStatementContext): es.Statement {
    const variable = this.pattern_generator.visit(ctx.getChild(1)) as es.ArrayPattern

    const mut_sign = variable.elements[0] as es.Identifier
    const variable_name = variable.elements[1] as es.Identifier

    const equal_position = ctx.childCount - 3
    const type_position = 2

    // Check whether it specifies any type
    const variable_type =
      ctx.getChild(type_position).text == ':'
        ? this.pattern_generator.visit(ctx.getChild(type_position + 1))
        : { type: 'Identifier', name: 'null' }

    const varibale_id = {
      type: 'AssignmentPattern',
      left: variable_name,
      right: variable_type
    } as es.AssignmentPattern

    const varibale_declarator = {
      type: 'VariableDeclarator',
      id: varibale_id,
      init:
        ctx.getChild(equal_position).text == '='
          ? this.visit(ctx.getChild(equal_position + 1))
          : null
    } as es.VariableDeclarator

    return {
      type: 'VariableDeclaration',
      declarations: [varibale_declarator],
      kind: mut_sign.name == 'mut' ? 'var' : 'let'
    }
  }

  visitItem(ctx: ItemContext): es.Statement | es.Expression {
    return this.visit(ctx.getChild(0))
  }

  visitMacroItem(ctx: MacroItemContext): es.Statement | es.Expression {
    return this.visit(ctx.getChild(0))
  }

  visitMacroInvocationSemi(ctx: MacroInvocationSemiContext): es.Expression {
    const args: es.Expression[] = []
    for (let i = 3; i < ctx.childCount - 2; i += 1) {
      const item = this.visit(ctx.getChild(i)) as es.Expression
      if (item.type === 'ArrayExpression') {
        for (let j = 0; j < item.elements.length; ) {
          let i = item.elements[j]
          if (i.type === 'MemberExpression' && i.optional) {
            const last = args.pop() as es.Expression
            i.object = last
          } else if (i.type === 'Identifier' && i.name === '.') {
            const last = args.pop()
            j += 1
            i = item.elements[j] as es.MemberExpression
            i.object = last as es.Expression
          }
          args.push(i as es.Expression)
          j += 1
        }
      } else {
        args.push(item)
      }
    }

    return {
      type: 'CallExpression',
      optional: false,
      callee: { type: 'Identifier', name: 'println!' },
      arguments: args
    }
  }

  visitTokenTree(ctx: TokenTreeContext): es.Expression {
    const tokens: es.Expression[] = []

    for (let i = 0; i < ctx.childCount; ) {
      const item = this.visit(ctx.getChild(i)) as es.Expression
      if (item.type === 'Identifier' && item.name === ',') {
      } else if (item.type === 'Identifier' && item.name === '.') {
        const last = tokens.pop() as es.Expression
        if (last === undefined) {
          tokens.push(item)
        }
        i += 1
        const next = this.visit(ctx.getChild(i)) as es.Expression
        tokens.push({
          type: 'MemberExpression',
          object: last,
          property: next,
          computed: false,
          optional: false
        })
      } else if (item.type === 'Identifier' && item.name === '*') {
        i += 1
        const next = this.visit(ctx.getChild(i)) as es.Expression
        tokens.push({
          type: 'MemberExpression',
          object: next,
          property: item,
          computed: false,
          optional: false
        })
      } else {
        tokens.push(item)
      }
      i += 1
    }

    return {
      type: 'ArrayExpression',
      elements: tokens
    }
  }

  visitDelimTokenTree(ctx: DelimTokenTreeContext): es.Expression {
    if (ctx.text === '{}') {
      return { type: 'Identifier', name: '{}' }
    } else {
      if (ctx.getChild(0).text === '[') {
        return {
          type: 'MemberExpression',
          object: {} as es.Expression,
          property: (this.visit(ctx.getChild(1)) as es.ArrayExpression)
            .elements[0] as es.Expression,
          computed: false,
          optional: true
        }
      } else if (ctx.getChild(0).text === '(') {
        return (this.visit(ctx.getChild(1)) as es.ArrayExpression).elements[0] as es.Expression
      } else {
        return this.visit(ctx.getChild(1)) as es.Expression
      }
    }
  }

  visitTokenTreeToken(ctx: TokenTreeTokenContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }
  visitMacroIdentifierLikeToken(ctx: MacroIdentifierLikeTokenContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  visitMacroPunctuationToken(ctx: MacroPunctuationTokenContext): es.Expression {
    return { type: 'Identifier', name: ctx.text }
  }

  visitMacroLiteralToken(ctx: MacroLiteralTokenContext): es.Expression {
    return this.visit(ctx.getChild(0)) as es.Expression
  }

  visitVisItem(ctx: VisItemContext): es.Statement | es.Expression {
    return this.visit(ctx.getChild(0))
  }

  visitEnumeration(ctx: EnumerationContext): es.Statement {
    const enum_items = ctx.childCount === 5 ? this.visit(ctx.getChild(3)) : undefined
    return {
      type: 'ClassDeclaration',
      id: this.pattern_generator.visit(ctx.getChild(1)) as es.Identifier,
      superClass: { type: 'Identifier', name: ctx.getChild(0).text },
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: enum_items as es.Expression,
            value: {} as es.FunctionExpression,
            kind: 'set',
            computed: false,
            static: false
          }
        ]
      }
    }
  }

  visitEnumItems(ctx: EnumItemsContext): es.Expression {
    const value_enum: es.Expression[] = []

    for (let i = 0; i < ctx.childCount; i += 2) {
      value_enum.push(this.visit(ctx.getChild(i)) as es.Expression)
    }

    return { type: 'ArrayExpression', elements: value_enum }
  }

  visitEnumItem(ctx: EnumItemContext): es.Expression {
    const membership = ctx.childCount === 2 ? this.visit(ctx.getChild(1)) : {}
    return {
      type: 'ClassExpression',
      id: this.visit(ctx.getChild(0)) as es.Identifier,
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: membership as es.Expression,
            value: {} as es.FunctionExpression,
            kind: 'constructor',
            computed: false,
            static: false
          }
        ]
      }
    }
  }

  visitEnumItemTuple(ctx: EnumItemTupleContext): es.Expression {
    return this.visit(ctx.getChild(1)) as es.Expression
  }

  visitTupleFields(ctx: TupleFieldsContext): es.Expression {
    const value_enum: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i += 2) {
      value_enum.push(this.visit(ctx.getChild(i)) as es.Expression)
    }

    return {
      type: 'MemberExpression',
      object: { type: 'ArrayExpression', elements: value_enum },
      property: { type: 'Identifier', name: '()' },
      computed: false,
      optional: false
    }
  }

  visitTupleField(ctx: TupleFieldContext): es.Expression {
    return this.pattern_generator.visit(ctx.getChild(0)) as es.Expression
  }

  /**
   * Special Expression.
   * Kind of Confuse. It can be regarded as a expression or a statement in Rust.
   * It includes Block, If, While, Loop.
   *
   * Here we only consider the expression cases
   */
  visitExpressionWithBlock_(ctx: ExpressionWithBlock_Context): es.Statement {
    return this.visit(ctx.getChild(0)) as es.Statement
  }
  visitBlockExpression(ctx: BlockExpressionContext): es.Statement {
    const statements: es.Statement[] = []
    if (ctx.getChild(1).text !== '}') {
      const block_statements_node = ctx.getChild(1)
      for (let i = 0; i < block_statements_node.childCount; i++) {
        if (block_statements_node.getChild(i) instanceof StatementContext) {
          statements.push(this.visit(block_statements_node.getChild(i)) as es.Statement)
        } else {
          statements.push(
            this.visitReturnStatement(block_statements_node.getChild(i) as ExpressionContext)
          )
        }
      }
    }

    return {
      type: 'BlockStatement',
      body: statements
    }
  }

  visitIfExpression(ctx: IfExpressionContext): es.Statement {
    const if_statement = this.visit(ctx.getChild(2)) as es.BlockStatement
    const else_statement =
      ctx.childCount > 3 ? (this.visit(ctx.getChild(ctx.childCount - 1)) as es.Statement) : null
    const ifelse_statement = {
      type: 'IfStatement',
      test: this.visit(ctx.getChild(1)),
      consequent: if_statement,
      alternate: else_statement
    } as es.IfStatement
    return ifelse_statement
  }

  visitLoopExpression(ctx: LoopExpressionContext): es.Statement {
    return this.visit(ctx.getChild(0)) as es.Statement
  }

  visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): es.Statement {
    return {
      type: 'WhileStatement',
      test: this.visit(ctx.getChild(1)) as es.Expression,
      body: this.visit(ctx.getChild(2)) as es.Statement
    }
  }

  visitIteratorLoopExpression(ctx: IteratorLoopExpressionContext): es.Statement {
    return {
      type: 'ForInStatement',
      left: this.pattern_generator.visit(ctx.getChild(1)) as es.Pattern,
      right: this.visit(ctx.getChild(3)) as es.Expression,
      body: this.visit(ctx.getChild(4)) as es.Statement
    }
  }

  /* 
  the last item in the parameter list is the return type, which name is "->" 
  and value is the type. If the return type is not specified, the type value 
  is "null". Note that the name of the parameters is an array of its name and \
  a "notmut" symbol. In the function, the "notmut" symbol is removed.
  */
  visitFunction_(ctx: Function_Context): es.Statement {
    const func_param_offset = ctx.getChild(4).text === ')' ? 0 : 1
    const return_type_offset = ctx.getChild(ctx.childCount - 2).text === ')' ? 0 : 1
    let params: es.Pattern[] = []
    if (func_param_offset === 1) {
      const param_pattern = this.pattern_generator.visit(
        ctx.getChild(3 + func_param_offset)
      ) as es.ArrayPattern
      params = param_pattern.elements
      // for ( let i = 0; i < params.length; i++)
      // {
      //   let temp = params[i] as es.AssignmentPattern
      //   let variable_name = temp.left as es.ArrayPattern
      //   temp.left = variable_name.elements[1]
      //   params[i] = temp
      // }
    }

    const return_type_pattern =
      return_type_offset === 1
        ? (this.pattern_generator.visit(
            ctx.getChild(4 + func_param_offset + return_type_offset)
          ) as es.Pattern)
        : ({ type: 'Identifier', name: 'null' } as es.Pattern)

    params.push(return_type_pattern)

    const func_body = this.visit(ctx.getChild(ctx.childCount - 1)) as es.FunctionExpression
    return {
      params: params,
      type: 'FunctionDeclaration',
      id: this.pattern_generator.visit(ctx.getChild(2)) as es.Identifier,
      body: func_body.body as es.BlockStatement
    }
  }

  visitInfiniteLoopExpression(ctx: InfiniteLoopExpressionContext): es.Statement {
    return {
      type: 'WhileStatement',
      test: {
        type: 'Literal',
        value: true,
        raw: 'true',
        loc: contextToLocation(ctx)
      },
      body: this.visit(ctx.getChild(1)) as es.Statement
    }
  }

  visitReturnStatement(ctx: ExpressionContext): es.Statement {
    return {
      type: 'ReturnStatement',
      argument: this.visit(ctx) as es.Expression
    }
  }
  visitContinueExpressionContext(ctx: ContinueExpressionContext): es.Statement {
    return {
      type: 'ContinueStatement',
      label: ctx.childCount === 2 ? (this.visit(ctx.getChild(1)) as es.Identifier) : null
    }
  }
  visitBreakExpressionContext(ctx: BreakExpressionContext): es.Statement {
    return {
      type: 'BreakStatement',
      label: ctx.childCount === 2 ? (this.visit(ctx.getChild(1)) as es.Identifier) : null
    }
  }

  visitCrate(ctx: CrateContext): es.Statement {
    const body: es.Statement[] = []
    for (let i = 0; i < ctx.childCount - 1; i += 1) {
      body.push(this.visit(ctx.getChild(i)) as es.Statement)
    }
    return {
      type: 'BlockStatement',
      body: body
    }
  }

  visitStatement?: ((ctx: StatementContext) => es.Statement) | undefined

  // visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Statement | es.Expression {
    for (let i = 0; i < tree.childCount; i++) {
      if (tree.getChild(i) instanceof ErrorNode) {
        return this.visit(tree.getChild(i))
      }
    }
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Statement | es.Expression {
    const statements: es.Statement[] = []
    if (node.childCount === 1) {
      return this.visit(node.getChild(0))
    }
    for (let i = 0; i < node.childCount; i++) {
      statements.push(this.visit(node.getChild(0)) as es.Statement)
    }
    return {
      type: 'BlockStatement',
      body: statements
    }
  }
  visitTerminal(node: TerminalNode): es.Statement | es.Expression {
    return {
      type: 'Identifier',
      name: node.text
    }
  }

  visitErrorNode(node: ErrorNode): es.Statement | es.Expression {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

function convertExpression(expression: ExpressionContext): es.Statement {
  const statement_generator = new StatementGenerator()

  const output = expression.accept(statement_generator)
  if (Expression_type.includes(output.type)) {
    return {
      type: 'ExpressionStatement',
      expression: output as es.Expression
    }
  } else {
    return output as es.Statement
  }
}

function convertSource(expression: ExpressionContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [convertExpression(expression)]
  }
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = new ANTLRInputStream(source)
    const lexer = new RustLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new RustParser(tokenStream)

    // const lexer = new CalcLexer(inputStream)
    // const tokenStream = new CommonTokenStream(lexer)
    // const parser = new CalcParser(tokenStream)

    parser.buildParseTree = true
    try {
      const tree = parser.crate()

      program = convertSource(tree)
      // const output = program.body[0] as es.BlockStatement
      // console.log((output.body[1] as es.FunctionDeclaration).body)
      // const output1 = output.body[1] as es.VariableDeclaration
      // console.log(output.body[0])
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
