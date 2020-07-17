// Intersection Types #
// An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

function padLeft(value: string, padding: string | number) {
  // ...
}

// Type Guards and Differentiating Types

// To define a type guard, we simply need to define a function whose return type is a type predicate:

/*
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

// 第二种简便方法
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}

*/

// Type Aliases #
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

type Container<T> = {value: T};

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

// 优先使用interface, 实在搞不定，使用type alias
//  Literal Types

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return 1;
}

// Discriminated Unions #
// 1 Types that have a common, singleton type property — the discriminant.
// 2 A type alias that takes the union of those types — the union.
// 3 Type guards on the common property.
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

// Polymorphic this types #
// A polymorphic this type represents a type that is the subtype of the containing class or interface. This is called F-bounded polymorphism.

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2).multiply(5).add(1).currentValue();

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
  // ... other operations go here ...
}

v = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();

// Index types #

// JS代码
// function pluck(o, propertyNames) {
//   return propertyNames.map((n) => o[n]);
// }

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}
let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014,
};

// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ['model', 'year']);

// First is keyof T, the index type query operator. For any type T, keyof T is the union of known, public property names of T. For example:

let carProps: keyof Car; // the union of ('manufacturer' | 'model' | 'year')

// The second operator is T[K], the indexed access operator. Here, the type syntax reflects the expression syntax. That means that person['name'] has the type Person['name'] — which in our example is just string. However, just like index type queries, you can use T[K] in a generic context, which is where its real power comes to life. You just have to make sure that the type variable K extends keyof T.

{
  function getProperty2<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
  }

  let name: string = getProperty2(taxi, 'manufacturer');
  let year: number = getProperty2(taxi, 'year');
}

// 更多例子

interface Dictionary<T> {
  [key: string]: T;
}
let keys: keyof Dictionary<number>; // string | number, 默认运行 object[42]这种访问方式
let value: Dictionary<number>['foo']; // number

interface Dictionary2<T> {
  [key: number]: T;
}
let keys2: keyof Dictionary2<number>; // number
// let value2: Dictionary2<number>['foo']; // Error, Property 'foo' does not exist on type 'Dictionary<number>'.
let value3: Dictionary2<number>[42]; // number

// Mapped types #
// A common task is to take an existing type and make each of its properties optional:

// Let’s take a look at the simplest mapped type and its parts:

type Keys = 'option1' | 'option2';
type Flags = {[K in Keys]: boolean};
// The syntax resembles the syntax for index signatures with a for .. in inside. There are three parts:

// The type variable K, which gets bound to each property in turn.
// The string literal union Keys, which contains the names of properties to iterate over.
// The resulting type of the property.

// In this simple example, Keys is a hard-coded list of property names and the property type is always boolean, so this mapped type is equivalent to writing:
// type Flags = {
//   option1: boolean;
//   option2: boolean;
// }

// Real applications, however, look like Readonly or Partial above. They’re based on some existing type, and they transform the properties in some way. That’s where keyof and indexed access types come in:

type NullablePerson = {[P in keyof Person]: Person[P] | null};
type PartialPerson = {[P in keyof Person]?: Person[P]};

// But it’s more useful to have a general version.
{
  type Nullable<T> = {[P in keyof T]: T[P] | null};
  type Partial<T> = {[P in keyof T]?: T[P]};
}

{
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type PersonPartial = Partial<Person>;
  type ReadonlyPerson = Readonly<Person>;

  // Use this:
  type PartialWithNewMember<T> = {
    [P in keyof T]?: T[P];
  } & {newMember: boolean};
}
