// Memory Leaks
// A memory leak occurs when objects remain reachable even though the program no longer needs them.
const cache: object[] = []; // Since cache continues to reference every object, none can be garbage-collected.

cache.push({ id: 1 });
cache.push({ id: 2 });

console.log("Cache size:", cache.length);

cache.length = 0; // Release references so the cached objects can become
                  // eligible for garbage collection.
console.log("Cache cleared.");
