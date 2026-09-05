"use strict";
const numbers = [10, 20, 30];
const copy = [...numbers]; // Spread expands an iterable into individual elements.
console.log("numbers:");
console.log(numbers);
console.log("copy:");
console.log(copy);
const first = [1, 2];
const second = [...first]; // The ...first part expands the elements of first.
console.log("first:");
console.log(first);
console.log("second:");
console.log(second);
