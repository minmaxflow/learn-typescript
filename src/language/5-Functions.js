// We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.
function add(a, b) {
    return a + b;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
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
var result3 = buildName('Bob', 'Adams'); // ah, just right
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
// buildName2 和  buildName3 类型相同
// default params
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
}
// this is any
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
// 函数：多种返回类型
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == 'object') {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
