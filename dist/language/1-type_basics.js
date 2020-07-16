let isDone = false;
let decimal = 42;
let color = 'blue';
let list = [1, 2, 3];
let list2 = [1, 2, 3];
// tuple
let x = ['', 1];
x[0];
x[1];
// x[2]; // error
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c = Color.Red;
let colorName = Color[1];
console.log(colorName); // Green
// any
let notSure = 4;
notSure = 'not sure';
notSure = false;
// The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
// You might expect Object to play a similar role, as it does in other languages. However, variables of type Object only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:
notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list3 = [1, true, 'free'];
// void type
function warn() {
    console.warn();
}
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
let n = null;
/*
However, when using the --strictNullChecks flag, null and undefined are only assignable to any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.

*/
// never type
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error('Something failed');
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error
/*
Type assertions
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
let someValue = 'this is a string';
let strLength = someValue.length;
//# sourceMappingURL=1-type_basics.js.map