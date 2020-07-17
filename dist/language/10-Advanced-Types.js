// Intersection Types #
// An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.
function extend(first, second) {
    const result = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
function padLeft(value, padding) {
    // ...
}
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
class UIElement {
    animate(dx, dy, easing) {
        if (easing === 'ease-in') {
            // ...
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}
function rollDice() {
    return 1;
}
function area(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * Math.pow(s.radius, 2);
    }
}
// Polymorphic this types #
// A polymorphic this type represents a type that is the subtype of the containing class or interface. This is called F-bounded polymorphism.
class BasicCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
let v = new BasicCalculator(2).multiply(5).add(1).currentValue();
class ScientificCalculator extends BasicCalculator {
    constructor(value = 0) {
        super(value);
    }
    sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}
v = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
//# sourceMappingURL=10-Advanced-Types.js.map