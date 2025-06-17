# NodeJS Cheatsheet

## Event Loop

The Event Loop is what enables Node.js to perform non-blocking I/O operations (such as database reads, file system access, and HTTP requests) — even though JavaScript itself runs on a single thread. It does this by offloading I/O operations to the system kernel or a worker thread pool whenever possible.

### How the Event Loop Works (Simplified)

1. A request or event is received (e.g., an incoming HTTP request).
2. If the operation is asynchronous, it’s registered and dispatched to `libuv`.
3. For eligible operations, `libuv` delegates them either to the system kernel (if they are natively non-blocking) or to its internal thread pool.
4. Once the operation completes, a callback is pushed to the Event Queue (also called the Callback Queue).
5. The Event Loop continuously checks the queue and, when the call stack is clear, pushes callbacks onto it for execution.

---

### libuv and the System Kernel

`libuv` is a C++ library that powers Node.js's Event Loop and provides a consistent, cross-platform asynchronous I/O API. It uses a hybrid model:

- For **natively non-blocking operations** (such as most network I/O), `libuv` uses the OS’s event notification mechanisms (e.g., `epoll`, `kqueue`, or `IOCP`). These do **not** require additional threads — `libuv` simply registers interest in events and responds when the kernel notifies it.  
- For **blocking or non-asynchronous system calls** (such as file system access, certain DNS lookups, or cryptographic operations), `libuv` delegates work to a **fixed-size thread pool**. This prevents blocking the main thread while still allowing asynchronous APIs in user code.

This architecture allows Node.js to efficiently handle a large number of concurrent operations, despite running JavaScript in a single-threaded environment.

### Event Loop Phases and Microtasks

```
[current operation]
  ↓
process.nextTick() queue
  ↓
microtasks queue (Resolved Promises - Promise.then(), queueMicrotask)
  ↓
Event Loop Phases:
  - Timers (setTimeout, setInterval)
  - Pending Callbacks (some system level I/O callbacks - DNS Lookup, TCP, ...)
  - Idle, Prepare (internal)
  - Poll (retrieve and execute I/O related callbacks)
  - Check (setImmediate callbacks are invoked here)
  - Close Callbacks (e.g socket.close())
  ↓
Repeat
```

## Module Systems

NodeJS supports both CommonJS (which is built into Node) and ES Modules (which are now the JS standard).

```JAVASCRIPT
// CommonJS - file 1
module.exports.add = (a,b) => a+b
// CommonJS - file 2
const {add} = require('./file1');
```

```JAVASCRIPT
// ES Modules - file 1
export const add = (a,b) => a+b;
// ES Modules - file 2
import {add} from './file1';
```

## Setting up a Node TS project

These days the way to go about this is: use *Typescript* and its compiler to build the code for distribution. Use a typescript runtime environment for development (*tsx* / *ts-node*).

Here's a [nicely setup Node-Typescript boilerplate repo](https://github.com/jsynowiec/node-typescript-boilerplate/tree/main).

## Asynchronous Work

### Concurrency 

Concurrency in NodeJS refers to the event loop's capacity to execute multiple I/O operations at the same time, even though JavaScript itself is single threaded.

This is achieved by using a **non-blocking I/O model** with the **libuv** library under the hood.

### Blocking vs Non-Blocking

> "I/O" refers primarily to interaction with the system's disk and network supported by [libuv](https://libuv.org/).

**Blocking** is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a **blocking** operation is occurring.

In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as **blocking**. Synchronous methods in the Node.js standard library that use libuv are the most commonly used **blocking** operations. Native modules may also have **blocking** methods.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are **non-blocking**, and accept callback functions. Some methods also have **blocking** counterparts, which have names that end with `Sync`.

**Comparison**

```typescript
import fs from 'node:fs';
// blocking
const data = fs.readFileSync('/file.md'); // blocks here until file is read
// non-blocking
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```

### Asynchronous Control Flow

At its core, JavaScript is designed to be non-blocking on the "main" thread, this is where views are rendered. You can imagine the importance of this in the browser. When the main thread becomes blocked it results in the infamous "freezing" that end users dread, and no other events can be dispatched resulting in the loss of data acquisition, for example.

This creates some unique constraints that only a functional style of programming can cure. This is where Promises(and callbacks) come in to the picture.

### Promises, callbacks and async/await

A **Promise** is a special object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Essentially, a Promise is a placeholder for a value that is not yet available but will be in the future.

**Creating Promises using the Promise constructor**

```typescript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Something went wrong.');
  }
});
```

**async/await**

One of the best ways to work with Promises in modern JavaScript is using **async/await**. This allows you to write asynchronous code that looks synchronous, making it much easier to read and maintain and avoids callback hell.

**async/await** is syntactic sugar for Promises.

- `async` is used to define a function that returns a Promise.
- `await` is used inside an `async` function to pause execution until a Promise settles.

```typescript
import fs from 'node:fs/promises';

const readFile = async () => {
  try {
    const data = await fs.readFile('example.txt', 'utf8'); // pauses execution here until the Promise settles.
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
```

### Scheduling Tasks in the Event Loop

In addition to Promises, Node.js provides several other mechanisms for scheduling tasks in the event loop.

#### `process.nextTick()`

`process.nextTick()` is used to schedule a callback to be executed immediately after the current operation completes. 

This is useful for situations where you want to ensure that a callback is executed as soon as possible, but still after the current execution context.

```javascript
process.nextTick(() => {
  console.log('Next tick callback');
});
console.log('Synchronous task executed');
```

#### `queueMicroTask()`

`queueMicrotask()` is used to schedule a microtask, which is a lightweight task that runs after the currently executing script but before any other I/O events or timers. 

Microtasks include tasks like Promise resolutions and other asynchronous operations that are prioritized over regular tasks.

```javascript
queueMicrotask(() => {
  console.log('Microtask is executed');
});
console.log('Synchronous task is executed');
// "Microtask is executed" will be logged after "Synchronous task is executed," but before any I/O operations like timers.
```

#### `setImmediate()`

`setImmediate()` is used to execute a callback after the current event loop cycle finishes and all I/O events have been processed. This means that `setImmediate()` callbacks run after any I/O callbacks, but before timers.

```javascript
setImmediate(() => {
  console.log('Immediate callback');
});
console.log('Synchronous task executed');
```

#### When to use each?

- Use `process.nextTick()` for tasks that should execute before any I/O events, often useful for deferring operations or handling errors synchronously.
- Use `queueMicrotask()` for tasks that need to run immediately after the current script and before any I/O or timer callbacks, typically for Promise resolutions.
- Use `setImmediate()` for tasks that should run after I/O events but before timers.

