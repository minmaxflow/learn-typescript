{
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a, b, c] = tuple; // a: number, b: string, c: boolean
}

{
  let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
  };
  // let {a, b} = o;
  // 手动指定类型
  let {a, b}: {a: string; b: number} = o;
  // assignment without declaration:
  // Notice that we had to surround this statement with parentheses. JavaScript normally parses a { as the start of block.
  ({a, b} = {a: 'baz', b: 101});

  // Property renaming
  // let {a: newName1, b: newName2} = o;
  // 手动指定类型
  let {a: newName1, b: newName2}: {a: string; b: number} = o;
  console.log({
    newName1,
    newName2,
  });
}

// Default values
// b? 表示b肯能是未定义的
function keepWholeObject(wholeObject: {a: string; b?: number}) {
  let {a, b = 1001} = wholeObject;
}

type C = {a: string; b?: number};
function f({a, b}: C): void {
  // ...
}
