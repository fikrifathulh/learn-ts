### for loop
#### anatomy
```
for (initialization; condition; update) {
    // body
}
```
#### flow
```
initialization
      ↓
  condition ── false ──→ end
      │
    true
      ↓
    body
      ↓
    update
      │
      └──────────────→ condition
```
### while loop
#### anatomy
```
let init = 0;

while (condition) {
    // body (may execute zero times, reason: pre-test loop)
}
```
#### flow
```
initialization
      ↓
  condition ── false ──→ end
      │
    true
      ↓
    body
      ↓
    update
      │
      └──────────────→ condition
```
### do...while loop
#### anatomy
```
let init = 0;

do {
    // body (always executes at least once, reason: post-test loop)
} while (condition);
```
#### flow
```
initialization
      ↓
  condition ── false ──→ body ──→ end
      │
    true
      ↓
    body
      ↓
    update
      │
      └──────────────→ condition
```
### break
#### anatomy
```
for (initialization; condition; update) {
    if (condition) {
        break;
    }
    ....
}
```
#### flow
```
initialization
      ↓
  condition ── false ──→ end
      │
     true
      ↓
    body
      │
  if condition ── true ──→ break ──→ end
      │
    false
      ↓
    body
      ↓
    update
      │
      └──────────────→ condition
```
### continue
#### anatomy
```
for (initialization; condition; update) {
    if (condition) {
        continue;
    }
    ....
}
```
#### flow
```
initialization
      ↓
  condition ── false ──→ end
      │
     true
      ↓
    body
      │
  if condition ── false ──→ end
      │
    true
      ↓
   continue
      ↓
    body
      ↓
    update
      │
      └──────────────→ condition
```
### for...of
#### anatomy
```
const iterable = [...];

for (const item of iterable) {
    // body
}
```
#### flow
```
   iterable initialization
              ↓
  get iterator from iterable ── failed (has no Symbol.iterator) ──→ THROW TypeError: "not iterable" ──→ end
              │
succeded (has Symbol.iterator)
              ↓
   call .next() on iterator ── return done: true ──→ end
              │
     return done: false
              ↓
Extract .value Assign to loop variable
              ↓
            body
              │
              └──────────────→ call.next() on iterator
```
### for...in
#### anatomy
```
const object = {
    name: "Apple",
    quantity: 8,
    ...
};

for (const enumerableKeys in object) {
    // body
}
```
#### flow
```
        object initialization
                  ↓
      get keys from object ── failed (has no Object.property) ──→ THROW TypeError: "not iterable" ──→ end
                  │
    succeded (has Object.property)
                  ↓
create internal list of all keys (as strings)
                  ↓
  start at first key in the list
                  │
  assign the current key to loop variable
                  ↓ 
                body
                  ↓
    check if there is more key in the list ── no more key ──→ end
                  │
        yes there is more key
                  │
                  └──────────────→ move to next key in the list
```
