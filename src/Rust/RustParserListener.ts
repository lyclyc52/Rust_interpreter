// Generated from ./src/lang/RustParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { AttributedExpressionContext } from './RustParser'
import { LiteralExpression_Context } from './RustParser'
import { PathExpression_Context } from './RustParser'
import { MethodCallExpressionContext } from './RustParser'
import { FieldExpressionContext } from './RustParser'
import { TupleIndexingExpressionContext } from './RustParser'
import { AwaitExpressionContext } from './RustParser'
import { CallExpressionContext } from './RustParser'
import { IndexExpressionContext } from './RustParser'
import { ErrorPropagationExpressionContext } from './RustParser'
import { BorrowExpressionContext } from './RustParser'
import { DereferenceExpressionContext } from './RustParser'
import { NegationExpressionContext } from './RustParser'
import { TypeCastExpressionContext } from './RustParser'
import { ArithmeticOrLogicalExpressionContext } from './RustParser'
import { ComparisonExpressionContext } from './RustParser'
import { LazyBooleanExpressionContext } from './RustParser'
import { RangeExpressionContext } from './RustParser'
import { AssignmentExpressionContext } from './RustParser'
import { CompoundAssignmentExpressionContext } from './RustParser'
import { ContinueExpressionContext } from './RustParser'
import { BreakExpressionContext } from './RustParser'
import { ReturnExpressionContext } from './RustParser'
import { GroupedExpressionContext } from './RustParser'
import { ArrayExpressionContext } from './RustParser'
import { TupleExpressionContext } from './RustParser'
import { StructExpression_Context } from './RustParser'
import { EnumerationVariantExpression_Context } from './RustParser'
import { ClosureExpression_Context } from './RustParser'
import { ExpressionWithBlock_Context } from './RustParser'
import { MacroInvocationAsExpressionContext } from './RustParser'
import { CrateContext } from './RustParser'
import { MacroInvocationContext } from './RustParser'
import { DelimTokenTreeContext } from './RustParser'
import { TokenTreeContext } from './RustParser'
import { TokenTreeTokenContext } from './RustParser'
import { MacroInvocationSemiContext } from './RustParser'
import { MacroRulesDefinitionContext } from './RustParser'
import { MacroRulesDefContext } from './RustParser'
import { MacroRulesContext } from './RustParser'
import { MacroRuleContext } from './RustParser'
import { MacroMatcherContext } from './RustParser'
import { MacroMatchContext } from './RustParser'
import { MacroMatchTokenContext } from './RustParser'
import { MacroFragSpecContext } from './RustParser'
import { MacroRepSepContext } from './RustParser'
import { MacroRepOpContext } from './RustParser'
import { MacroTranscriberContext } from './RustParser'
import { ItemContext } from './RustParser'
import { VisItemContext } from './RustParser'
import { MacroItemContext } from './RustParser'
import { ModuleContext } from './RustParser'
import { ExternCrateContext } from './RustParser'
import { CrateRefContext } from './RustParser'
import { AsClauseContext } from './RustParser'
import { UseDeclarationContext } from './RustParser'
import { UseTreeContext } from './RustParser'
import { Function_Context } from './RustParser'
import { FunctionQualifiersContext } from './RustParser'
import { AbiContext } from './RustParser'
import { FunctionParametersContext } from './RustParser'
import { SelfParamContext } from './RustParser'
import { ShorthandSelfContext } from './RustParser'
import { TypedSelfContext } from './RustParser'
import { FunctionParamContext } from './RustParser'
import { FunctionParamPatternContext } from './RustParser'
import { FunctionReturnTypeContext } from './RustParser'
import { TypeAliasContext } from './RustParser'
import { Struct_Context } from './RustParser'
import { StructStructContext } from './RustParser'
import { TupleStructContext } from './RustParser'
import { StructFieldsContext } from './RustParser'
import { StructFieldContext } from './RustParser'
import { TupleFieldsContext } from './RustParser'
import { TupleFieldContext } from './RustParser'
import { EnumerationContext } from './RustParser'
import { EnumItemsContext } from './RustParser'
import { EnumItemContext } from './RustParser'
import { EnumItemTupleContext } from './RustParser'
import { EnumItemStructContext } from './RustParser'
import { EnumItemDiscriminantContext } from './RustParser'
import { Union_Context } from './RustParser'
import { ConstantItemContext } from './RustParser'
import { StaticItemContext } from './RustParser'
import { Trait_Context } from './RustParser'
import { ImplementationContext } from './RustParser'
import { InherentImplContext } from './RustParser'
import { TraitImplContext } from './RustParser'
import { ExternBlockContext } from './RustParser'
import { ExternalItemContext } from './RustParser'
import { GenericParamsContext } from './RustParser'
import { GenericParamContext } from './RustParser'
import { LifetimeParamContext } from './RustParser'
import { TypeParamContext } from './RustParser'
import { ConstParamContext } from './RustParser'
import { WhereClauseContext } from './RustParser'
import { WhereClauseItemContext } from './RustParser'
import { LifetimeWhereClauseItemContext } from './RustParser'
import { TypeBoundWhereClauseItemContext } from './RustParser'
import { ForLifetimesContext } from './RustParser'
import { AssociatedItemContext } from './RustParser'
import { InnerAttributeContext } from './RustParser'
import { OuterAttributeContext } from './RustParser'
import { AttrContext } from './RustParser'
import { AttrInputContext } from './RustParser'
import { StatementContext } from './RustParser'
import { LetStatementContext } from './RustParser'
import { ExpressionStatementContext } from './RustParser'
import { ExpressionContext } from './RustParser'
import { ComparisonOperatorContext } from './RustParser'
import { CompoundAssignOperatorContext } from './RustParser'
import { ExpressionWithBlockContext } from './RustParser'
import { LiteralExpressionContext } from './RustParser'
import { PathExpressionContext } from './RustParser'
import { BlockExpressionContext } from './RustParser'
import { StatementsContext } from './RustParser'
import { AsyncBlockExpressionContext } from './RustParser'
import { UnsafeBlockExpressionContext } from './RustParser'
import { ArrayElementsContext } from './RustParser'
import { TupleElementsContext } from './RustParser'
import { TupleIndexContext } from './RustParser'
import { StructExpressionContext } from './RustParser'
import { StructExprStructContext } from './RustParser'
import { StructExprFieldsContext } from './RustParser'
import { StructExprFieldContext } from './RustParser'
import { StructBaseContext } from './RustParser'
import { StructExprTupleContext } from './RustParser'
import { StructExprUnitContext } from './RustParser'
import { EnumerationVariantExpressionContext } from './RustParser'
import { EnumExprStructContext } from './RustParser'
import { EnumExprFieldsContext } from './RustParser'
import { EnumExprFieldContext } from './RustParser'
import { EnumExprTupleContext } from './RustParser'
import { EnumExprFieldlessContext } from './RustParser'
import { CallParamsContext } from './RustParser'
import { ClosureExpressionContext } from './RustParser'
import { ClosureParametersContext } from './RustParser'
import { ClosureParamContext } from './RustParser'
import { LoopExpressionContext } from './RustParser'
import { InfiniteLoopExpressionContext } from './RustParser'
import { PredicateLoopExpressionContext } from './RustParser'
import { PredicatePatternLoopExpressionContext } from './RustParser'
import { IteratorLoopExpressionContext } from './RustParser'
import { LoopLabelContext } from './RustParser'
import { IfExpressionContext } from './RustParser'
import { IfLetExpressionContext } from './RustParser'
import { MatchExpressionContext } from './RustParser'
import { MatchArmsContext } from './RustParser'
import { MatchArmExpressionContext } from './RustParser'
import { MatchArmContext } from './RustParser'
import { MatchArmPatternsContext } from './RustParser'
import { MatchArmGuardContext } from './RustParser'
import { PatternContext } from './RustParser'
import { PatternWithoutRangeContext } from './RustParser'
import { LiteralPatternContext } from './RustParser'
import { IdentifierPatternContext } from './RustParser'
import { WildcardPatternContext } from './RustParser'
import { RestPatternContext } from './RustParser'
import { RangePatternContext } from './RustParser'
import { ObsoleteRangePatternContext } from './RustParser'
import { RangePatternBoundContext } from './RustParser'
import { ReferencePatternContext } from './RustParser'
import { StructPatternContext } from './RustParser'
import { StructPatternElementsContext } from './RustParser'
import { StructPatternFieldsContext } from './RustParser'
import { StructPatternFieldContext } from './RustParser'
import { StructPatternEtCeteraContext } from './RustParser'
import { TupleStructPatternContext } from './RustParser'
import { TupleStructItemsContext } from './RustParser'
import { TuplePatternContext } from './RustParser'
import { TuplePatternItemsContext } from './RustParser'
import { GroupedPatternContext } from './RustParser'
import { SlicePatternContext } from './RustParser'
import { SlicePatternItemsContext } from './RustParser'
import { PathPatternContext } from './RustParser'
import { Type_Context } from './RustParser'
import { TypeNoBoundsContext } from './RustParser'
import { ParenthesizedTypeContext } from './RustParser'
import { NeverTypeContext } from './RustParser'
import { TupleTypeContext } from './RustParser'
import { ArrayTypeContext } from './RustParser'
import { SliceTypeContext } from './RustParser'
import { ReferenceTypeContext } from './RustParser'
import { RawPointerTypeContext } from './RustParser'
import { BareFunctionTypeContext } from './RustParser'
import { FunctionTypeQualifiersContext } from './RustParser'
import { BareFunctionReturnTypeContext } from './RustParser'
import { FunctionParametersMaybeNamedVariadicContext } from './RustParser'
import { MaybeNamedFunctionParametersContext } from './RustParser'
import { MaybeNamedParamContext } from './RustParser'
import { MaybeNamedFunctionParametersVariadicContext } from './RustParser'
import { TraitObjectTypeContext } from './RustParser'
import { TraitObjectTypeOneBoundContext } from './RustParser'
import { ImplTraitTypeContext } from './RustParser'
import { ImplTraitTypeOneBoundContext } from './RustParser'
import { InferredTypeContext } from './RustParser'
import { TypeParamBoundsContext } from './RustParser'
import { TypeParamBoundContext } from './RustParser'
import { TraitBoundContext } from './RustParser'
import { LifetimeBoundsContext } from './RustParser'
import { LifetimeContext } from './RustParser'
import { SimplePathContext } from './RustParser'
import { SimplePathSegmentContext } from './RustParser'
import { PathInExpressionContext } from './RustParser'
import { PathExprSegmentContext } from './RustParser'
import { PathIdentSegmentContext } from './RustParser'
import { GenericArgsContext } from './RustParser'
import { GenericArgContext } from './RustParser'
import { GenericArgsConstContext } from './RustParser'
import { GenericArgsLifetimesContext } from './RustParser'
import { GenericArgsTypesContext } from './RustParser'
import { GenericArgsBindingsContext } from './RustParser'
import { GenericArgsBindingContext } from './RustParser'
import { QualifiedPathInExpressionContext } from './RustParser'
import { QualifiedPathTypeContext } from './RustParser'
import { QualifiedPathInTypeContext } from './RustParser'
import { TypePathContext } from './RustParser'
import { TypePathSegmentContext } from './RustParser'
import { TypePathFnContext } from './RustParser'
import { TypePathInputsContext } from './RustParser'
import { VisibilityContext } from './RustParser'
import { IdentifierContext } from './RustParser'
import { KeywordContext } from './RustParser'
import { MacroIdentifierLikeTokenContext } from './RustParser'
import { MacroLiteralTokenContext } from './RustParser'
import { MacroPunctuationTokenContext } from './RustParser'
import { ShlContext } from './RustParser'
import { ShrContext } from './RustParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `RustParser`.
 */
export interface RustParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `AttributedExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterAttributedExpression?: (ctx: AttributedExpressionContext) => void
  /**
   * Exit a parse tree produced by the `AttributedExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitAttributedExpression?: (ctx: AttributedExpressionContext) => void

  /**
   * Enter a parse tree produced by the `LiteralExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterLiteralExpression_?: (ctx: LiteralExpression_Context) => void
  /**
   * Exit a parse tree produced by the `LiteralExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitLiteralExpression_?: (ctx: LiteralExpression_Context) => void

  /**
   * Enter a parse tree produced by the `PathExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterPathExpression_?: (ctx: PathExpression_Context) => void
  /**
   * Exit a parse tree produced by the `PathExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitPathExpression_?: (ctx: PathExpression_Context) => void

  /**
   * Enter a parse tree produced by the `MethodCallExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void
  /**
   * Exit a parse tree produced by the `MethodCallExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void

  /**
   * Enter a parse tree produced by the `FieldExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterFieldExpression?: (ctx: FieldExpressionContext) => void
  /**
   * Exit a parse tree produced by the `FieldExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitFieldExpression?: (ctx: FieldExpressionContext) => void

  /**
   * Enter a parse tree produced by the `TupleIndexingExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => void
  /**
   * Exit a parse tree produced by the `TupleIndexingExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => void

  /**
   * Enter a parse tree produced by the `AwaitExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterAwaitExpression?: (ctx: AwaitExpressionContext) => void
  /**
   * Exit a parse tree produced by the `AwaitExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitAwaitExpression?: (ctx: AwaitExpressionContext) => void

  /**
   * Enter a parse tree produced by the `CallExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterCallExpression?: (ctx: CallExpressionContext) => void
  /**
   * Exit a parse tree produced by the `CallExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitCallExpression?: (ctx: CallExpressionContext) => void

  /**
   * Enter a parse tree produced by the `IndexExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterIndexExpression?: (ctx: IndexExpressionContext) => void
  /**
   * Exit a parse tree produced by the `IndexExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitIndexExpression?: (ctx: IndexExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ErrorPropagationExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ErrorPropagationExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `BorrowExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterBorrowExpression?: (ctx: BorrowExpressionContext) => void
  /**
   * Exit a parse tree produced by the `BorrowExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitBorrowExpression?: (ctx: BorrowExpressionContext) => void

  /**
   * Enter a parse tree produced by the `DereferenceExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterDereferenceExpression?: (ctx: DereferenceExpressionContext) => void
  /**
   * Exit a parse tree produced by the `DereferenceExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitDereferenceExpression?: (ctx: DereferenceExpressionContext) => void

  /**
   * Enter a parse tree produced by the `NegationExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterNegationExpression?: (ctx: NegationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `NegationExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitNegationExpression?: (ctx: NegationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `TypeCastExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterTypeCastExpression?: (ctx: TypeCastExpressionContext) => void
  /**
   * Exit a parse tree produced by the `TypeCastExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitTypeCastExpression?: (ctx: TypeCastExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ArithmeticOrLogicalExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ArithmeticOrLogicalExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ComparisonExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ComparisonExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void

  /**
   * Enter a parse tree produced by the `LazyBooleanExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => void
  /**
   * Exit a parse tree produced by the `LazyBooleanExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => void

  /**
   * Enter a parse tree produced by the `RangeExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterRangeExpression?: (ctx: RangeExpressionContext) => void
  /**
   * Exit a parse tree produced by the `RangeExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitRangeExpression?: (ctx: RangeExpressionContext) => void

  /**
   * Enter a parse tree produced by the `AssignmentExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void
  /**
   * Exit a parse tree produced by the `AssignmentExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void

  /**
   * Enter a parse tree produced by the `CompoundAssignmentExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => void
  /**
   * Exit a parse tree produced by the `CompoundAssignmentExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ContinueExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterContinueExpression?: (ctx: ContinueExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ContinueExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitContinueExpression?: (ctx: ContinueExpressionContext) => void

  /**
   * Enter a parse tree produced by the `BreakExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterBreakExpression?: (ctx: BreakExpressionContext) => void
  /**
   * Exit a parse tree produced by the `BreakExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitBreakExpression?: (ctx: BreakExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ReturnExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterReturnExpression?: (ctx: ReturnExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ReturnExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitReturnExpression?: (ctx: ReturnExpressionContext) => void

  /**
   * Enter a parse tree produced by the `GroupedExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterGroupedExpression?: (ctx: GroupedExpressionContext) => void
  /**
   * Exit a parse tree produced by the `GroupedExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitGroupedExpression?: (ctx: GroupedExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ArrayExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterArrayExpression?: (ctx: ArrayExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ArrayExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitArrayExpression?: (ctx: ArrayExpressionContext) => void

  /**
   * Enter a parse tree produced by the `TupleExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterTupleExpression?: (ctx: TupleExpressionContext) => void
  /**
   * Exit a parse tree produced by the `TupleExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitTupleExpression?: (ctx: TupleExpressionContext) => void

  /**
   * Enter a parse tree produced by the `StructExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterStructExpression_?: (ctx: StructExpression_Context) => void
  /**
   * Exit a parse tree produced by the `StructExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitStructExpression_?: (ctx: StructExpression_Context) => void

  /**
   * Enter a parse tree produced by the `EnumerationVariantExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => void
  /**
   * Exit a parse tree produced by the `EnumerationVariantExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => void

  /**
   * Enter a parse tree produced by the `ClosureExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterClosureExpression_?: (ctx: ClosureExpression_Context) => void
  /**
   * Exit a parse tree produced by the `ClosureExpression_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitClosureExpression_?: (ctx: ClosureExpression_Context) => void

  /**
   * Enter a parse tree produced by the `ExpressionWithBlock_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => void
  /**
   * Exit a parse tree produced by the `ExpressionWithBlock_`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => void

  /**
   * Enter a parse tree produced by the `MacroInvocationAsExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => void
  /**
   * Exit a parse tree produced by the `MacroInvocationAsExpression`
   * labeled alternative in `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.crate`.
   * @param ctx the parse tree
   */
  enterCrate?: (ctx: CrateContext) => void
  /**
   * Exit a parse tree produced by `RustParser.crate`.
   * @param ctx the parse tree
   */
  exitCrate?: (ctx: CrateContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroInvocation`.
   * @param ctx the parse tree
   */
  enterMacroInvocation?: (ctx: MacroInvocationContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroInvocation`.
   * @param ctx the parse tree
   */
  exitMacroInvocation?: (ctx: MacroInvocationContext) => void

  /**
   * Enter a parse tree produced by `RustParser.delimTokenTree`.
   * @param ctx the parse tree
   */
  enterDelimTokenTree?: (ctx: DelimTokenTreeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.delimTokenTree`.
   * @param ctx the parse tree
   */
  exitDelimTokenTree?: (ctx: DelimTokenTreeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tokenTree`.
   * @param ctx the parse tree
   */
  enterTokenTree?: (ctx: TokenTreeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tokenTree`.
   * @param ctx the parse tree
   */
  exitTokenTree?: (ctx: TokenTreeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tokenTreeToken`.
   * @param ctx the parse tree
   */
  enterTokenTreeToken?: (ctx: TokenTreeTokenContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tokenTreeToken`.
   * @param ctx the parse tree
   */
  exitTokenTreeToken?: (ctx: TokenTreeTokenContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroInvocationSemi`.
   * @param ctx the parse tree
   */
  enterMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroInvocationSemi`.
   * @param ctx the parse tree
   */
  exitMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRulesDefinition`.
   * @param ctx the parse tree
   */
  enterMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRulesDefinition`.
   * @param ctx the parse tree
   */
  exitMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRulesDef`.
   * @param ctx the parse tree
   */
  enterMacroRulesDef?: (ctx: MacroRulesDefContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRulesDef`.
   * @param ctx the parse tree
   */
  exitMacroRulesDef?: (ctx: MacroRulesDefContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRules`.
   * @param ctx the parse tree
   */
  enterMacroRules?: (ctx: MacroRulesContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRules`.
   * @param ctx the parse tree
   */
  exitMacroRules?: (ctx: MacroRulesContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRule`.
   * @param ctx the parse tree
   */
  enterMacroRule?: (ctx: MacroRuleContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRule`.
   * @param ctx the parse tree
   */
  exitMacroRule?: (ctx: MacroRuleContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroMatcher`.
   * @param ctx the parse tree
   */
  enterMacroMatcher?: (ctx: MacroMatcherContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroMatcher`.
   * @param ctx the parse tree
   */
  exitMacroMatcher?: (ctx: MacroMatcherContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroMatch`.
   * @param ctx the parse tree
   */
  enterMacroMatch?: (ctx: MacroMatchContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroMatch`.
   * @param ctx the parse tree
   */
  exitMacroMatch?: (ctx: MacroMatchContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroMatchToken`.
   * @param ctx the parse tree
   */
  enterMacroMatchToken?: (ctx: MacroMatchTokenContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroMatchToken`.
   * @param ctx the parse tree
   */
  exitMacroMatchToken?: (ctx: MacroMatchTokenContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroFragSpec`.
   * @param ctx the parse tree
   */
  enterMacroFragSpec?: (ctx: MacroFragSpecContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroFragSpec`.
   * @param ctx the parse tree
   */
  exitMacroFragSpec?: (ctx: MacroFragSpecContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRepSep`.
   * @param ctx the parse tree
   */
  enterMacroRepSep?: (ctx: MacroRepSepContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRepSep`.
   * @param ctx the parse tree
   */
  exitMacroRepSep?: (ctx: MacroRepSepContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroRepOp`.
   * @param ctx the parse tree
   */
  enterMacroRepOp?: (ctx: MacroRepOpContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroRepOp`.
   * @param ctx the parse tree
   */
  exitMacroRepOp?: (ctx: MacroRepOpContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroTranscriber`.
   * @param ctx the parse tree
   */
  enterMacroTranscriber?: (ctx: MacroTranscriberContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroTranscriber`.
   * @param ctx the parse tree
   */
  exitMacroTranscriber?: (ctx: MacroTranscriberContext) => void

  /**
   * Enter a parse tree produced by `RustParser.item`.
   * @param ctx the parse tree
   */
  enterItem?: (ctx: ItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.item`.
   * @param ctx the parse tree
   */
  exitItem?: (ctx: ItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.visItem`.
   * @param ctx the parse tree
   */
  enterVisItem?: (ctx: VisItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.visItem`.
   * @param ctx the parse tree
   */
  exitVisItem?: (ctx: VisItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroItem`.
   * @param ctx the parse tree
   */
  enterMacroItem?: (ctx: MacroItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroItem`.
   * @param ctx the parse tree
   */
  exitMacroItem?: (ctx: MacroItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.module`.
   * @param ctx the parse tree
   */
  enterModule?: (ctx: ModuleContext) => void
  /**
   * Exit a parse tree produced by `RustParser.module`.
   * @param ctx the parse tree
   */
  exitModule?: (ctx: ModuleContext) => void

  /**
   * Enter a parse tree produced by `RustParser.externCrate`.
   * @param ctx the parse tree
   */
  enterExternCrate?: (ctx: ExternCrateContext) => void
  /**
   * Exit a parse tree produced by `RustParser.externCrate`.
   * @param ctx the parse tree
   */
  exitExternCrate?: (ctx: ExternCrateContext) => void

  /**
   * Enter a parse tree produced by `RustParser.crateRef`.
   * @param ctx the parse tree
   */
  enterCrateRef?: (ctx: CrateRefContext) => void
  /**
   * Exit a parse tree produced by `RustParser.crateRef`.
   * @param ctx the parse tree
   */
  exitCrateRef?: (ctx: CrateRefContext) => void

  /**
   * Enter a parse tree produced by `RustParser.asClause`.
   * @param ctx the parse tree
   */
  enterAsClause?: (ctx: AsClauseContext) => void
  /**
   * Exit a parse tree produced by `RustParser.asClause`.
   * @param ctx the parse tree
   */
  exitAsClause?: (ctx: AsClauseContext) => void

  /**
   * Enter a parse tree produced by `RustParser.useDeclaration`.
   * @param ctx the parse tree
   */
  enterUseDeclaration?: (ctx: UseDeclarationContext) => void
  /**
   * Exit a parse tree produced by `RustParser.useDeclaration`.
   * @param ctx the parse tree
   */
  exitUseDeclaration?: (ctx: UseDeclarationContext) => void

  /**
   * Enter a parse tree produced by `RustParser.useTree`.
   * @param ctx the parse tree
   */
  enterUseTree?: (ctx: UseTreeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.useTree`.
   * @param ctx the parse tree
   */
  exitUseTree?: (ctx: UseTreeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.function_`.
   * @param ctx the parse tree
   */
  enterFunction_?: (ctx: Function_Context) => void
  /**
   * Exit a parse tree produced by `RustParser.function_`.
   * @param ctx the parse tree
   */
  exitFunction_?: (ctx: Function_Context) => void

  /**
   * Enter a parse tree produced by `RustParser.functionQualifiers`.
   * @param ctx the parse tree
   */
  enterFunctionQualifiers?: (ctx: FunctionQualifiersContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionQualifiers`.
   * @param ctx the parse tree
   */
  exitFunctionQualifiers?: (ctx: FunctionQualifiersContext) => void

  /**
   * Enter a parse tree produced by `RustParser.abi`.
   * @param ctx the parse tree
   */
  enterAbi?: (ctx: AbiContext) => void
  /**
   * Exit a parse tree produced by `RustParser.abi`.
   * @param ctx the parse tree
   */
  exitAbi?: (ctx: AbiContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionParameters`.
   * @param ctx the parse tree
   */
  enterFunctionParameters?: (ctx: FunctionParametersContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionParameters`.
   * @param ctx the parse tree
   */
  exitFunctionParameters?: (ctx: FunctionParametersContext) => void

  /**
   * Enter a parse tree produced by `RustParser.selfParam`.
   * @param ctx the parse tree
   */
  enterSelfParam?: (ctx: SelfParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.selfParam`.
   * @param ctx the parse tree
   */
  exitSelfParam?: (ctx: SelfParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.shorthandSelf`.
   * @param ctx the parse tree
   */
  enterShorthandSelf?: (ctx: ShorthandSelfContext) => void
  /**
   * Exit a parse tree produced by `RustParser.shorthandSelf`.
   * @param ctx the parse tree
   */
  exitShorthandSelf?: (ctx: ShorthandSelfContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typedSelf`.
   * @param ctx the parse tree
   */
  enterTypedSelf?: (ctx: TypedSelfContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typedSelf`.
   * @param ctx the parse tree
   */
  exitTypedSelf?: (ctx: TypedSelfContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionParam`.
   * @param ctx the parse tree
   */
  enterFunctionParam?: (ctx: FunctionParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionParam`.
   * @param ctx the parse tree
   */
  exitFunctionParam?: (ctx: FunctionParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionParamPattern`.
   * @param ctx the parse tree
   */
  enterFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionParamPattern`.
   * @param ctx the parse tree
   */
  exitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionReturnType`.
   * @param ctx the parse tree
   */
  enterFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionReturnType`.
   * @param ctx the parse tree
   */
  exitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typeAlias`.
   * @param ctx the parse tree
   */
  enterTypeAlias?: (ctx: TypeAliasContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeAlias`.
   * @param ctx the parse tree
   */
  exitTypeAlias?: (ctx: TypeAliasContext) => void

  /**
   * Enter a parse tree produced by `RustParser.struct_`.
   * @param ctx the parse tree
   */
  enterStruct_?: (ctx: Struct_Context) => void
  /**
   * Exit a parse tree produced by `RustParser.struct_`.
   * @param ctx the parse tree
   */
  exitStruct_?: (ctx: Struct_Context) => void

  /**
   * Enter a parse tree produced by `RustParser.structStruct`.
   * @param ctx the parse tree
   */
  enterStructStruct?: (ctx: StructStructContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structStruct`.
   * @param ctx the parse tree
   */
  exitStructStruct?: (ctx: StructStructContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleStruct`.
   * @param ctx the parse tree
   */
  enterTupleStruct?: (ctx: TupleStructContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleStruct`.
   * @param ctx the parse tree
   */
  exitTupleStruct?: (ctx: TupleStructContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structFields`.
   * @param ctx the parse tree
   */
  enterStructFields?: (ctx: StructFieldsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structFields`.
   * @param ctx the parse tree
   */
  exitStructFields?: (ctx: StructFieldsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structField`.
   * @param ctx the parse tree
   */
  enterStructField?: (ctx: StructFieldContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structField`.
   * @param ctx the parse tree
   */
  exitStructField?: (ctx: StructFieldContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleFields`.
   * @param ctx the parse tree
   */
  enterTupleFields?: (ctx: TupleFieldsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleFields`.
   * @param ctx the parse tree
   */
  exitTupleFields?: (ctx: TupleFieldsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleField`.
   * @param ctx the parse tree
   */
  enterTupleField?: (ctx: TupleFieldContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleField`.
   * @param ctx the parse tree
   */
  exitTupleField?: (ctx: TupleFieldContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumeration`.
   * @param ctx the parse tree
   */
  enterEnumeration?: (ctx: EnumerationContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumeration`.
   * @param ctx the parse tree
   */
  exitEnumeration?: (ctx: EnumerationContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumItems`.
   * @param ctx the parse tree
   */
  enterEnumItems?: (ctx: EnumItemsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumItems`.
   * @param ctx the parse tree
   */
  exitEnumItems?: (ctx: EnumItemsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumItem`.
   * @param ctx the parse tree
   */
  enterEnumItem?: (ctx: EnumItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumItem`.
   * @param ctx the parse tree
   */
  exitEnumItem?: (ctx: EnumItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumItemTuple`.
   * @param ctx the parse tree
   */
  enterEnumItemTuple?: (ctx: EnumItemTupleContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumItemTuple`.
   * @param ctx the parse tree
   */
  exitEnumItemTuple?: (ctx: EnumItemTupleContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumItemStruct`.
   * @param ctx the parse tree
   */
  enterEnumItemStruct?: (ctx: EnumItemStructContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumItemStruct`.
   * @param ctx the parse tree
   */
  exitEnumItemStruct?: (ctx: EnumItemStructContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumItemDiscriminant`.
   * @param ctx the parse tree
   */
  enterEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumItemDiscriminant`.
   * @param ctx the parse tree
   */
  exitEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => void

  /**
   * Enter a parse tree produced by `RustParser.union_`.
   * @param ctx the parse tree
   */
  enterUnion_?: (ctx: Union_Context) => void
  /**
   * Exit a parse tree produced by `RustParser.union_`.
   * @param ctx the parse tree
   */
  exitUnion_?: (ctx: Union_Context) => void

  /**
   * Enter a parse tree produced by `RustParser.constantItem`.
   * @param ctx the parse tree
   */
  enterConstantItem?: (ctx: ConstantItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.constantItem`.
   * @param ctx the parse tree
   */
  exitConstantItem?: (ctx: ConstantItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.staticItem`.
   * @param ctx the parse tree
   */
  enterStaticItem?: (ctx: StaticItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.staticItem`.
   * @param ctx the parse tree
   */
  exitStaticItem?: (ctx: StaticItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.trait_`.
   * @param ctx the parse tree
   */
  enterTrait_?: (ctx: Trait_Context) => void
  /**
   * Exit a parse tree produced by `RustParser.trait_`.
   * @param ctx the parse tree
   */
  exitTrait_?: (ctx: Trait_Context) => void

  /**
   * Enter a parse tree produced by `RustParser.implementation`.
   * @param ctx the parse tree
   */
  enterImplementation?: (ctx: ImplementationContext) => void
  /**
   * Exit a parse tree produced by `RustParser.implementation`.
   * @param ctx the parse tree
   */
  exitImplementation?: (ctx: ImplementationContext) => void

  /**
   * Enter a parse tree produced by `RustParser.inherentImpl`.
   * @param ctx the parse tree
   */
  enterInherentImpl?: (ctx: InherentImplContext) => void
  /**
   * Exit a parse tree produced by `RustParser.inherentImpl`.
   * @param ctx the parse tree
   */
  exitInherentImpl?: (ctx: InherentImplContext) => void

  /**
   * Enter a parse tree produced by `RustParser.traitImpl`.
   * @param ctx the parse tree
   */
  enterTraitImpl?: (ctx: TraitImplContext) => void
  /**
   * Exit a parse tree produced by `RustParser.traitImpl`.
   * @param ctx the parse tree
   */
  exitTraitImpl?: (ctx: TraitImplContext) => void

  /**
   * Enter a parse tree produced by `RustParser.externBlock`.
   * @param ctx the parse tree
   */
  enterExternBlock?: (ctx: ExternBlockContext) => void
  /**
   * Exit a parse tree produced by `RustParser.externBlock`.
   * @param ctx the parse tree
   */
  exitExternBlock?: (ctx: ExternBlockContext) => void

  /**
   * Enter a parse tree produced by `RustParser.externalItem`.
   * @param ctx the parse tree
   */
  enterExternalItem?: (ctx: ExternalItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.externalItem`.
   * @param ctx the parse tree
   */
  exitExternalItem?: (ctx: ExternalItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericParams`.
   * @param ctx the parse tree
   */
  enterGenericParams?: (ctx: GenericParamsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericParams`.
   * @param ctx the parse tree
   */
  exitGenericParams?: (ctx: GenericParamsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericParam`.
   * @param ctx the parse tree
   */
  enterGenericParam?: (ctx: GenericParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericParam`.
   * @param ctx the parse tree
   */
  exitGenericParam?: (ctx: GenericParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.lifetimeParam`.
   * @param ctx the parse tree
   */
  enterLifetimeParam?: (ctx: LifetimeParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.lifetimeParam`.
   * @param ctx the parse tree
   */
  exitLifetimeParam?: (ctx: LifetimeParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typeParam`.
   * @param ctx the parse tree
   */
  enterTypeParam?: (ctx: TypeParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeParam`.
   * @param ctx the parse tree
   */
  exitTypeParam?: (ctx: TypeParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.constParam`.
   * @param ctx the parse tree
   */
  enterConstParam?: (ctx: ConstParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.constParam`.
   * @param ctx the parse tree
   */
  exitConstParam?: (ctx: ConstParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.whereClause`.
   * @param ctx the parse tree
   */
  enterWhereClause?: (ctx: WhereClauseContext) => void
  /**
   * Exit a parse tree produced by `RustParser.whereClause`.
   * @param ctx the parse tree
   */
  exitWhereClause?: (ctx: WhereClauseContext) => void

  /**
   * Enter a parse tree produced by `RustParser.whereClauseItem`.
   * @param ctx the parse tree
   */
  enterWhereClauseItem?: (ctx: WhereClauseItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.whereClauseItem`.
   * @param ctx the parse tree
   */
  exitWhereClauseItem?: (ctx: WhereClauseItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
   * @param ctx the parse tree
   */
  enterLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
   * @param ctx the parse tree
   */
  exitLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
   * @param ctx the parse tree
   */
  enterTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
   * @param ctx the parse tree
   */
  exitTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.forLifetimes`.
   * @param ctx the parse tree
   */
  enterForLifetimes?: (ctx: ForLifetimesContext) => void
  /**
   * Exit a parse tree produced by `RustParser.forLifetimes`.
   * @param ctx the parse tree
   */
  exitForLifetimes?: (ctx: ForLifetimesContext) => void

  /**
   * Enter a parse tree produced by `RustParser.associatedItem`.
   * @param ctx the parse tree
   */
  enterAssociatedItem?: (ctx: AssociatedItemContext) => void
  /**
   * Exit a parse tree produced by `RustParser.associatedItem`.
   * @param ctx the parse tree
   */
  exitAssociatedItem?: (ctx: AssociatedItemContext) => void

  /**
   * Enter a parse tree produced by `RustParser.innerAttribute`.
   * @param ctx the parse tree
   */
  enterInnerAttribute?: (ctx: InnerAttributeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.innerAttribute`.
   * @param ctx the parse tree
   */
  exitInnerAttribute?: (ctx: InnerAttributeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.outerAttribute`.
   * @param ctx the parse tree
   */
  enterOuterAttribute?: (ctx: OuterAttributeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.outerAttribute`.
   * @param ctx the parse tree
   */
  exitOuterAttribute?: (ctx: OuterAttributeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.attr`.
   * @param ctx the parse tree
   */
  enterAttr?: (ctx: AttrContext) => void
  /**
   * Exit a parse tree produced by `RustParser.attr`.
   * @param ctx the parse tree
   */
  exitAttr?: (ctx: AttrContext) => void

  /**
   * Enter a parse tree produced by `RustParser.attrInput`.
   * @param ctx the parse tree
   */
  enterAttrInput?: (ctx: AttrInputContext) => void
  /**
   * Exit a parse tree produced by `RustParser.attrInput`.
   * @param ctx the parse tree
   */
  exitAttrInput?: (ctx: AttrInputContext) => void

  /**
   * Enter a parse tree produced by `RustParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `RustParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `RustParser.letStatement`.
   * @param ctx the parse tree
   */
  enterLetStatement?: (ctx: LetStatementContext) => void
  /**
   * Exit a parse tree produced by `RustParser.letStatement`.
   * @param ctx the parse tree
   */
  exitLetStatement?: (ctx: LetStatementContext) => void

  /**
   * Enter a parse tree produced by `RustParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `RustParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `RustParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.comparisonOperator`.
   * @param ctx the parse tree
   */
  enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void
  /**
   * Exit a parse tree produced by `RustParser.comparisonOperator`.
   * @param ctx the parse tree
   */
  exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void

  /**
   * Enter a parse tree produced by `RustParser.compoundAssignOperator`.
   * @param ctx the parse tree
   */
  enterCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => void
  /**
   * Exit a parse tree produced by `RustParser.compoundAssignOperator`.
   * @param ctx the parse tree
   */
  exitCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => void

  /**
   * Enter a parse tree produced by `RustParser.expressionWithBlock`.
   * @param ctx the parse tree
   */
  enterExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void
  /**
   * Exit a parse tree produced by `RustParser.expressionWithBlock`.
   * @param ctx the parse tree
   */
  exitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void

  /**
   * Enter a parse tree produced by `RustParser.literalExpression`.
   * @param ctx the parse tree
   */
  enterLiteralExpression?: (ctx: LiteralExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.literalExpression`.
   * @param ctx the parse tree
   */
  exitLiteralExpression?: (ctx: LiteralExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pathExpression`.
   * @param ctx the parse tree
   */
  enterPathExpression?: (ctx: PathExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pathExpression`.
   * @param ctx the parse tree
   */
  exitPathExpression?: (ctx: PathExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.blockExpression`.
   * @param ctx the parse tree
   */
  enterBlockExpression?: (ctx: BlockExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.blockExpression`.
   * @param ctx the parse tree
   */
  exitBlockExpression?: (ctx: BlockExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.statements`.
   * @param ctx the parse tree
   */
  enterStatements?: (ctx: StatementsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.statements`.
   * @param ctx the parse tree
   */
  exitStatements?: (ctx: StatementsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.asyncBlockExpression`.
   * @param ctx the parse tree
   */
  enterAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.asyncBlockExpression`.
   * @param ctx the parse tree
   */
  exitAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.unsafeBlockExpression`.
   * @param ctx the parse tree
   */
  enterUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.unsafeBlockExpression`.
   * @param ctx the parse tree
   */
  exitUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.arrayElements`.
   * @param ctx the parse tree
   */
  enterArrayElements?: (ctx: ArrayElementsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.arrayElements`.
   * @param ctx the parse tree
   */
  exitArrayElements?: (ctx: ArrayElementsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleElements`.
   * @param ctx the parse tree
   */
  enterTupleElements?: (ctx: TupleElementsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleElements`.
   * @param ctx the parse tree
   */
  exitTupleElements?: (ctx: TupleElementsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleIndex`.
   * @param ctx the parse tree
   */
  enterTupleIndex?: (ctx: TupleIndexContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleIndex`.
   * @param ctx the parse tree
   */
  exitTupleIndex?: (ctx: TupleIndexContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExpression`.
   * @param ctx the parse tree
   */
  enterStructExpression?: (ctx: StructExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExpression`.
   * @param ctx the parse tree
   */
  exitStructExpression?: (ctx: StructExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExprStruct`.
   * @param ctx the parse tree
   */
  enterStructExprStruct?: (ctx: StructExprStructContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExprStruct`.
   * @param ctx the parse tree
   */
  exitStructExprStruct?: (ctx: StructExprStructContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExprFields`.
   * @param ctx the parse tree
   */
  enterStructExprFields?: (ctx: StructExprFieldsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExprFields`.
   * @param ctx the parse tree
   */
  exitStructExprFields?: (ctx: StructExprFieldsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExprField`.
   * @param ctx the parse tree
   */
  enterStructExprField?: (ctx: StructExprFieldContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExprField`.
   * @param ctx the parse tree
   */
  exitStructExprField?: (ctx: StructExprFieldContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structBase`.
   * @param ctx the parse tree
   */
  enterStructBase?: (ctx: StructBaseContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structBase`.
   * @param ctx the parse tree
   */
  exitStructBase?: (ctx: StructBaseContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExprTuple`.
   * @param ctx the parse tree
   */
  enterStructExprTuple?: (ctx: StructExprTupleContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExprTuple`.
   * @param ctx the parse tree
   */
  exitStructExprTuple?: (ctx: StructExprTupleContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structExprUnit`.
   * @param ctx the parse tree
   */
  enterStructExprUnit?: (ctx: StructExprUnitContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structExprUnit`.
   * @param ctx the parse tree
   */
  exitStructExprUnit?: (ctx: StructExprUnitContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumerationVariantExpression`.
   * @param ctx the parse tree
   */
  enterEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumerationVariantExpression`.
   * @param ctx the parse tree
   */
  exitEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumExprStruct`.
   * @param ctx the parse tree
   */
  enterEnumExprStruct?: (ctx: EnumExprStructContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumExprStruct`.
   * @param ctx the parse tree
   */
  exitEnumExprStruct?: (ctx: EnumExprStructContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumExprFields`.
   * @param ctx the parse tree
   */
  enterEnumExprFields?: (ctx: EnumExprFieldsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumExprFields`.
   * @param ctx the parse tree
   */
  exitEnumExprFields?: (ctx: EnumExprFieldsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumExprField`.
   * @param ctx the parse tree
   */
  enterEnumExprField?: (ctx: EnumExprFieldContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumExprField`.
   * @param ctx the parse tree
   */
  exitEnumExprField?: (ctx: EnumExprFieldContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumExprTuple`.
   * @param ctx the parse tree
   */
  enterEnumExprTuple?: (ctx: EnumExprTupleContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumExprTuple`.
   * @param ctx the parse tree
   */
  exitEnumExprTuple?: (ctx: EnumExprTupleContext) => void

  /**
   * Enter a parse tree produced by `RustParser.enumExprFieldless`.
   * @param ctx the parse tree
   */
  enterEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => void
  /**
   * Exit a parse tree produced by `RustParser.enumExprFieldless`.
   * @param ctx the parse tree
   */
  exitEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => void

  /**
   * Enter a parse tree produced by `RustParser.callParams`.
   * @param ctx the parse tree
   */
  enterCallParams?: (ctx: CallParamsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.callParams`.
   * @param ctx the parse tree
   */
  exitCallParams?: (ctx: CallParamsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.closureExpression`.
   * @param ctx the parse tree
   */
  enterClosureExpression?: (ctx: ClosureExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.closureExpression`.
   * @param ctx the parse tree
   */
  exitClosureExpression?: (ctx: ClosureExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.closureParameters`.
   * @param ctx the parse tree
   */
  enterClosureParameters?: (ctx: ClosureParametersContext) => void
  /**
   * Exit a parse tree produced by `RustParser.closureParameters`.
   * @param ctx the parse tree
   */
  exitClosureParameters?: (ctx: ClosureParametersContext) => void

  /**
   * Enter a parse tree produced by `RustParser.closureParam`.
   * @param ctx the parse tree
   */
  enterClosureParam?: (ctx: ClosureParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.closureParam`.
   * @param ctx the parse tree
   */
  exitClosureParam?: (ctx: ClosureParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.loopExpression`.
   * @param ctx the parse tree
   */
  enterLoopExpression?: (ctx: LoopExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.loopExpression`.
   * @param ctx the parse tree
   */
  exitLoopExpression?: (ctx: LoopExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.infiniteLoopExpression`.
   * @param ctx the parse tree
   */
  enterInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.infiniteLoopExpression`.
   * @param ctx the parse tree
   */
  exitInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.predicateLoopExpression`.
   * @param ctx the parse tree
   */
  enterPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.predicateLoopExpression`.
   * @param ctx the parse tree
   */
  exitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.predicatePatternLoopExpression`.
   * @param ctx the parse tree
   */
  enterPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.predicatePatternLoopExpression`.
   * @param ctx the parse tree
   */
  exitPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.iteratorLoopExpression`.
   * @param ctx the parse tree
   */
  enterIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.iteratorLoopExpression`.
   * @param ctx the parse tree
   */
  exitIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.loopLabel`.
   * @param ctx the parse tree
   */
  enterLoopLabel?: (ctx: LoopLabelContext) => void
  /**
   * Exit a parse tree produced by `RustParser.loopLabel`.
   * @param ctx the parse tree
   */
  exitLoopLabel?: (ctx: LoopLabelContext) => void

  /**
   * Enter a parse tree produced by `RustParser.ifExpression`.
   * @param ctx the parse tree
   */
  enterIfExpression?: (ctx: IfExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.ifExpression`.
   * @param ctx the parse tree
   */
  exitIfExpression?: (ctx: IfExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.ifLetExpression`.
   * @param ctx the parse tree
   */
  enterIfLetExpression?: (ctx: IfLetExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.ifLetExpression`.
   * @param ctx the parse tree
   */
  exitIfLetExpression?: (ctx: IfLetExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchExpression`.
   * @param ctx the parse tree
   */
  enterMatchExpression?: (ctx: MatchExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchExpression`.
   * @param ctx the parse tree
   */
  exitMatchExpression?: (ctx: MatchExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchArms`.
   * @param ctx the parse tree
   */
  enterMatchArms?: (ctx: MatchArmsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchArms`.
   * @param ctx the parse tree
   */
  exitMatchArms?: (ctx: MatchArmsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchArmExpression`.
   * @param ctx the parse tree
   */
  enterMatchArmExpression?: (ctx: MatchArmExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchArmExpression`.
   * @param ctx the parse tree
   */
  exitMatchArmExpression?: (ctx: MatchArmExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchArm`.
   * @param ctx the parse tree
   */
  enterMatchArm?: (ctx: MatchArmContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchArm`.
   * @param ctx the parse tree
   */
  exitMatchArm?: (ctx: MatchArmContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchArmPatterns`.
   * @param ctx the parse tree
   */
  enterMatchArmPatterns?: (ctx: MatchArmPatternsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchArmPatterns`.
   * @param ctx the parse tree
   */
  exitMatchArmPatterns?: (ctx: MatchArmPatternsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.matchArmGuard`.
   * @param ctx the parse tree
   */
  enterMatchArmGuard?: (ctx: MatchArmGuardContext) => void
  /**
   * Exit a parse tree produced by `RustParser.matchArmGuard`.
   * @param ctx the parse tree
   */
  exitMatchArmGuard?: (ctx: MatchArmGuardContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pattern`.
   * @param ctx the parse tree
   */
  enterPattern?: (ctx: PatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pattern`.
   * @param ctx the parse tree
   */
  exitPattern?: (ctx: PatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.patternWithoutRange`.
   * @param ctx the parse tree
   */
  enterPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.patternWithoutRange`.
   * @param ctx the parse tree
   */
  exitPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.literalPattern`.
   * @param ctx the parse tree
   */
  enterLiteralPattern?: (ctx: LiteralPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.literalPattern`.
   * @param ctx the parse tree
   */
  exitLiteralPattern?: (ctx: LiteralPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.identifierPattern`.
   * @param ctx the parse tree
   */
  enterIdentifierPattern?: (ctx: IdentifierPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.identifierPattern`.
   * @param ctx the parse tree
   */
  exitIdentifierPattern?: (ctx: IdentifierPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.wildcardPattern`.
   * @param ctx the parse tree
   */
  enterWildcardPattern?: (ctx: WildcardPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.wildcardPattern`.
   * @param ctx the parse tree
   */
  exitWildcardPattern?: (ctx: WildcardPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.restPattern`.
   * @param ctx the parse tree
   */
  enterRestPattern?: (ctx: RestPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.restPattern`.
   * @param ctx the parse tree
   */
  exitRestPattern?: (ctx: RestPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.rangePattern`.
   * @param ctx the parse tree
   */
  enterRangePattern?: (ctx: RangePatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.rangePattern`.
   * @param ctx the parse tree
   */
  exitRangePattern?: (ctx: RangePatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.obsoleteRangePattern`.
   * @param ctx the parse tree
   */
  enterObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.obsoleteRangePattern`.
   * @param ctx the parse tree
   */
  exitObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.rangePatternBound`.
   * @param ctx the parse tree
   */
  enterRangePatternBound?: (ctx: RangePatternBoundContext) => void
  /**
   * Exit a parse tree produced by `RustParser.rangePatternBound`.
   * @param ctx the parse tree
   */
  exitRangePatternBound?: (ctx: RangePatternBoundContext) => void

  /**
   * Enter a parse tree produced by `RustParser.referencePattern`.
   * @param ctx the parse tree
   */
  enterReferencePattern?: (ctx: ReferencePatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.referencePattern`.
   * @param ctx the parse tree
   */
  exitReferencePattern?: (ctx: ReferencePatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structPattern`.
   * @param ctx the parse tree
   */
  enterStructPattern?: (ctx: StructPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structPattern`.
   * @param ctx the parse tree
   */
  exitStructPattern?: (ctx: StructPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structPatternElements`.
   * @param ctx the parse tree
   */
  enterStructPatternElements?: (ctx: StructPatternElementsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structPatternElements`.
   * @param ctx the parse tree
   */
  exitStructPatternElements?: (ctx: StructPatternElementsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structPatternFields`.
   * @param ctx the parse tree
   */
  enterStructPatternFields?: (ctx: StructPatternFieldsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structPatternFields`.
   * @param ctx the parse tree
   */
  exitStructPatternFields?: (ctx: StructPatternFieldsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structPatternField`.
   * @param ctx the parse tree
   */
  enterStructPatternField?: (ctx: StructPatternFieldContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structPatternField`.
   * @param ctx the parse tree
   */
  exitStructPatternField?: (ctx: StructPatternFieldContext) => void

  /**
   * Enter a parse tree produced by `RustParser.structPatternEtCetera`.
   * @param ctx the parse tree
   */
  enterStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => void
  /**
   * Exit a parse tree produced by `RustParser.structPatternEtCetera`.
   * @param ctx the parse tree
   */
  exitStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleStructPattern`.
   * @param ctx the parse tree
   */
  enterTupleStructPattern?: (ctx: TupleStructPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleStructPattern`.
   * @param ctx the parse tree
   */
  exitTupleStructPattern?: (ctx: TupleStructPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleStructItems`.
   * @param ctx the parse tree
   */
  enterTupleStructItems?: (ctx: TupleStructItemsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleStructItems`.
   * @param ctx the parse tree
   */
  exitTupleStructItems?: (ctx: TupleStructItemsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tuplePattern`.
   * @param ctx the parse tree
   */
  enterTuplePattern?: (ctx: TuplePatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tuplePattern`.
   * @param ctx the parse tree
   */
  exitTuplePattern?: (ctx: TuplePatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tuplePatternItems`.
   * @param ctx the parse tree
   */
  enterTuplePatternItems?: (ctx: TuplePatternItemsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tuplePatternItems`.
   * @param ctx the parse tree
   */
  exitTuplePatternItems?: (ctx: TuplePatternItemsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.groupedPattern`.
   * @param ctx the parse tree
   */
  enterGroupedPattern?: (ctx: GroupedPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.groupedPattern`.
   * @param ctx the parse tree
   */
  exitGroupedPattern?: (ctx: GroupedPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.slicePattern`.
   * @param ctx the parse tree
   */
  enterSlicePattern?: (ctx: SlicePatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.slicePattern`.
   * @param ctx the parse tree
   */
  exitSlicePattern?: (ctx: SlicePatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.slicePatternItems`.
   * @param ctx the parse tree
   */
  enterSlicePatternItems?: (ctx: SlicePatternItemsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.slicePatternItems`.
   * @param ctx the parse tree
   */
  exitSlicePatternItems?: (ctx: SlicePatternItemsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pathPattern`.
   * @param ctx the parse tree
   */
  enterPathPattern?: (ctx: PathPatternContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pathPattern`.
   * @param ctx the parse tree
   */
  exitPathPattern?: (ctx: PathPatternContext) => void

  /**
   * Enter a parse tree produced by `RustParser.type_`.
   * @param ctx the parse tree
   */
  enterType_?: (ctx: Type_Context) => void
  /**
   * Exit a parse tree produced by `RustParser.type_`.
   * @param ctx the parse tree
   */
  exitType_?: (ctx: Type_Context) => void

  /**
   * Enter a parse tree produced by `RustParser.typeNoBounds`.
   * @param ctx the parse tree
   */
  enterTypeNoBounds?: (ctx: TypeNoBoundsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeNoBounds`.
   * @param ctx the parse tree
   */
  exitTypeNoBounds?: (ctx: TypeNoBoundsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.parenthesizedType`.
   * @param ctx the parse tree
   */
  enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.parenthesizedType`.
   * @param ctx the parse tree
   */
  exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.neverType`.
   * @param ctx the parse tree
   */
  enterNeverType?: (ctx: NeverTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.neverType`.
   * @param ctx the parse tree
   */
  exitNeverType?: (ctx: NeverTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.tupleType`.
   * @param ctx the parse tree
   */
  enterTupleType?: (ctx: TupleTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.tupleType`.
   * @param ctx the parse tree
   */
  exitTupleType?: (ctx: TupleTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.arrayType`.
   * @param ctx the parse tree
   */
  enterArrayType?: (ctx: ArrayTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.arrayType`.
   * @param ctx the parse tree
   */
  exitArrayType?: (ctx: ArrayTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.sliceType`.
   * @param ctx the parse tree
   */
  enterSliceType?: (ctx: SliceTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.sliceType`.
   * @param ctx the parse tree
   */
  exitSliceType?: (ctx: SliceTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.referenceType`.
   * @param ctx the parse tree
   */
  enterReferenceType?: (ctx: ReferenceTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.referenceType`.
   * @param ctx the parse tree
   */
  exitReferenceType?: (ctx: ReferenceTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.rawPointerType`.
   * @param ctx the parse tree
   */
  enterRawPointerType?: (ctx: RawPointerTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.rawPointerType`.
   * @param ctx the parse tree
   */
  exitRawPointerType?: (ctx: RawPointerTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.bareFunctionType`.
   * @param ctx the parse tree
   */
  enterBareFunctionType?: (ctx: BareFunctionTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.bareFunctionType`.
   * @param ctx the parse tree
   */
  exitBareFunctionType?: (ctx: BareFunctionTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionTypeQualifiers`.
   * @param ctx the parse tree
   */
  enterFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => void
  /**
   * Exit a parse tree produced by `RustParser.functionTypeQualifiers`.
   * @param ctx the parse tree
   */
  exitFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => void

  /**
   * Enter a parse tree produced by `RustParser.bareFunctionReturnType`.
   * @param ctx the parse tree
   */
  enterBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.bareFunctionReturnType`.
   * @param ctx the parse tree
   */
  exitBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
   * @param ctx the parse tree
   */
  enterFunctionParametersMaybeNamedVariadic?: (
    ctx: FunctionParametersMaybeNamedVariadicContext
  ) => void
  /**
   * Exit a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
   * @param ctx the parse tree
   */
  exitFunctionParametersMaybeNamedVariadic?: (
    ctx: FunctionParametersMaybeNamedVariadicContext
  ) => void

  /**
   * Enter a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
   * @param ctx the parse tree
   */
  enterMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => void
  /**
   * Exit a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
   * @param ctx the parse tree
   */
  exitMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => void

  /**
   * Enter a parse tree produced by `RustParser.maybeNamedParam`.
   * @param ctx the parse tree
   */
  enterMaybeNamedParam?: (ctx: MaybeNamedParamContext) => void
  /**
   * Exit a parse tree produced by `RustParser.maybeNamedParam`.
   * @param ctx the parse tree
   */
  exitMaybeNamedParam?: (ctx: MaybeNamedParamContext) => void

  /**
   * Enter a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
   * @param ctx the parse tree
   */
  enterMaybeNamedFunctionParametersVariadic?: (
    ctx: MaybeNamedFunctionParametersVariadicContext
  ) => void
  /**
   * Exit a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
   * @param ctx the parse tree
   */
  exitMaybeNamedFunctionParametersVariadic?: (
    ctx: MaybeNamedFunctionParametersVariadicContext
  ) => void

  /**
   * Enter a parse tree produced by `RustParser.traitObjectType`.
   * @param ctx the parse tree
   */
  enterTraitObjectType?: (ctx: TraitObjectTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.traitObjectType`.
   * @param ctx the parse tree
   */
  exitTraitObjectType?: (ctx: TraitObjectTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.traitObjectTypeOneBound`.
   * @param ctx the parse tree
   */
  enterTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => void
  /**
   * Exit a parse tree produced by `RustParser.traitObjectTypeOneBound`.
   * @param ctx the parse tree
   */
  exitTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => void

  /**
   * Enter a parse tree produced by `RustParser.implTraitType`.
   * @param ctx the parse tree
   */
  enterImplTraitType?: (ctx: ImplTraitTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.implTraitType`.
   * @param ctx the parse tree
   */
  exitImplTraitType?: (ctx: ImplTraitTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.implTraitTypeOneBound`.
   * @param ctx the parse tree
   */
  enterImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => void
  /**
   * Exit a parse tree produced by `RustParser.implTraitTypeOneBound`.
   * @param ctx the parse tree
   */
  exitImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => void

  /**
   * Enter a parse tree produced by `RustParser.inferredType`.
   * @param ctx the parse tree
   */
  enterInferredType?: (ctx: InferredTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.inferredType`.
   * @param ctx the parse tree
   */
  exitInferredType?: (ctx: InferredTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typeParamBounds`.
   * @param ctx the parse tree
   */
  enterTypeParamBounds?: (ctx: TypeParamBoundsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeParamBounds`.
   * @param ctx the parse tree
   */
  exitTypeParamBounds?: (ctx: TypeParamBoundsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typeParamBound`.
   * @param ctx the parse tree
   */
  enterTypeParamBound?: (ctx: TypeParamBoundContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typeParamBound`.
   * @param ctx the parse tree
   */
  exitTypeParamBound?: (ctx: TypeParamBoundContext) => void

  /**
   * Enter a parse tree produced by `RustParser.traitBound`.
   * @param ctx the parse tree
   */
  enterTraitBound?: (ctx: TraitBoundContext) => void
  /**
   * Exit a parse tree produced by `RustParser.traitBound`.
   * @param ctx the parse tree
   */
  exitTraitBound?: (ctx: TraitBoundContext) => void

  /**
   * Enter a parse tree produced by `RustParser.lifetimeBounds`.
   * @param ctx the parse tree
   */
  enterLifetimeBounds?: (ctx: LifetimeBoundsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.lifetimeBounds`.
   * @param ctx the parse tree
   */
  exitLifetimeBounds?: (ctx: LifetimeBoundsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.lifetime`.
   * @param ctx the parse tree
   */
  enterLifetime?: (ctx: LifetimeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.lifetime`.
   * @param ctx the parse tree
   */
  exitLifetime?: (ctx: LifetimeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.simplePath`.
   * @param ctx the parse tree
   */
  enterSimplePath?: (ctx: SimplePathContext) => void
  /**
   * Exit a parse tree produced by `RustParser.simplePath`.
   * @param ctx the parse tree
   */
  exitSimplePath?: (ctx: SimplePathContext) => void

  /**
   * Enter a parse tree produced by `RustParser.simplePathSegment`.
   * @param ctx the parse tree
   */
  enterSimplePathSegment?: (ctx: SimplePathSegmentContext) => void
  /**
   * Exit a parse tree produced by `RustParser.simplePathSegment`.
   * @param ctx the parse tree
   */
  exitSimplePathSegment?: (ctx: SimplePathSegmentContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pathInExpression`.
   * @param ctx the parse tree
   */
  enterPathInExpression?: (ctx: PathInExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pathInExpression`.
   * @param ctx the parse tree
   */
  exitPathInExpression?: (ctx: PathInExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pathExprSegment`.
   * @param ctx the parse tree
   */
  enterPathExprSegment?: (ctx: PathExprSegmentContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pathExprSegment`.
   * @param ctx the parse tree
   */
  exitPathExprSegment?: (ctx: PathExprSegmentContext) => void

  /**
   * Enter a parse tree produced by `RustParser.pathIdentSegment`.
   * @param ctx the parse tree
   */
  enterPathIdentSegment?: (ctx: PathIdentSegmentContext) => void
  /**
   * Exit a parse tree produced by `RustParser.pathIdentSegment`.
   * @param ctx the parse tree
   */
  exitPathIdentSegment?: (ctx: PathIdentSegmentContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgs`.
   * @param ctx the parse tree
   */
  enterGenericArgs?: (ctx: GenericArgsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgs`.
   * @param ctx the parse tree
   */
  exitGenericArgs?: (ctx: GenericArgsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArg`.
   * @param ctx the parse tree
   */
  enterGenericArg?: (ctx: GenericArgContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArg`.
   * @param ctx the parse tree
   */
  exitGenericArg?: (ctx: GenericArgContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgsConst`.
   * @param ctx the parse tree
   */
  enterGenericArgsConst?: (ctx: GenericArgsConstContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgsConst`.
   * @param ctx the parse tree
   */
  exitGenericArgsConst?: (ctx: GenericArgsConstContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgsLifetimes`.
   * @param ctx the parse tree
   */
  enterGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgsLifetimes`.
   * @param ctx the parse tree
   */
  exitGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgsTypes`.
   * @param ctx the parse tree
   */
  enterGenericArgsTypes?: (ctx: GenericArgsTypesContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgsTypes`.
   * @param ctx the parse tree
   */
  exitGenericArgsTypes?: (ctx: GenericArgsTypesContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgsBindings`.
   * @param ctx the parse tree
   */
  enterGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgsBindings`.
   * @param ctx the parse tree
   */
  exitGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.genericArgsBinding`.
   * @param ctx the parse tree
   */
  enterGenericArgsBinding?: (ctx: GenericArgsBindingContext) => void
  /**
   * Exit a parse tree produced by `RustParser.genericArgsBinding`.
   * @param ctx the parse tree
   */
  exitGenericArgsBinding?: (ctx: GenericArgsBindingContext) => void

  /**
   * Enter a parse tree produced by `RustParser.qualifiedPathInExpression`.
   * @param ctx the parse tree
   */
  enterQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => void
  /**
   * Exit a parse tree produced by `RustParser.qualifiedPathInExpression`.
   * @param ctx the parse tree
   */
  exitQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => void

  /**
   * Enter a parse tree produced by `RustParser.qualifiedPathType`.
   * @param ctx the parse tree
   */
  enterQualifiedPathType?: (ctx: QualifiedPathTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.qualifiedPathType`.
   * @param ctx the parse tree
   */
  exitQualifiedPathType?: (ctx: QualifiedPathTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.qualifiedPathInType`.
   * @param ctx the parse tree
   */
  enterQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => void
  /**
   * Exit a parse tree produced by `RustParser.qualifiedPathInType`.
   * @param ctx the parse tree
   */
  exitQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typePath`.
   * @param ctx the parse tree
   */
  enterTypePath?: (ctx: TypePathContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typePath`.
   * @param ctx the parse tree
   */
  exitTypePath?: (ctx: TypePathContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typePathSegment`.
   * @param ctx the parse tree
   */
  enterTypePathSegment?: (ctx: TypePathSegmentContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typePathSegment`.
   * @param ctx the parse tree
   */
  exitTypePathSegment?: (ctx: TypePathSegmentContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typePathFn`.
   * @param ctx the parse tree
   */
  enterTypePathFn?: (ctx: TypePathFnContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typePathFn`.
   * @param ctx the parse tree
   */
  exitTypePathFn?: (ctx: TypePathFnContext) => void

  /**
   * Enter a parse tree produced by `RustParser.typePathInputs`.
   * @param ctx the parse tree
   */
  enterTypePathInputs?: (ctx: TypePathInputsContext) => void
  /**
   * Exit a parse tree produced by `RustParser.typePathInputs`.
   * @param ctx the parse tree
   */
  exitTypePathInputs?: (ctx: TypePathInputsContext) => void

  /**
   * Enter a parse tree produced by `RustParser.visibility`.
   * @param ctx the parse tree
   */
  enterVisibility?: (ctx: VisibilityContext) => void
  /**
   * Exit a parse tree produced by `RustParser.visibility`.
   * @param ctx the parse tree
   */
  exitVisibility?: (ctx: VisibilityContext) => void

  /**
   * Enter a parse tree produced by `RustParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `RustParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

  /**
   * Enter a parse tree produced by `RustParser.keyword`.
   * @param ctx the parse tree
   */
  enterKeyword?: (ctx: KeywordContext) => void
  /**
   * Exit a parse tree produced by `RustParser.keyword`.
   * @param ctx the parse tree
   */
  exitKeyword?: (ctx: KeywordContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroIdentifierLikeToken`.
   * @param ctx the parse tree
   */
  enterMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroIdentifierLikeToken`.
   * @param ctx the parse tree
   */
  exitMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroLiteralToken`.
   * @param ctx the parse tree
   */
  enterMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroLiteralToken`.
   * @param ctx the parse tree
   */
  exitMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => void

  /**
   * Enter a parse tree produced by `RustParser.macroPunctuationToken`.
   * @param ctx the parse tree
   */
  enterMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => void
  /**
   * Exit a parse tree produced by `RustParser.macroPunctuationToken`.
   * @param ctx the parse tree
   */
  exitMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => void

  /**
   * Enter a parse tree produced by `RustParser.shl`.
   * @param ctx the parse tree
   */
  enterShl?: (ctx: ShlContext) => void
  /**
   * Exit a parse tree produced by `RustParser.shl`.
   * @param ctx the parse tree
   */
  exitShl?: (ctx: ShlContext) => void

  /**
   * Enter a parse tree produced by `RustParser.shr`.
   * @param ctx the parse tree
   */
  enterShr?: (ctx: ShrContext) => void
  /**
   * Exit a parse tree produced by `RustParser.shr`.
   * @param ctx the parse tree
   */
  exitShr?: (ctx: ShrContext) => void
}
