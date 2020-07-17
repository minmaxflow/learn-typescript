//  Structural typing is a way of relating types based solely on their members.
// The basic rule for TypeScript’s structural type system is that x is compatible with y if y has at least the same members as x.
class Person {
}
let p;
// OK, because of structural typing
p = new Person();
{
    let x;
    // y's inferred type is { name: string; location: string; }
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;
}
// Comparing two functions
{
    let x = (a) => 0;
    let y = (b, s) => 0;
    y = x; // OK
    // x = y; // Error
    let items = [1, 2, 3];
    // Don't force these extra parameters
    items.forEach((item, index, array) => console.log(item));
    // Should be OK!
    items.forEach((item) => console.log(item));
}
{
    let x = () => ({ name: 'Alice' });
    let y = () => ({ name: 'Alice', location: 'Seattle' });
    x = y; // OK
    // y = x; // Error, because x() lacks a location property
}
// Function Parameter Bivariance
// When comparing the types of function parameters, assignment succeeds if either the source parameter is assignable to the target parameter, or vice versa. This is unsound because a caller might end up being given a function that takes a more specialized type, but invokes the function with a less specialized type. In practice, this sort of error is rare, and allowing this enables many common JavaScript patterns.
{
    let EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        /* ... */
    }
    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e) => console.log(e.x + ',' + e.y));
}
// Optional Parameters and Rest Parameters
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
// prefer this
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
//# sourceMappingURL=9-Type-Compatibility.js.map