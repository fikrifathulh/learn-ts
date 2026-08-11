const values = [42, "JavaScript", new Date(), [1, 2, 3], null];

for (const v of values) {
    console.log("Value:", v);
    console.log("typeof:", typeof v);
    console.log(
        "toString:",
        Object.prototype.toString.call(v)
    );
    console.log("---");
}

console.log("typeof limitation: the return type of typeof [], {}, and null is a long-standing historical bug in JavaScript.")
