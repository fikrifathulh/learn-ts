"use strict";
// condition ? exprIfTrue : exprIfFalse
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};
console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
//function example() {
//  return condition1 ? value1
//  : condition2 ? value2
//  : condition3 ? value3
//  : value4;
//}
const grade = (score) => {
    return score >= 90 ? "A"
        : score >= 80 ? "B"
            : score >= 70 ? "C"
                : "fail";
};
console.log(grade(60));
