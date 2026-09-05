"use strict";
// Generic function (static polymorphism)
function swap(a, b) {
    return [b, a];
}
const numbers = swap(1, 2);
console.log(numbers); // [2, 1]
const words = swap("A", "B");
console.log(words); // ["B", "A"]
const u1 = { name: "Alice" };
const u2 = { name: "Bob" };
const users = swap(u1, u2);
console.log(users);
