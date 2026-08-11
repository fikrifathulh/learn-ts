"use strict";
function lessThanOp(a, b) {
    return "" + a + " < " + "" + b + " = " + (a < b);
}
function greaterThanOp(a, b) {
    return "" + a + " > " + "" + b + " = " + (a > b);
}
function lessThanOrEqualOp(a, b) {
    return "" + a + " <= " + "" + b + " = " + (a <= b);
}
function greaterThanOrEqualOp(a, b) {
    return "" + a + " >= " + "" + b + " = " + (a >= b);
}
function instanceofOp() {
    const myMap = new Map();
    return "if 'const myMap = new Map();' then"
        + "\n" + "'myMap instanceof Map;' return " + (myMap instanceof Map)
        + "\n" + "'myMap instanceof Object;' return " + (myMap instanceof Object)
        + "\n" + "'myMap instanceof String;' return " + (myMap instanceof String);
}
function inOp() {
    // Arrays
    const trees = ["redwood", "bay", "cedar", "oak", "maple"];
    // Custom objects
    const myCar = { make: "Honda", model: "Accord", year: 1998 };
    return "property with index 4 is in trees array = " + (4 in trees)
        + "\nproperty PI is in built-in Math object = " + ("PI" in Math)
        + "\nproperty model is in myCar object = " + ("model" in myCar);
}
console.log("Less than operator");
console.log(lessThanOp(1, 2));
console.log("");
console.log("Greater than operator");
console.log(greaterThanOp(2, 1));
console.log("");
console.log("Less than or equal operator");
console.log(lessThanOrEqualOp(1, 2));
console.log("");
console.log("Greater than or equal operator");
console.log(greaterThanOrEqualOp(2, 1));
console.log("");
console.log("instanceof operator");
console.log(instanceofOp());
console.log("");
console.log("in operator");
console.log(inOp());
