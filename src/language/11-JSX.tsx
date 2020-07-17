// In order to use JSX you must do two things.
// 1 Name your files with a .tsx extension
// 2 Enable the jsx option

// TypeScript ships with three JSX modes: preserve, react, and react-native. These modes only affect the emit stage - type checking is unaffected. The preserve mode will keep the JSX as part of the output to be further consumed by another transform step (e.g. Babel). Additionally the output will have a .jsx file extension. The react mode will emit React.createElement, does not need to go through a JSX transformation before use, and the output will have a .js file extension. The react-native mode is the equivalent of preserve in that it keeps all JSX, but the output will instead have a .js file extension.

// You can specify this mode using either the --jsx command line flag or the corresponding option in your tsconfig.json file.

// *Note: You can specify the JSX factory function to use when targeting react JSX emit with --jsxFactory option (defaults to React.createElement)

// The as operator

// var foo = <foo>bar; 不要使用
// var foo = bar as foo; 使用 as

/*

Type Checking #

In order to understand type checking with JSX, you must first understand the difference between intrinsic elements and value-based elements. Given a JSX expression <expr />, expr may either refer to something intrinsic to the environment (e.g. a div or span in a DOM environment) or to a custom component that you’ve created. This is important for two reasons:

For React, intrinsic elements are emitted as strings (React.createElement("div")), whereas a component you’ve created is not (React.createElement(MyComponent)).
The types of the attributes being passed in the JSX element should be looked up differently. Intrinsic element attributes should be known intrinsically whereas components will likely want to specify their own set of attributes.
TypeScript uses the same convention that React does for distinguishing between these. An intrinsic element always begins with a lowercase letter, and a value-based element always begins with an uppercase letter.

Intrinsic elements #

*/

/*

/// <reference path="..." /> #
The /// <reference path="..." /> directive is the most common of this group. It serves as a declaration of dependency between files.

Triple-slash references instruct the compiler to include additional files in the compilation process.

*/
