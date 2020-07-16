var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');
// ECMAScript Private Fields #
class Animal {
    constructor(theName) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, theName);
    }
}
_name = new WeakMap();
// Property '#name' is not accessible outside class 'Animal' because it has a private identifier
// new Animal('Cat').#name;
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
//# sourceMappingURL=4-Classes.js.map