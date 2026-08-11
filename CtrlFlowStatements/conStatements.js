"use strict";
function cStatements() {
    //if (condition) {
    //  statement1;
    //} else {
    //  statement2;
    //}
    const age = 20;
    console.log("Conditional statement if");
    if (age >= 20) {
        console.log(`age = ${age}, adult`);
    }
    const temp = 15;
    console.log("Conditional statement if-else");
    if (temp >= 20) {
        console.log(`temp = ${temp}, the temperature is warm`);
    }
    else {
        console.log(`temp = ${temp}, the temperature is cold`);
    }
    const score = 87;
    console.log("Conditional statement else if");
    if (score >= 90) {
        console.log(`${score} >= 90, A`);
    }
    else if (score >= 80) {
        console.log(`${score} >= 80, B`);
    }
    else if (score >= 70) {
        console.log(`${score} >= 70, C`);
    }
    else {
        console.log("Fail");
    }
    //if (condition1) {
    // statement1;
    //} else if (condition2) {
    // statement2;
    //} else if (conditionN) {
    // statementN;
    //} else {
    // statementLast;
    //}
    const day = 3;
    console.log("Conditional statement switch");
    switch (day) {
        case 1:
            console.log(`day = ${day}, monday`);
            break;
        case 2:
            console.log(`day = ${day}, tuesday`);
            break;
        case 3:
            console.log(`day = ${day}, wednesday`);
            break;
        default:
            console.log("unknown day");
    }
}
cStatements();
