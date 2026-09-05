const numbers = [10, 20, 30, 40, 50];

// 1. for
console.log("for:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 2. while
console.log("\nwhile:");

let index = 0;

while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}


// 3. do...while
console.log("\ndo...while:");

let count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);


// 4. break
console.log("\nbreak:");

for (const number of numbers) {
    if (number === 30) {
        break;
    }

    console.log(number);
}


// 5. continue
console.log("\ncontinue:");

for (const number of numbers) {
    if (number === 30) {
        continue;
    }

    console.log(number);
}


// 6. for...of
console.log("\nfor...of:");

for (const number of numbers) {
    console.log(number);
}


// 7. for...in
console.log("\nfor...in:");

const user = {
    name: "Alice",
    age: 20,
    language: "TypeScript",
};

for (const key in user) {
    console.log(key);
}


// 8. for...in + property access
console.log("\nfor...in with values:");

for (const key in user) {
    console.log(key, user[key as keyof typeof user]);
}


// 9. for...of with Map
console.log("\nfor...of with Map:");

const users = new Map<number, string>([
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"],
]);

for (const [id, name] of users) {
    console.log(id, name);
}
