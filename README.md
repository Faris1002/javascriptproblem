# javascriptproblem

# JAVASCRIPT-CODING QUESTIONS

## 1️⃣ Deep Merge Objects

**Problem**

You are given two JavaScript objects that may contain **nested objects** as values.

Your task is to **deeply merge** these objects into a new object.

This means the merge should not be shallow — nested objects must also be merged correctly instead of being overwritten entirely.

This problem tests:

- Recursive logic
- Object traversal
- Understanding of immutability

**Rules**

- If a key exists in both objects:
    - If both values are objects → merge them recursively
    - Otherwise → the value from the second object overrides the first
- The original objects must not be mutated

**Example Input**

```jsx
obj1 = {a:1,b: {x:2,y:3 } }
obj2 = {b: {y:99 },c:4 }

```

**Example Output**

```jsx
{a:1,b: {x:2,y:99 },c:4 }

```

---

## 2️⃣ Custom `Promise.all` Implementation

**Problem**

Implement a function `promiseAll(promises)` that behaves exactly like JavaScript’s built-in `Promise.all`.

This problem checks:

- Promise handling
- Error propagation
- Maintaining execution order

**Rules**

- Accepts an array of promises
- Resolves with an array of resolved values **in the same order**
- Rejects immediately if **any promise rejects**
- Should work with non-promise values as well

**Example Input**

```jsx
promiseAll([
Promise.resolve(1),
Promise.resolve(2),
Promise.resolve(3)
])

```

**Example Output**

```jsx
[1,2,3]

```

---

## 3️⃣ Rate Limiter Using Closures

**Problem**

Create a rate-limited version of a function that ensures it can only be executed **once within a specified time window**.

This is commonly used in:

- API throttling
- Button click prevention
- Scroll and resize event optimization

This problem tests:

- Closures
- Timer management
- Function execution control

**Example Input**

```jsx
const limitedFn =rateLimiter(fn,1000)
limitedFn()
limitedFn()

```

**Expected Behavior**

```jsx
// fn executes only once within 1 second

```

---

## 4️⃣ Class-Based Cache with Expiry (TTL)

**Problem**

Design a cache system using a JavaScript class that supports **time-based expiration** of stored values.

This problem tests:

- Class design
- Time management
- Real-world caching strategies

**Requirements**

- `set(key, value, ttl)` → stores the value with an expiration time
- `get(key)` → returns the value only if it has not expired
- Expired values should not be returned

**Example Input**

```jsx
cache.set("a",10,1000)
cache.get("a")

```

**Example Output**

```jsx
10

```

---

## 5️⃣ Async Sequential Execution

**Problem**

You are given an array of asynchronous functions.

Your task is to execute them **sequentially**, ensuring each function starts only after the previous one finishes.

This problem tests:

- Async control flow
- Promise chaining
- Avoiding parallel execution

**Example Input**

```jsx
runSequential([fn1, fn2, fn3])

```

**Example Output**

```jsx
[res1, res2, res3]

```

---

## 6️⃣ Immutable Update of Nested Object

**Problem**

Update a deeply nested value inside an object **without mutating the original object**.

This problem is critical for:

- React state updates
- Redux reducers
- Functional programming patterns

**Rules**

- Original object must remain unchanged
- Only the specified path should be updated
- A new object should be returned

**Example Input**

```jsx
update(obj, ["user","profile","age"],30)

```

**Expected Output**

```jsx
// returns new object with updated age

```

---

## 7️⃣ Infinite Currying Function

**Problem**

Create a function that supports **infinite currying**, accumulating values until it is finally invoked with no arguments.

This problem tests:

- Closures
- Function chaining
- Argument handling

**Example Input**

```jsx
sum(1)(2)(3)()

```

**Example Output**

```jsx
6

```

---

## 8️⃣ Async Retry Mechanism

**Problem**

Implement a retry mechanism for an asynchronous function that may fail intermittently.

This problem tests:

- Error handling
- Retry logic
- Resilient async design

**Rules**

- Retry the async function up to `N` times
- Resolve immediately if it succeeds
- Reject only after all retries fail

**Example Input**

```jsx
retry(fetchData,3)

```

**Expected Behavior**

```jsx
// resolves data or throws error after 3 failures

```

---

## 9️⃣ Custom Event Emitter

**Problem**

Build a lightweight event emitter system similar to Node.js `EventEmitter`.

This problem tests:

- Class design
- `this` context
- Publish-subscribe patterns

**Requirements**

- `on(event, fn)` → subscribe
- `emit(event, data)` → notify listeners
- `off(event, fn)` → unsubscribe

**Example Input**

```jsx
emitter.on("data",console.log)
emitter.emit("data",10)

```

**Example Output**

```jsx
10

```

---

## 🔟 Async String Processing Pipeline

**Problem**

Create an asynchronous string processing pipeline where each transformation returns a Promise.

This simulates real-world async workflows like:

- Data sanitization
- API preprocessing

**Steps**

1. Trim the string
2. Convert to uppercase
3. Reverse the string

**Example Input**

```jsx
process(" hello ")

```

**Example Output**

```jsx
"OLLEH"

```

---

## 1️⃣1️⃣ Promise Timeout Wrapper

**Problem**

Wrap an existing promise so that it automatically **rejects if it takes longer than a specified timeout**.

This problem tests:

- Promise racing
- Timeout handling
- Defensive async programming

**Example Input**

```jsx
withTimeout(fetchData(),2000)

```

**Expected Output**

```jsx
// resolves data or throws "Timeout"

```

---

## 1️⃣2️⃣ Async Execution Order

**Problem**

Analyze the execution order of synchronous code, microtasks, and macrotasks.

This problem tests:

- Event loop understanding
- Promise vs `setTimeout` behavior

**Code**

```jsx
console.log(1)

Promise.resolve().then(() =>console.log(2))

setTimeout(() =>console.log(3))

console.log(4)

```

**Expected Output**

```jsx
1
4
2
3

```

---

## 1️⃣3️⃣ Debounce Function Using Closures

**Problem**

Implement a `debounce` function that delays execution until after a specified delay has passed since the last invocation.

This is widely used in:

- Search inputs
- Window resize events

**Rules**

- Only the last call should execute
- Previous timers must be cleared

**Example Input**

```jsx
const debouncedFn =debounce(fn,500)
debouncedFn()
debouncedFn()
debouncedFn()

```

**Expected Behavior**

```jsx
// fn executes only once after 500ms

```

---

## 1️⃣4️⃣ Async Task Queue (Concurrency = 1)

**Problem**

Create a task queue that ensures asynchronous tasks are executed **one at a time**, regardless of how fast they are added.

This problem tests:

- Queue management
- Async flow control

**Example Input**

```jsx
queue.add(task1)
queue.add(task2)
queue.add(task3)

```

**Example Output**

```jsx
task1 completed
task2 completed
task3 completed

```

---

## 1️⃣5️⃣ Immutable Array Grouping

**Problem**

Group an array of objects by a specified key while ensuring the original array remains unchanged.

This problem tests:

- Array manipulation
- Object grouping
- Immutability

**Example Input**

```jsx
groupBy(
  [
    {type:"fruit",name:"apple" },
    {type:"vegetable",name:"carrot" },
    {type:"fruit",name:"banana" }
  ],
"type"
)

```

**Example Output**

```jsx
{
fruit: [
    {type:"fruit",name:"apple" },
    {type:"fruit",name:"banana" }
  ],
vegetable: [
    {type:"vegetable",name:"carrot" }
  ]
}

```
