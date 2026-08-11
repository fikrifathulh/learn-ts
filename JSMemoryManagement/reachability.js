// Memory Lifecycle
// Allocate -> Use -> Release
// Allocate
const numbers = [1, 2, 3] // JS Engine allocates enough memory for the array
// Use
numbers.push(4) // Memory is actively referenced
// Release
numbers = null // The original object has no remaining references.
               // When nothing can access the object anymore, it becomes garbage.
               // Eventually, the garbage collector reclaims its memory.

// Reachability
// An object is reachable if it can be accessed from a root.
// Typical roots include:
// Global variables, Variables in active function calls, Closures, Internal engine references
let user = {
    name: "Alice",
    scores: [90, 85, 100]
};

const anotherReference = user;

console.log(anotherReference.name);

user = null;

console.log(anotherReference.name); // Object is still reachable through anotherReference

// Closures and Memory
// Closures extend object lifetimes by keeping referenced variables reachable.
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
// Even after createCounter() returns, count remains alive because the returned function still references it.

// Weak References
// JavaScript provides weak collections that do not keep objects alive.
const weakMap = new WeakMap<object, string>();

let session = {};

weakMap.set(session, "Logged In");

console.log(weakMap.has(session)); // true

session = null; // The object associated with `session` is now eligible for
                // garbage collection. The corresponding WeakMap entry may be
                // removed automatically by the engine at some later time.
