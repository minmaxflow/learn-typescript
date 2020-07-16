var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// ECMAScript Private Fields #
var Animal = /** @class */ (function () {
    function Animal(theName) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, theName);
    }
    return Animal;
}());
_name = new WeakMap();
// Property '#name' is not accessible outside class 'Animal' because it has a private identifier
// new Animal('Cat').#name;
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
