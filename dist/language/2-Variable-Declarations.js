{
    let tuple = [7, 'hello', true];
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
    let { a, b } = o;
    // assignment without declaration:
    // Notice that we had to surround this statement with parentheses. JavaScript normally parses a { as the start of block.
    ({ a, b } = { a: 'baz', b: 101 });
    // Property renaming
    // let {a: newName1, b: newName2} = o;
    // 手动指定类型
    let { a: newName1, b: newName2 } = o;
    console.log({
        newName1,
        newName2,
    });
}
// Default values
// b? 表示b肯能是未定义的
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
}
function f({ a, b }) {
    // ...
}
//# sourceMappingURL=2-Variable-Declarations.js.map