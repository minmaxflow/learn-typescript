function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('myString'); // type of output will be 'string'

let output2 = identity('myString'); // type of output will be 'string'

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

interface GenericIdentityFn {
  <T>(arg: T): T;
}

interface GenericIdentityFn2<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn = identity;

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// Generic Constraints
// If you remember from an earlier example, you may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have.

// To do so, we’ll create an interface that describes our constraint. Here, we’ll create an interface that has a single .length property and then we’ll use this interface and the extends keyword to denote our constraint:

interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity2({length: 10, value: 3});

// Using Type Parameters in Generic Constraints
{
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = {a: 1, b: 2, c: 3, d: 4};

  getProperty(x, 'a'); // okay
  // getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}

// Using Class Types in Generics

// 下面两种写法等价
// 都是要求C有相应的构造方法。
function createWithClass<T>(c: {new (): T}): T {
  return new c();
}

function createWithClass2<T>(c: new () => T): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal2 {
  numLegs: number;
}

class Bee extends Animal2 {
  keeper: BeeKeeper;
}

class Lion extends Animal2 {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal2>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
