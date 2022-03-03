/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { RustLexer } from '../Rust/RustLexer'
import { RustParser }  from '../Rust/RustParser'

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
// import { LiteralExpressionContext } from "../Rust/RustParser";
import { PathExpression_Context } from "../Rust/RustParser";
// import { MethodCallExpressionContext } from "../Rust/RustParser";
// import { FieldExpressionContext } from "../Rust/RustParser";
// import { TupleIndexingExpressionContext } from "../Rust/RustParser";
// import { AwaitExpressionContext } from "../Rust/RustParser";
import { CallExpressionContext } from "../Rust/RustParser";
// import { IndexExpressionContext } from "../Rust/RustParser";
// import { ErrorPropagationExpressionContext } from "../Rust/RustParser";
// import { BorrowExpressionContext } from "../Rust/RustParser";
// import { DereferenceExpressionContext } from "../Rust/RustParser";
// import { NegationExpressionContext } from "../Rust/RustParser";
// import { TypeCastExpressionContext } from "../Rust/RustParser";
import { ArithmeticOrLogicalExpressionContext } from "../Rust/RustParser";
// import { ComparisonExpressionContext } from "../Rust/RustParser";
// import { LazyBooleanExpressionContext } from "../Rust/RustParser";
// import { RangeExpressionContext } from "../Rust/RustParser";
import { AssignmentExpressionContext } from "../Rust/RustParser";
// import { CompoundAssignmentExpressionContext } from "../Rust/RustParser";
// import { ContinueExpressionContext } from "../Rust/RustParser";
// import { BreakExpressionContext } from "../Rust/RustParser";
// import { ReturnExpressionContext } from "../Rust/RustParser";
import { GroupedExpressionContext } from "../Rust/RustParser";
// import { ArrayExpressionContext } from "../Rust/RustParser";
// import { TupleExpressionContext } from "../Rust/RustParser";
// import { StructExpression_Context } from "../Rust/RustParser";
// import { EnumerationVariantExpression_Context } from "../Rust/RustParser";
// import { ClosureExpression_Context } from "../Rust/RustParser";
// import { ExpressionWithBlock_Context } from "../Rust/RustParser";
// import { MacroInvocationAsExpressionContext } from "../Rust/RustParser";
// import { CrateContext } from "../Rust/RustParser";
// import { MacroInvocationContext } from "../Rust/RustParser";
// import { DelimTokenTreeContext } from "../Rust/RustParser";
// import { TokenTreeContext } from "../Rust/RustParser";
// import { TokenTreeTokenContext } from "../Rust/RustParser";
// import { MacroInvocationSemiContext } from "../Rust/RustParser";
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
// import { ItemContext } from "../Rust/RustParser";
// import { VisItemContext } from "../Rust/RustParser";
// import { MacroItemContext } from "../Rust/RustParser";
// import { ModuleContext } from "../Rust/RustParser";
// import { ExternCrateContext } from "../Rust/RustParser";
// import { CrateRefContext } from "../Rust/RustParser";
// import { AsClauseContext } from "../Rust/RustParser";
// import { UseDeclarationContext } from "../Rust/RustParser";
// import { UseTreeContext } from "../Rust/RustParser";
import { Function_Context } from "../Rust/RustParser";
// import { FunctionQualifiersContext } from "../Rust/RustParser";
// import { AbiContext } from "../Rust/RustParser";
import { FunctionParametersContext } from "../Rust/RustParser";
// import { SelfParamContext } from "../Rust/RustParser";
// import { ShorthandSelfContext } from "../Rust/RustParser";
// import { TypedSelfContext } from "../Rust/RustParser";
import { FunctionParamContext } from "../Rust/RustParser";
import { FunctionParamPatternContext } from "../Rust/RustParser";
import { FunctionReturnTypeContext } from "../Rust/RustParser";
// import { TypeAliasContext } from "../Rust/RustParser";
// import { Struct_Context } from "../Rust/RustParser";
// import { StructStructContext } from "../Rust/RustParser";
// import { TupleStructContext } from "../Rust/RustParser";
// import { StructFieldsContext } from "../Rust/RustParser";
// import { StructFieldContext } from "../Rust/RustParser";
// import { TupleFieldsContext } from "../Rust/RustParser";
// import { TupleFieldContext } from "../Rust/RustParser";
// import { EnumerationContext } from "../Rust/RustParser";
// import { EnumItemsContext } from "../Rust/RustParser";
// import { EnumItemContext } from "../Rust/RustParser";
// import { EnumItemTupleContext } from "../Rust/RustParser";
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
import { StatementContext } from "../Rust/RustParser";
import { LetStatementContext } from "../Rust/RustParser";
import { ExpressionStatementContext } from "../Rust/RustParser";
import { ExpressionContext } from "../Rust/RustParser";
// import { ComparisonOperatorContext } from "../Rust/RustParser";
// import { CompoundAssignOperatorContext } from "../Rust/RustParser";
import { ExpressionWithBlockContext } from "../Rust/RustParser";
import { LiteralExpression_Context } from "../Rust/RustParser";
// import { PathExpressionContext } from "../Rust/RustParser";
import { BlockExpressionContext } from "../Rust/RustParser";
// import { StatementsContext } from "../Rust/RustParser";
// import { AsyncBlockExpressionContext } from "../Rust/RustParser";
// import { UnsafeBlockExpressionContext } from "../Rust/RustParser";
// import { ArrayElementsContext } from "../Rust/RustParser";
// import { TupleElementsContext } from "../Rust/RustParser";
// import { TupleIndexContext } from "../Rust/RustParser";
// import { StructExpressionContext } from "../Rust/RustParser";
// import { StructExprStructContext } from "../Rust/RustParser";
// import { StructExprFieldsContext } from "../Rust/RustParser";
// import { StructExprFieldContext } from "../Rust/RustParser";
// import { StructBaseContext } from "../Rust/RustParser";
// import { StructExprTupleContext } from "../Rust/RustParser";
// import { StructExprUnitContext } from "../Rust/RustParser";
// import { EnumerationVariantExpressionContext } from "../Rust/RustParser";
// import { EnumExprStructContext } from "../Rust/RustParser";
// import { EnumExprFieldsContext } from "../Rust/RustParser";
// import { EnumExprFieldContext } from "../Rust/RustParser";
// import { EnumExprTupleContext } from "../Rust/RustParser";
// import { EnumExprFieldlessContext } from "../Rust/RustParser";
import { CallParamsContext } from "../Rust/RustParser";
// import { ClosureExpressionContext } from "../Rust/RustParser";
// import { ClosureParametersContext } from "../Rust/RustParser";
// import { ClosureParamContext } from "../Rust/RustParser";
// import { LoopExpressionContext } from "../Rust/RustParser";
// import { InfiniteLoopExpressionContext } from "../Rust/RustParser";
// import { PredicateLoopExpressionContext } from "../Rust/RustParser";
// import { PredicatePatternLoopExpressionContext } from "../Rust/RustParser";
// import { IteratorLoopExpressionContext } from "../Rust/RustParser";
// import { LoopLabelContext } from "../Rust/RustParser";
import { IfExpressionContext } from "../Rust/RustParser";
// import { IfLetExpressionContext } from "../Rust/RustParser";
// import { MatchExpressionContext } from "../Rust/RustParser";
// import { MatchArmsContext } from "../Rust/RustParser";
// import { MatchArmExpressionContext } from "../Rust/RustParser";
// import { MatchArmContext } from "../Rust/RustParser";
// import { MatchArmPatternsContext } from "../Rust/RustParser";
// import { MatchArmGuardContext } from "../Rust/RustParser";
import { PatternContext } from "../Rust/RustParser";
import { PatternWithoutRangeContext } from "../Rust/RustParser";
// import { LiteralPatternContext } from "../Rust/RustParser";
import { IdentifierPatternContext } from "../Rust/RustParser";
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
import { Type_Context } from "../Rust/RustParser";
// import { TypeNoBoundsContext } from "../Rust/RustParser";
// import { ParenthesizedTypeContext } from "../Rust/RustParser";
// import { NeverTypeContext } from "../Rust/RustParser";
// import { TupleTypeContext } from "../Rust/RustParser";
// import { ArrayTypeContext } from "../Rust/RustParser";
// import { SliceTypeContext } from "../Rust/RustParser";
// import { ReferenceTypeContext } from "../Rust/RustParser";
// import { RawPointerTypeContext } from "../Rust/RustParser";
// import { BareFunctionTypeContext } from "../Rust/RustParser";
// import { FunctionTypeQualifiersContext } from "../Rust/RustParser";
// import { BareFunctionReturnTypeContext } from "../Rust/RustParser";
// import { FunctionParametersMaybeNamedVariadicContext } from "../Rust/RustParser";
// import { MaybeNamedFunctionParametersContext } from "../Rust/RustParser";
// import { MaybeNamedParamContext } from "../Rust/RustParser";
// import { MaybeNamedFunctionParametersVariadicContext } from "../Rust/RustParser";
// import { TraitObjectTypeContext } from "../Rust/RustParser";
// import { TraitObjectTypeOneBoundContext } from "../Rust/RustParser";
// import { ImplTraitTypeContext } from "../Rust/RustParser";
// import { ImplTraitTypeOneBoundContext } from "../Rust/RustParser";
// import { InferredTypeContext } from "../Rust/RustParser";
// import { TypeParamBoundsContext } from "../Rust/RustParser";
// import { TypeParamBoundContext } from "../Rust/RustParser";
// import { TraitBoundContext } from "../Rust/RustParser";
// import { LifetimeBoundsContext } from "../Rust/RustParser";
// import { LifetimeContext } from "../Rust/RustParser";
// import { SimplePathContext } from "../Rust/RustParser";
// import { SimplePathSegmentContext } from "../Rust/RustParser";
// import { PathInExpressionContext } from "../Rust/RustParser";
// import { PathExprSegmentContext } from "../Rust/RustParser";
// import { PathIdentSegmentContext } from "../Rust/RustParser";
// import { GenericArgsContext } from "../Rust/RustParser";
// import { GenericArgContext } from "../Rust/RustParser";
// import { GenericArgsConstContext } from "../Rust/RustParser";
// import { GenericArgsLifetimesContext } from "../Rust/RustParser";
// import { GenericArgsTypesContext } from "../Rust/RustParser";
// import { GenericArgsBindingsContext } from "../Rust/RustParser";
// import { GenericArgsBindingContext } from "../Rust/RustParser";
// import { QualifiedPathInExpressionContext } from "../Rust/RustParser";
// import { QualifiedPathTypeContext } from "../Rust/RustParser";
// import { QualifiedPathInTypeContext } from "../Rust/RustParser";
// import { TypePathContext } from "../Rust/RustParser";
// import { TypePathSegmentContext } from "../Rust/RustParser";
// import { TypePathFnContext } from "../Rust/RustParser";
// import { TypePathInputsContext } from "../Rust/RustParser";
// import { VisibilityContext } from "../Rust/RustParser";
import { IdentifierContext } from "../Rust/RustParser";
// import { KeywordContext } from "../Rust/RustParser";
// import { MacroIdentifierLikeTokenContext } from "../Rust/RustParser";
// import { MacroLiteralTokenContext } from "../Rust/RustParser";
// import { MacroPunctuationTokenContext } from "../Rust/RustParser";
// import { ShlContext } from "../Rust/RustParser";
// import { ShrContext } from "../Rust/RustParser";



// type IsSameType<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;

import { RustParserVisitor } from '../Rust/RustParserVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'


const BinaryOperator = [
    "==" , "!=" , "===" , "!==" , "<" , "<=" , ">" , ">=" , "<<" ,
    ">>" , ">>>" , "+" , "-" , "*" , "/" , "%" , "**" , "|" , "^" , "&" , "in" ,
    "instanceof"
  ];

// @ts-ignore
const LogicalOperator = ["||" , "&&" , "??" ];

const  Expression_type =[
  "ThisExpression" , "ArrayExpression" , "ObjectExpression" , "FunctionExpression" ,
  "ArrowFunctionExpression" , "YieldExpression" , "Literal" , "UnaryExpression" ,
  "UpdateExpression" , "BinaryExpression" , "AssignmentExpression" ,
  "LogicalExpression" , "MemberExpression" , "ConditionalExpression" ,
  "CallExpression" , "NewExpression" , "SequenceExpression" , "TemplateLiteral" ,
  "TaggedTemplateExpression" , "ClassExpression" , "MetaProperty" , "Identifier" ,
  "AwaitExpression" , "ImportExpression" , "ChainExpression"]



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

  visitPatternWithoutRange(ctx: PatternWithoutRangeContext): es.Pattern{
    return this.visit(ctx.getChild(0))
  }

  visitIdentifier(ctx: IdentifierContext): es.Pattern{
    return {
      type: "Identifier",
      name: ctx.text
    }
  }

  visitType_ (ctx: Type_Context) : es.Pattern {
    return {
      type: "Identifier",
      name: ctx.text
    }
  }


  visitFunctionParameters(ctx: FunctionParametersContext): es.Pattern{
    const params_array:es.Pattern[] = [] 
    for (let i = 0; i < ctx.childCount; i = i + 2){
      params_array.push(this.visit(ctx.getChild(i)))
    }
    return {
      type: "ArrayPattern",
      elements: params_array
    }
  }

  visitFunctionParam(ctx: FunctionParamContext): es.Pattern{
    return this.visit(ctx.getChild(0))
  }

  visitFunctionParamPattern(ctx: FunctionParamPatternContext): es.Pattern{
    return {
      type:"AssignmentPattern",
      left: this.visit(ctx.getChild(0)),
      right: this.visit(ctx.getChild(2)) as es.Identifier

    }
  }

  visitFunctionReturnType(ctx: FunctionReturnTypeContext): es.Pattern{
    return this.visit(ctx.getChild(1))
  }
  visitIdentifierPattern(ctx: IdentifierPatternContext): es.Pattern{
    let variable_name, variable_kind
    
    if(ctx.getChild(0).text === "mut")
    {
      variable_kind = "mut"
      variable_name = this.visit(ctx.getChild(1))
    }
    else
    {
      variable_kind = "not_mut"
      variable_name = this.visit(ctx.getChild(0))
    }
    const pattern_array: es.Pattern[] = []

    pattern_array.push({type: "Identifier", name: variable_kind })
    pattern_array.push(variable_name)
    return {
      type: 'ArrayPattern',
      elements: pattern_array
    }
  }
  
  
  
  visitPattern?: ((ctx: PatternContext) => es.Pattern) | undefined;
  // visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Pattern {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Pattern {

    if (node.childCount === 1)
    {
      return this.visit(node.getChild(0))
    }
    const patterns:es.Pattern[]  = []
    for (let i = 0; i < node.childCount; i++) {
      patterns.push(node.getChild(i).accept(this))
    }
    return {
      type: 'ArrayPattern',
      elements: patterns
    }
  }
  visitTerminal(node: TerminalNode): es.Pattern{
    return node.accept(this)
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


  visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): es.Expression {
    let operator = ctx.getChild(1).text;
    if(BinaryOperator.includes(operator))
    {
      return {
        type: 'BinaryExpression' ,
        operator: operator as es.BinaryOperator,
        left: this.visit(ctx.getChild(0)) as es.Expression,
        right: this.visit(ctx.getChild(2)) as es.Expression,
        loc: contextToLocation(ctx)
      } 
    }
    else
    {
      return {
        type: 'LogicalExpression' ,
        operator: operator as es.LogicalOperator,
        left: this.visit(ctx.getChild(0)) as es.Expression,
        right: this.visit(ctx.getChild(2)) as es.Expression,
        loc: contextToLocation(ctx)
      } 
    }
  }

  visitPathExpression_(ctx: PathExpression_Context): es.Expression{
    return {
      type: "Identifier",
      name: ctx.text
    }

  } 

  visitAssignmentExpression(ctx: AssignmentExpressionContext): es.Expression {
    let operator = ctx.getChild(1).text
    return {
      type: 'AssignmentExpression',
      operator: operator as es.AssignmentOperator,
      left: this.visit(ctx.getChild(0)) as es.Identifier,
      right: this.visit(ctx.getChild(2)) as es.Expression,
    }
  }

  visitIdentifier(ctx: IdentifierContext): es.Identifier{
      return {
        type: "Identifier",
        name: ctx.text
      }
  }

  visitGroupedExpression(ctx: GroupedExpressionContext): es.Expression {
      return this.visit(ctx.getChild(1)) as es.Expression
  }


  visitCallParams(ctx: CallParamsContext): es.ArrayExpression{
    const params_array: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i = i + 2){
      params_array.push(this.visit(ctx.getChild(i)) as es.Expression)
    }
    return{
      type: "ArrayExpression",
      elements: params_array
    }
  }

  visitCallExpression(ctx: CallExpressionContext): es.Expression{
    let params:es.Expression[] = [] 
    if(ctx.getChild(ctx.childCount-2).text !== "(")
    {
      const temp = this.visit(ctx.getChild(ctx.childCount-2)) as es.ArrayExpression
      params = temp.elements as es.Expression[]
    }
    return {
      type: "CallExpression",
      callee: this.visit(ctx.getChild(0)) as es.Expression,
      arguments: params,
      optional: false
    }
  }



  /**
   * This part is for statement output
   * 
   */
  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {

      return {
        type: "ExpressionStatement",
        expression: this.visit(ctx.getChild(0)) as es.Expression
      }

  }


  visitExpressionWithBlock(ctx: ExpressionWithBlockContext): es.Expression{
      
     return {
      id: null,
      type: "FunctionExpression",
      params: [],
      body: {
        type: "BlockStatement",
        body: [this.visit(ctx.getChild(0)) as es.Statement]
      }
    }
  }


  visitLetStatement(ctx: LetStatementContext): es.Statement{
    let variable = this.pattern_generator.visit(ctx.getChild(1)) as es.ArrayPattern
    
    let mut_sign = variable.elements[0] as es.Identifier
    let variable_name = variable.elements[1] as es.Identifier

    const equal_position = ctx.childCount - 3
    const type_position = 2


    // Check whether it specifies any type
    const variable_type = ctx.getChild(type_position).text == ":"? 
     this.pattern_generator.visit(ctx.getChild(type_position+1)): 
     {type:"Identifier", name: "null"}

    
    let varibale_id = {  
      type: "AssignmentPattern",
      left: variable_name,
      right: variable_type
    } as es.AssignmentPattern
    
    let varibale_declarator = {
      type: "VariableDeclarator",
      id: varibale_id,
      init: ctx.getChild(equal_position).text == "="? 
      this.visit(ctx.getChild(equal_position+1)): null
    } as es.VariableDeclarator

    return    {
      type: "VariableDeclaration",
      declarations: [varibale_declarator],
      kind: mut_sign.name == "mut" ? "var": "let"
    }
  }



  /**
   * Special Expression. 
   * Kind of Confuse. It can be regarded as a expression or a statement in Rust.
   * It includes Block, If, While, Loop.
   * 
   * All there return type is FunctionExpression and the body is the corresponding statement.
   */
  visitBlockExpression(ctx: BlockExpressionContext): es.Expression {
    const statements: es.Statement[] = []
    if (ctx.getChild(1).text !== "}"){    
      const block_statements_node = ctx.getChild(1)
      for (let i = 0; i < block_statements_node.childCount; i++) {
        if(block_statements_node.getChild(i) instanceof StatementContext){
          statements.push(this.visit(block_statements_node.getChild(i)) as es.Statement)
        }
        else{
          statements.push(this.visitReturnStatement(block_statements_node.getChild(i) as ExpressionContext))
        }
      }
    }

    return {
      type: "FunctionExpression",
      params: [],
      id: null,
      body:{
        type: 'BlockStatement',
        body: statements
      }
    }


  }

  
  visitIfExpression(ctx: IfExpressionContext): es.Expression{
    let if_statement = (this.visit(ctx.getChild(2)) as es.FunctionExpression).body
    let else_statement = ctx.childCount > 3 ?
    (this.visit(ctx.getChild(ctx.childCount-1)) as es.FunctionExpression).body : null

    const ifelse_statement = {
      type: "IfStatement",
      test: this.visit(ctx.getChild(1)),
      consequent: if_statement,
      alternate: else_statement
    } as es.IfStatement
    return {
      type: "FunctionExpression",
      params: [],
      id: null,
      body:{
        type: 'BlockStatement',
        body: [ifelse_statement]
      }
    }
  }


  /* 
  the last item in the parameter list is the return type, which name is "->" 
  and value is the type. If the return type is not specified, the type value 
  is "null". Note that the name of the parameters is an array of its name and \
  a "notmut" symbol. In the function, the "notmut" symbol is removed.
  */ 
  visitFunction_(ctx: Function_Context): es.Statement{
  
    const func_param_offset = ctx.getChild(4).text === ")"? 0:1

    const return_type_offset = ctx.getChild(ctx.childCount-2).text === ")"? 0:1
    

    let params: es.Pattern[] =  []
    if (func_param_offset === 1)
    {
      const param_pattern = this.pattern_generator.visit(ctx.getChild(3+func_param_offset)) as es.ArrayPattern
      params = param_pattern.elements
      // for ( let i = 0; i < params.length; i++)
      // {
      //   let temp = params[i] as es.AssignmentPattern
      //   let variable_name = temp.left as es.ArrayPattern
      //   temp.left = variable_name.elements[1]
      //   params[i] = temp
      // }
    }

    const return_type_pattern = return_type_offset === 1?
      this.pattern_generator.visit(ctx.getChild(4 + func_param_offset + return_type_offset)) as es.Pattern :
      { type: "Identifier", name: "null" } as es.Pattern

      params.push(return_type_pattern)


    const func_body = this.visit(ctx.getChild(ctx.childCount-1)) as es.FunctionExpression
    return {
      params: params,
      type: "FunctionDeclaration",
      id: this.pattern_generator.visit(ctx.getChild(2)) as es.Identifier,
      body: func_body.body as es.BlockStatement
    }
     
  }

  visitReturnStatement(ctx: ExpressionContext): es.Statement{
    return {
      type: "ReturnStatement",
      argument: this.visit(ctx) as es.Expression
    }
  }

  visitStatement?: ((ctx: StatementContext) => es.Statement) | undefined
  // visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Statement | es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Statement | es.Expression {
    const statements: es.Statement[] = []
    if(node.childCount === 1)
    {
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
  visitTerminal(node: TerminalNode): es.Statement | es.Expression{
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Statement  | es.Expression{
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
  if(Expression_type.includes(output.type)){
    return {
      type: "ExpressionStatement",
      expression: output as es.Expression
    }
  }
  else{
    return output as es.Statement
  }

}

function convertSource(expression: ExpressionContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      convertExpression(expression)
    ]
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
      const tree = parser.ifExpression()
      // const tree = parser.letStatement()
      for (let i = 0; i < tree.childCount; i++) {
        console.log(tree.getChild(i).text)
      }
      console.log(tree)
      // console.log(tree.getChild(3).getChild(2))
      // console.log(tree.getChild(tree.childCount-1).getChild(1).getChild(0).getChild(0).getChild(0))
      // console.log(tree.getChild(tree.childCount-1).getChild(1).getChild(0).getChild(0).getChild(0).text)
      // console.log(tree.getChild(4))
      // console.log(tree.getChild(tree.childCount-1).getChild(1).getChild(0).getChild(0))
      // console.log(tree.getChild(tree.childCount-1).getChild(1).getChild(0).getChild(0).getChild(0))
      program = convertSource(tree)
      let output = program.body[0] 
      console.log(output)
      // console.log(output.body)
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
