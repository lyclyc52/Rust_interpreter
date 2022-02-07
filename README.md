X-slang is a reference implementation of a simple calculator language
conforming to the `<language>-slang` API accepted by the Source academy frontend. 
X-slang internally uses antlr4ts to automatically generate a parser and can serve as
a starting point for students to build their own Source-academy compatible language
implementations.

Usage
=====

To build,

``` {.}
$ git clone https://<url>/x-slang.git
$ cd x-slang
$ yarn
$ yarn build
```

To add \"x-slang\" to your PATH, build it as per the above
instructions, then run

``` {.}
$ cd dist
$ npm link
```

If you do not wish to add \"x-slang\" to your PATH, replace
\"x-slang\" with \"node dist/repl/repl.js\" in the following examples.

To try out *Source* in a REPL, run

``` {.}
$ x-slang '1 * 1'
```

Hint: In `bash` you can take the `PROGRAM_STRING` out
of a file as follows:

``` {.}
$ x-slang "$(< my_source_program.js)"
```

Getting Started
===========================================

As a starting point, we recommend that students start by looking at the following files of interest:

1. The grammar for the calculator language is defined in [src/lang/calc.g4](./src/lang/Calc.g4) as an ANTLR Grammar, and the other files in `./src/lang/` are generated from this file using the `antlr4ts` rule (i.e `yarn run antlr4ts`) defined in [./package.json](./package.json):

```js
// file: package.json
{
  // ...
  "scripts": {
    // ...
    "antlr4ts": "antlr4ts -visitor ./src/lang/Calc.g4"
  }
  // ...
}
```
Students can find a collection of ANTLR grammars of popular languages online at [grammars-v4](https://github.com/antlr/grammars-v4)


As the focus of this course is not in parsing, we recommend reusing or adapting one of these grammars (or something similar you can find online) for your project.


2. The [src/parser/parser.ts](./src/parser/parser.ts) module then imports and invokes the ANTLR4 generated parser (see line 240):

```typescript
    const inputStream = new ANTLRInputStream(source)
    const lexer = new CalcLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    ...
    const tree = parser.expression()
    ...
```
  As the ANTLR generated AST, being machine generated, tends to be rather human-unfriendly, we then map the ANTLR parse tree into a simplified AST for further processing using the auto-generated ANTLR visitor classes to traverse the ast:
  
  ```typescript
  // Subclassing the ANTLR-generated visitor
  class ExpressionGenerator implements CalcVisitor<es.Expression> {
  ...
  }
  
  
  function convertExpression(expression: ExpressionContext): es.Expression {
    const generator = new ExpressionGenerator()
    return expression.accept(generator)
  }
  ```
  
 For simplicity, in this initial implementation we just map to the `es.Expression` type provided by the [esTree library](https://hexdocs.pm/estree/ESTree.html) to represent the AST of javascript programs, but depending on the language, students may need to define their own ASTs from scratch - in such cases, we recommend looking at the definition of the ESTree AST as a reference, as this will make integrating with the Source Academy API easier.

3. Having parsed the AST, the evaluation is handled in [src/interpreter/interpreter.ts](./src/interpreter/interpreter.ts), and type checking is done in [src/typeChecker/typeChecker.ts](./src/typeChecker/typeChecker.ts).

Once you have the parser and evaluator working, you can try out your implementation using the repl described in the previous section.

When you are happy with your implementation, only then we recommend connecting the language-backend (`x-slang`) with the frontend (`x-frontend`), and for this, see the next section:

Using your x-slang in local Source Academy
===========================================

A common issue when developing modifications to x-slang is how to test
it using your own local frontend. Assume that you have built your own
x-frontend locally, here is how you can make it use your own
x-slang, instead of the one that the Source Academy team has deployed
to npm.

First, build and link your local x-slang:
``` {.}
$ cd x-slang
$ yarn build
$ yarn link
```
Then, from your local copy of x-frontend:
``` {.}
$ cd x-frontend
$ yarn link "x-slang"
```

Then start the frontend and the new x-slang will be used. 
