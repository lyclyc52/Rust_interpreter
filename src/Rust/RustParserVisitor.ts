// Generated from ./src/lang/RustParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AttributedExpressionContext } from "./RustParser";
import { LiteralExpression_Context } from "./RustParser";
import { PathExpression_Context } from "./RustParser";
import { MethodCallExpressionContext } from "./RustParser";
import { FieldExpressionContext } from "./RustParser";
import { TupleIndexingExpressionContext } from "./RustParser";
import { AwaitExpressionContext } from "./RustParser";
import { CallExpressionContext } from "./RustParser";
import { IndexExpressionContext } from "./RustParser";
import { ErrorPropagationExpressionContext } from "./RustParser";
import { BorrowExpressionContext } from "./RustParser";
import { DereferenceExpressionContext } from "./RustParser";
import { NegationExpressionContext } from "./RustParser";
import { TypeCastExpressionContext } from "./RustParser";
import { ArithmeticOrLogicalExpressionContext } from "./RustParser";
import { ComparisonExpressionContext } from "./RustParser";
import { LazyBooleanExpressionContext } from "./RustParser";
import { RangeExpressionContext } from "./RustParser";
import { AssignmentExpressionContext } from "./RustParser";
import { CompoundAssignmentExpressionContext } from "./RustParser";
import { ContinueExpressionContext } from "./RustParser";
import { BreakExpressionContext } from "./RustParser";
import { ReturnExpressionContext } from "./RustParser";
import { GroupedExpressionContext } from "./RustParser";
import { ArrayExpressionContext } from "./RustParser";
import { TupleExpressionContext } from "./RustParser";
import { StructExpression_Context } from "./RustParser";
import { EnumerationVariantExpression_Context } from "./RustParser";
import { ClosureExpression_Context } from "./RustParser";
import { ExpressionWithBlock_Context } from "./RustParser";
import { MacroInvocationAsExpressionContext } from "./RustParser";
import { CrateContext } from "./RustParser";
import { MacroInvocationContext } from "./RustParser";
import { DelimTokenTreeContext } from "./RustParser";
import { TokenTreeContext } from "./RustParser";
import { TokenTreeTokenContext } from "./RustParser";
import { MacroInvocationSemiContext } from "./RustParser";
import { MacroRulesDefinitionContext } from "./RustParser";
import { MacroRulesDefContext } from "./RustParser";
import { MacroRulesContext } from "./RustParser";
import { MacroRuleContext } from "./RustParser";
import { MacroMatcherContext } from "./RustParser";
import { MacroMatchContext } from "./RustParser";
import { MacroMatchTokenContext } from "./RustParser";
import { MacroFragSpecContext } from "./RustParser";
import { MacroRepSepContext } from "./RustParser";
import { MacroRepOpContext } from "./RustParser";
import { MacroTranscriberContext } from "./RustParser";
import { ItemContext } from "./RustParser";
import { VisItemContext } from "./RustParser";
import { MacroItemContext } from "./RustParser";
import { ModuleContext } from "./RustParser";
import { ExternCrateContext } from "./RustParser";
import { CrateRefContext } from "./RustParser";
import { AsClauseContext } from "./RustParser";
import { UseDeclarationContext } from "./RustParser";
import { UseTreeContext } from "./RustParser";
import { Function_Context } from "./RustParser";
import { FunctionQualifiersContext } from "./RustParser";
import { AbiContext } from "./RustParser";
import { FunctionParametersContext } from "./RustParser";
import { SelfParamContext } from "./RustParser";
import { ShorthandSelfContext } from "./RustParser";
import { TypedSelfContext } from "./RustParser";
import { FunctionParamContext } from "./RustParser";
import { FunctionParamPatternContext } from "./RustParser";
import { FunctionReturnTypeContext } from "./RustParser";
import { TypeAliasContext } from "./RustParser";
import { Struct_Context } from "./RustParser";
import { StructStructContext } from "./RustParser";
import { TupleStructContext } from "./RustParser";
import { StructFieldsContext } from "./RustParser";
import { StructFieldContext } from "./RustParser";
import { TupleFieldsContext } from "./RustParser";
import { TupleFieldContext } from "./RustParser";
import { EnumerationContext } from "./RustParser";
import { EnumItemsContext } from "./RustParser";
import { EnumItemContext } from "./RustParser";
import { EnumItemTupleContext } from "./RustParser";
import { EnumItemStructContext } from "./RustParser";
import { EnumItemDiscriminantContext } from "./RustParser";
import { Union_Context } from "./RustParser";
import { ConstantItemContext } from "./RustParser";
import { StaticItemContext } from "./RustParser";
import { Trait_Context } from "./RustParser";
import { ImplementationContext } from "./RustParser";
import { InherentImplContext } from "./RustParser";
import { TraitImplContext } from "./RustParser";
import { ExternBlockContext } from "./RustParser";
import { ExternalItemContext } from "./RustParser";
import { GenericParamsContext } from "./RustParser";
import { GenericParamContext } from "./RustParser";
import { LifetimeParamContext } from "./RustParser";
import { TypeParamContext } from "./RustParser";
import { ConstParamContext } from "./RustParser";
import { WhereClauseContext } from "./RustParser";
import { WhereClauseItemContext } from "./RustParser";
import { LifetimeWhereClauseItemContext } from "./RustParser";
import { TypeBoundWhereClauseItemContext } from "./RustParser";
import { ForLifetimesContext } from "./RustParser";
import { AssociatedItemContext } from "./RustParser";
import { InnerAttributeContext } from "./RustParser";
import { OuterAttributeContext } from "./RustParser";
import { AttrContext } from "./RustParser";
import { AttrInputContext } from "./RustParser";
import { StatementContext } from "./RustParser";
import { LetStatementContext } from "./RustParser";
import { ExpressionStatementContext } from "./RustParser";
import { ExpressionContext } from "./RustParser";
import { ComparisonOperatorContext } from "./RustParser";
import { CompoundAssignOperatorContext } from "./RustParser";
import { ExpressionWithBlockContext } from "./RustParser";
import { LiteralExpressionContext } from "./RustParser";
import { PathExpressionContext } from "./RustParser";
import { BlockExpressionContext } from "./RustParser";
import { StatementsContext } from "./RustParser";
import { AsyncBlockExpressionContext } from "./RustParser";
import { UnsafeBlockExpressionContext } from "./RustParser";
import { ArrayElementsContext } from "./RustParser";
import { TupleElementsContext } from "./RustParser";
import { TupleIndexContext } from "./RustParser";
import { StructExpressionContext } from "./RustParser";
import { StructExprStructContext } from "./RustParser";
import { StructExprFieldsContext } from "./RustParser";
import { StructExprFieldContext } from "./RustParser";
import { StructBaseContext } from "./RustParser";
import { StructExprTupleContext } from "./RustParser";
import { StructExprUnitContext } from "./RustParser";
import { EnumerationVariantExpressionContext } from "./RustParser";
import { EnumExprStructContext } from "./RustParser";
import { EnumExprFieldsContext } from "./RustParser";
import { EnumExprFieldContext } from "./RustParser";
import { EnumExprTupleContext } from "./RustParser";
import { EnumExprFieldlessContext } from "./RustParser";
import { CallParamsContext } from "./RustParser";
import { ClosureExpressionContext } from "./RustParser";
import { ClosureParametersContext } from "./RustParser";
import { ClosureParamContext } from "./RustParser";
import { LoopExpressionContext } from "./RustParser";
import { InfiniteLoopExpressionContext } from "./RustParser";
import { PredicateLoopExpressionContext } from "./RustParser";
import { PredicatePatternLoopExpressionContext } from "./RustParser";
import { IteratorLoopExpressionContext } from "./RustParser";
import { LoopLabelContext } from "./RustParser";
import { IfExpressionContext } from "./RustParser";
import { IfLetExpressionContext } from "./RustParser";
import { MatchExpressionContext } from "./RustParser";
import { MatchArmsContext } from "./RustParser";
import { MatchArmExpressionContext } from "./RustParser";
import { MatchArmContext } from "./RustParser";
import { MatchArmPatternsContext } from "./RustParser";
import { MatchArmGuardContext } from "./RustParser";
import { PatternContext } from "./RustParser";
import { PatternWithoutRangeContext } from "./RustParser";
import { LiteralPatternContext } from "./RustParser";
import { IdentifierPatternContext } from "./RustParser";
import { WildcardPatternContext } from "./RustParser";
import { RestPatternContext } from "./RustParser";
import { RangePatternContext } from "./RustParser";
import { ObsoleteRangePatternContext } from "./RustParser";
import { RangePatternBoundContext } from "./RustParser";
import { ReferencePatternContext } from "./RustParser";
import { StructPatternContext } from "./RustParser";
import { StructPatternElementsContext } from "./RustParser";
import { StructPatternFieldsContext } from "./RustParser";
import { StructPatternFieldContext } from "./RustParser";
import { StructPatternEtCeteraContext } from "./RustParser";
import { TupleStructPatternContext } from "./RustParser";
import { TupleStructItemsContext } from "./RustParser";
import { TuplePatternContext } from "./RustParser";
import { TuplePatternItemsContext } from "./RustParser";
import { GroupedPatternContext } from "./RustParser";
import { SlicePatternContext } from "./RustParser";
import { SlicePatternItemsContext } from "./RustParser";
import { PathPatternContext } from "./RustParser";
import { Type_Context } from "./RustParser";
import { TypeNoBoundsContext } from "./RustParser";
import { ParenthesizedTypeContext } from "./RustParser";
import { NeverTypeContext } from "./RustParser";
import { TupleTypeContext } from "./RustParser";
import { ArrayTypeContext } from "./RustParser";
import { SliceTypeContext } from "./RustParser";
import { ReferenceTypeContext } from "./RustParser";
import { RawPointerTypeContext } from "./RustParser";
import { BareFunctionTypeContext } from "./RustParser";
import { FunctionTypeQualifiersContext } from "./RustParser";
import { BareFunctionReturnTypeContext } from "./RustParser";
import { FunctionParametersMaybeNamedVariadicContext } from "./RustParser";
import { MaybeNamedFunctionParametersContext } from "./RustParser";
import { MaybeNamedParamContext } from "./RustParser";
import { MaybeNamedFunctionParametersVariadicContext } from "./RustParser";
import { TraitObjectTypeContext } from "./RustParser";
import { TraitObjectTypeOneBoundContext } from "./RustParser";
import { ImplTraitTypeContext } from "./RustParser";
import { ImplTraitTypeOneBoundContext } from "./RustParser";
import { InferredTypeContext } from "./RustParser";
import { TypeParamBoundsContext } from "./RustParser";
import { TypeParamBoundContext } from "./RustParser";
import { TraitBoundContext } from "./RustParser";
import { LifetimeBoundsContext } from "./RustParser";
import { LifetimeContext } from "./RustParser";
import { SimplePathContext } from "./RustParser";
import { SimplePathSegmentContext } from "./RustParser";
import { PathInExpressionContext } from "./RustParser";
import { PathExprSegmentContext } from "./RustParser";
import { PathIdentSegmentContext } from "./RustParser";
import { GenericArgsContext } from "./RustParser";
import { GenericArgContext } from "./RustParser";
import { GenericArgsConstContext } from "./RustParser";
import { GenericArgsLifetimesContext } from "./RustParser";
import { GenericArgsTypesContext } from "./RustParser";
import { GenericArgsBindingsContext } from "./RustParser";
import { GenericArgsBindingContext } from "./RustParser";
import { QualifiedPathInExpressionContext } from "./RustParser";
import { QualifiedPathTypeContext } from "./RustParser";
import { QualifiedPathInTypeContext } from "./RustParser";
import { TypePathContext } from "./RustParser";
import { TypePathSegmentContext } from "./RustParser";
import { TypePathFnContext } from "./RustParser";
import { TypePathInputsContext } from "./RustParser";
import { VisibilityContext } from "./RustParser";
import { IdentifierContext } from "./RustParser";
import { KeywordContext } from "./RustParser";
import { MacroIdentifierLikeTokenContext } from "./RustParser";
import { MacroLiteralTokenContext } from "./RustParser";
import { MacroPunctuationTokenContext } from "./RustParser";
import { ShlContext } from "./RustParser";
import { ShrContext } from "./RustParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RustParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `AttributedExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributedExpression?: (ctx: AttributedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression_?: (ctx: LiteralExpression_Context) => Result;

	/**
	 * Visit a parse tree produced by the `PathExpression_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression_?: (ctx: PathExpression_Context) => Result;

	/**
	 * Visit a parse tree produced by the `MethodCallExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `FieldExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldExpression?: (ctx: FieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleIndexingExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AwaitExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwaitExpression?: (ctx: AwaitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IndexExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexExpression?: (ctx: IndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ErrorPropagationExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BorrowExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBorrowExpression?: (ctx: BorrowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DereferenceExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereferenceExpression?: (ctx: DereferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NegationExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationExpression?: (ctx: NegationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeCastExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCastExpression?: (ctx: TypeCastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArithmeticOrLogicalExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComparisonExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LazyBooleanExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RangeExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpression?: (ctx: RangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompoundAssignmentExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ContinueExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueExpression?: (ctx: ContinueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BreakExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakExpression?: (ctx: BreakExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnExpression?: (ctx: ReturnExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GroupedExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedExpression?: (ctx: GroupedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructExpression_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExpression_?: (ctx: StructExpression_Context) => Result;

	/**
	 * Visit a parse tree produced by the `EnumerationVariantExpression_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => Result;

	/**
	 * Visit a parse tree produced by the `ClosureExpression_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureExpression_?: (ctx: ClosureExpression_Context) => Result;

	/**
	 * Visit a parse tree produced by the `ExpressionWithBlock_`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => Result;

	/**
	 * Visit a parse tree produced by the `MacroInvocationAsExpression`
	 * labeled alternative in `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.crate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrate?: (ctx: CrateContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroInvocation?: (ctx: MacroInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.delimTokenTree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelimTokenTree?: (ctx: DelimTokenTreeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tokenTree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokenTree?: (ctx: TokenTreeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tokenTreeToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokenTreeToken?: (ctx: TokenTreeTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroInvocationSemi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRulesDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRulesDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRulesDef?: (ctx: MacroRulesDefContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRules?: (ctx: MacroRulesContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRule?: (ctx: MacroRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroMatcher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroMatcher?: (ctx: MacroMatcherContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroMatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroMatch?: (ctx: MacroMatchContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroMatchToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroMatchToken?: (ctx: MacroMatchTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroFragSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroFragSpec?: (ctx: MacroFragSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRepSep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRepSep?: (ctx: MacroRepSepContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroRepOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroRepOp?: (ctx: MacroRepOpContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroTranscriber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroTranscriber?: (ctx: MacroTranscriberContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.visItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisItem?: (ctx: VisItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroItem?: (ctx: MacroItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.externCrate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternCrate?: (ctx: ExternCrateContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.crateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrateRef?: (ctx: CrateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.asClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsClause?: (ctx: AsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.useDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDeclaration?: (ctx: UseDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.useTree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseTree?: (ctx: UseTreeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionQualifiers?: (ctx: FunctionQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.abi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbi?: (ctx: AbiContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.selfParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfParam?: (ctx: SelfParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.shorthandSelf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShorthandSelf?: (ctx: ShorthandSelfContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typedSelf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedSelf?: (ctx: TypedSelfContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParam?: (ctx: FunctionParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionParamPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionReturnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAlias?: (ctx: TypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.struct_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_?: (ctx: Struct_Context) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructStruct?: (ctx: StructStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleStruct?: (ctx: TupleStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructFields?: (ctx: StructFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructField?: (ctx: StructFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleFields?: (ctx: TupleFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleField?: (ctx: TupleFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeration?: (ctx: EnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItems?: (ctx: EnumItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItem?: (ctx: EnumItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumItemTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItemTuple?: (ctx: EnumItemTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumItemStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItemStruct?: (ctx: EnumItemStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumItemDiscriminant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.union_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_?: (ctx: Union_Context) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.constantItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantItem?: (ctx: ConstantItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.staticItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticItem?: (ctx: StaticItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.trait_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrait_?: (ctx: Trait_Context) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.implementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementation?: (ctx: ImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.inherentImpl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInherentImpl?: (ctx: InherentImplContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.traitImpl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitImpl?: (ctx: TraitImplContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.externBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternBlock?: (ctx: ExternBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.externalItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalItem?: (ctx: ExternalItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericParams?: (ctx: GenericParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericParam?: (ctx: GenericParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.lifetimeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLifetimeParam?: (ctx: LifetimeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParam?: (ctx: TypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.constParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstParam?: (ctx: ConstParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.whereClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClauseItem?: (ctx: WhereClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.forLifetimes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLifetimes?: (ctx: ForLifetimesContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.associatedItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociatedItem?: (ctx: AssociatedItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.innerAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerAttribute?: (ctx: InnerAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.outerAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOuterAttribute?: (ctx: OuterAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.attrInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrInput?: (ctx: AttrInputContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.letStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStatement?: (ctx: LetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.compoundAssignOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.expressionWithBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.literalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression?: (ctx: PathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.blockExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockExpression?: (ctx: BlockExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.asyncBlockExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.unsafeBlockExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.arrayElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElements?: (ctx: ArrayElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleElements?: (ctx: TupleElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleIndex?: (ctx: TupleIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExpression?: (ctx: StructExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExprStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExprStruct?: (ctx: StructExprStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExprFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExprFields?: (ctx: StructExprFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExprField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExprField?: (ctx: StructExprFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBase?: (ctx: StructBaseContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExprTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExprTuple?: (ctx: StructExprTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structExprUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExprUnit?: (ctx: StructExprUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumerationVariantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumExprStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumExprStruct?: (ctx: EnumExprStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumExprFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumExprFields?: (ctx: EnumExprFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumExprField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumExprField?: (ctx: EnumExprFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumExprTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumExprTuple?: (ctx: EnumExprTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.enumExprFieldless`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.callParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallParams?: (ctx: CallParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.closureExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureExpression?: (ctx: ClosureExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.closureParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParameters?: (ctx: ClosureParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.closureParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParam?: (ctx: ClosureParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.loopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopExpression?: (ctx: LoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.infiniteLoopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.predicateLoopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.predicatePatternLoopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.iteratorLoopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.loopLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopLabel?: (ctx: LoopLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.ifExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpression?: (ctx: IfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.ifLetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfLetExpression?: (ctx: IfLetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchExpression?: (ctx: MatchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchArms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchArms?: (ctx: MatchArmsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchArmExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchArmExpression?: (ctx: MatchArmExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchArm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchArm?: (ctx: MatchArmContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchArmPatterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchArmPatterns?: (ctx: MatchArmPatternsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.matchArmGuard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchArmGuard?: (ctx: MatchArmGuardContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.patternWithoutRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.literalPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPattern?: (ctx: LiteralPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.identifierPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPattern?: (ctx: IdentifierPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.wildcardPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardPattern?: (ctx: WildcardPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.restPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestPattern?: (ctx: RestPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.rangePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangePattern?: (ctx: RangePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.obsoleteRangePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.rangePatternBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangePatternBound?: (ctx: RangePatternBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.referencePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencePattern?: (ctx: ReferencePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructPattern?: (ctx: StructPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structPatternElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructPatternElements?: (ctx: StructPatternElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structPatternFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructPatternFields?: (ctx: StructPatternFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structPatternField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructPatternField?: (ctx: StructPatternFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.structPatternEtCetera`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleStructPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleStructPattern?: (ctx: TupleStructPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleStructItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleStructItems?: (ctx: TupleStructItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tuplePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePattern?: (ctx: TuplePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tuplePatternItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePatternItems?: (ctx: TuplePatternItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.groupedPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.slicePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlicePattern?: (ctx: SlicePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.slicePatternItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlicePatternItems?: (ctx: SlicePatternItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pathPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathPattern?: (ctx: PathPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeNoBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNoBounds?: (ctx: TypeNoBoundsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.parenthesizedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.neverType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeverType?: (ctx: NeverTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.sliceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceType?: (ctx: SliceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.referenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceType?: (ctx: ReferenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.rawPointerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawPointerType?: (ctx: RawPointerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.bareFunctionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBareFunctionType?: (ctx: BareFunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionTypeQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.bareFunctionReturnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParametersMaybeNamedVariadic?: (ctx: FunctionParametersMaybeNamedVariadicContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.maybeNamedParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybeNamedParam?: (ctx: MaybeNamedParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybeNamedFunctionParametersVariadic?: (ctx: MaybeNamedFunctionParametersVariadicContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.traitObjectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitObjectType?: (ctx: TraitObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.traitObjectTypeOneBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.implTraitType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplTraitType?: (ctx: ImplTraitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.implTraitTypeOneBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.inferredType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInferredType?: (ctx: InferredTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeParamBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParamBounds?: (ctx: TypeParamBoundsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typeParamBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParamBound?: (ctx: TypeParamBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.traitBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitBound?: (ctx: TraitBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.lifetimeBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLifetimeBounds?: (ctx: LifetimeBoundsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.lifetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLifetime?: (ctx: LifetimeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.simplePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePath?: (ctx: SimplePathContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.simplePathSegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePathSegment?: (ctx: SimplePathSegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pathInExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathInExpression?: (ctx: PathInExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pathExprSegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExprSegment?: (ctx: PathExprSegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.pathIdentSegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathIdentSegment?: (ctx: PathIdentSegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgs?: (ctx: GenericArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArg?: (ctx: GenericArgContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgsConst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgsConst?: (ctx: GenericArgsConstContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgsLifetimes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgsTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgsTypes?: (ctx: GenericArgsTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgsBindings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.genericArgsBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgsBinding?: (ctx: GenericArgsBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.qualifiedPathInExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.qualifiedPathType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedPathType?: (ctx: QualifiedPathTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.qualifiedPathInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePath?: (ctx: TypePathContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typePathSegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePathSegment?: (ctx: TypePathSegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typePathFn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePathFn?: (ctx: TypePathFnContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.typePathInputs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePathInputs?: (ctx: TypePathInputsContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroIdentifierLikeToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroLiteralToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.macroPunctuationToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.shl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShl?: (ctx: ShlContext) => Result;

	/**
	 * Visit a parse tree produced by `RustParser.shr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShr?: (ctx: ShrContext) => Result;
}

