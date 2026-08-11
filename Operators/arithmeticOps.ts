// left operand + operator + right operand

function exponentiation(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a ** b = " + (a ** b);
}

function multiplication(a: number, b: number): string {
  return"if " +  "a = " + a + " & " + "b = " + b + " then a * b = " + (a * b);
}

function division(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a / b = " + (a / b);
}

function remainder(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a % b = " + (a % b);
}

function addition(a: number, b: number):string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a + b = " + (a + b);
}

function substraction(a: number, b: number):string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a - b = " + (a - b);
}

// left operand + operator + asignment operator + right operand

function exponentiationAssignment(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a **= b = " + (a **= b);
}

function multiplicationAssignment(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a *= b = " + (a *= b);
}

function divisionAssignment(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a /= b = " + (a /= b);
}

function remainderAssignment(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a %= b = " + (a %= b);
}

function additionAssignment(a: number, b: number): string {
  return "if " + "a = " + a + " & " + "b = " + b + " then a += b = " + (a += b);
}

function substractAssignment(a: number, b: number): string {
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
