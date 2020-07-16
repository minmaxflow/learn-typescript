class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');

// ECMAScript Private Fields #

class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

// Property '#name' is not accessible outside class 'Animal' because it has a private identifier
// new Animal('Cat').#name;

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
