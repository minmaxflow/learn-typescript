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
//# sourceMappingURL=type_basics.js.map