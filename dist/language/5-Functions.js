// We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.
function add(a, b) {
    return a + b;
}
let myAdd = function (x, y) {
    return x + y;
};
let myAdd2 = function (x, y) {
    return x + y;
};
// Inferring the types
//  两边有一边的类型，自动推到另外一边的类型
// typeScript compiler can figure out the type even if you only have types on one side of the equation:
// In TypeScript, every parameter is assumed to be required by the function
// In JavaScript, every parameter is optional, and users may leave them off as they see fit.
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// let result1 = buildName('Bob'); // error, too few parameters
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
let result3 = buildName('Bob', 'Adams'); // ah, just right
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
// buildName2 和  buildName3 类型相同
// default params
function buildName3(firstName, lastName = 'Smith') {
    return firstName + ' ' + lastName;
}
// this is any
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
let deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
//# sourceMappingURL=5-Functions.js.map