// Generic function (static polymorphism)
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const numbers = swap(1, 2);
console.log(numbers);             // [2, 1]

const words = swap("A", "B");
console.log(words);               // ["B", "A"]

interface User {
    name: string;
}

const u1: User = { name: "Alice" };
const u2: User = { name: "Bob" };

const users = swap(u1, u2);
console.log(users);
