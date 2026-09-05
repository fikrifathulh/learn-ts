//The comma operator evaluates its operands left-to-right and returns the value of the rightmost operand,
//but TypeScript reports TS2695 when an earlier operand is a side-effect-free expression whose value is discarded.

//const result = (10, 20, 30);
//
//console.log(result); // All three expressions are evaluated, but the overall expression has the value 30.

let x = 0;

const xResult = (
    x++,
    x++, // The first two expressions have side effects.
    x
);

console.log(xResult); // 2

const result = (
    console.log("first"),
    console.log("second"),
    100
);

console.log(result); // The console.log() calls have side effects,
                     // while the final 100 supplies the value of the entire comma expression.
