function printLabel(labelObjc) {
    console.log(labelObjc.label);
}
var myobjc = {
    size: 10,
    label: 'my label'
};
// duck type
printLabel(myobjc);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var ro = [1, 2, 3, 4];
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 根据变量的类型，推到出函数的参数类型
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digital = createClock(Clock, 12, 17);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
{
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
