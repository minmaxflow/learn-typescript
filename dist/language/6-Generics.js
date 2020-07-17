function identity(arg) {
    return arg;
}
let output = identity('myString'); // type of output will be 'string'
let output2 = identity('myString'); // type of output will be 'string'
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
let myIdentity = identity;
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity2(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity2({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
{
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a'); // okay
    // getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}
// 下面两种写法等价
// 都是要求C有相应的构造方法。
function createWithClass(c) {
    return new c();
}
function createWithClass2(c) {
    return new c();
}
class BeeKeeper {
}
class ZooKeeper {
}
class Animal2 {
}
class Bee extends Animal2 {
}
class Lion extends Animal2 {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
//# sourceMappingURL=6-Generics.js.map