"use strict";
// left operand + operator + right operand
function exponentiation(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a ** b = " + (a ** b);
}
function multiplication(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a * b = " + (a * b);
}
function division(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a / b = " + (a / b);
}
function remainder(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a % b = " + (a % b);
}
function addition(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a + b = " + (a + b);
}
function substraction(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a - b = " + (a - b);
}
// left operand + operator + asignment operator + right operand
function exponentiationAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a **= b = " + (a **= b);
}
function multiplicationAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a *= b = " + (a *= b);
}
function divisionAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a /= b = " + (a /= b);
}
function remainderAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a %= b = " + (a %= b);
}
function additionAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a += b = " + (a += b);
}
function substractAssignment(a, b) {
    return "if " + "a = " + a + " & " + "b = " + b + " then a -= b = " + (a -= b);
}
console.log("Exponentiation Operator");
console.log(exponentiation(2, 2));
console.log("");
console.log("Multiplication Operator");
console.log(multiplication(2, 2));
console.log("");
console.log("Division Operator");
console.log(division(2, 2));
console.log("");
console.log("Remainder Operator");
console.log(remainder(5, 2));
console.log("");
console.log("Addition Operator");
console.log(addition(2, 2));
console.log("");
console.log("Substraction Operator");
console.log(substraction(3, 2));
console.log("");
console.log("Exponentiation Assignment");
console.log(exponentiation(2, 2));
console.log("");
console.log("Multiplication Assignment");
console.log(multiplication(2, 2));
console.log("");
console.log("Division Assignment");
console.log(division(2, 2));
console.log("");
console.log("Remainder Assignment");
console.log(remainder(5, 2));
console.log("");
console.log("Addition Assignment");
console.log(addition(2, 2));
console.log("");
console.log("Substraction Assignment");
console.log(substraction(3, 2));
