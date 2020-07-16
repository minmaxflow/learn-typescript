interface LabeldValue {
  label: string;
}

function printLabel(labelObjc: LabeldValue) {
  console.log(labelObjc.label);
}

let myobjc = {
  size: 10,
  label: 'my label',
};

// duck type
printLabel(myobjc);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: 'black'});

// properties readonly
// variable const
interface Point {
  readonly x: number;
  readonly y: number;
}

let ro: ReadonlyArray<number> = [1, 2, 3, 4];

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// 根据变量的类型，推到出函数的参数类型
let mySearch2: SearchFunc;
mySearch2 = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

let digital = createClock(Clock, 12, 17);

// hybrid type
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

{
  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
}
