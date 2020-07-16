function printLabel(labelObjc) {
    console.log(labelObjc.label);
}
let myobjc = {
    size: 10,
    label: 'my label',
};
// duck type
printLabel(myobjc);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
let ro = [1, 2, 3, 4];
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
// 根据变量的类型，推到出函数的参数类型
let mySearch2;
mySearch2 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
let digital = createClock(Clock, 12, 17);
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
{
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
//# sourceMappingURL=3-Interfaces.js.map