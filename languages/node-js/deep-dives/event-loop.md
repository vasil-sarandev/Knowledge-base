# JavaScript (NodeJS) Event Loop

#deep-dive

The Event Loop is what allows NodeJS to perform non-blocking I/O operations(database reads, file reads, requests) — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.

---
## Visualization

![[nodejs-event-loop.png]]


The Event Loop is what enables Node.js to perform non-blocking I/O operations (such as database reads, file system access, and HTTP requests) — even though JavaScript itself runs on a single thread. It does this by offloading I/O operations to the system kernel or a worker thread pool whenever possible.

---

## How the Event Loop Works (Simplified)

1. A request or event is received (e.g., an incoming HTTP request).
2. If the operation is asynchronous, it’s registered and dispatched to `libuv`.
3. For eligible operations, `libuv` delegates them either to the system kernel (if they are natively non-blocking) or to its internal thread pool.
4. Once the operation completes, a callback is pushed to the Event Queue (also called the Callback Queue).
5. The Event Loop continuously checks the queue and, when the call stack is clear, pushes callbacks onto it for execution.

---

## libuv and the System Kernel

`libuv` is a C++ library that powers Node.js's Event Loop and provides a consistent, cross-platform asynchronous I/O API. It uses a hybrid model:

- For **natively non-blocking operations** (such as most network I/O), `libuv` uses the OS’s event notification mechanisms (e.g., `epoll`, `kqueue`, or `IOCP`). These do **not** require additional threads — `libuv` simply registers interest in events and responds when the kernel notifies it.  
- For **blocking or non-asynchronous system calls** (such as file system access, certain DNS lookups, or cryptographic operations), `libuv` delegates work to a **fixed-size thread pool**. This prevents blocking the main thread while still allowing asynchronous APIs in user code.

This architecture allows Node.js to efficiently handle a large number of concurrent operations, despite running JavaScript in a single-threaded environment.

---
## Event Loop Phases and Microtasks

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

---
## Scheduling Tasks in the Event Loop

In addition to Promises, Node.js provides several other mechanisms for scheduling tasks in the event loop.

### `process.nextTick()`

`process.nextTick()` is used to schedule a callback to be executed immediately after the current operation completes. 

This is useful for situations where you want to ensure that a callback is executed as soon as possible, but still after the current execution context.

```javascript
process.nextTick(() => {
  console.log('Next tick callback');
});
console.log('Synchronous task executed');
```

### `queueMicroTask()`

`queueMicrotask()` is used to schedule a microtask, which is a lightweight task that runs after the currently executing script but before any other I/O events or timers. 

Microtasks include tasks like Promise resolutions and other asynchronous operations that are prioritized over regular tasks.

```javascript
queueMicrotask(() => {
  console.log('Microtask is executed');
});
console.log('Synchronous task is executed');
// "Microtask is executed" will be logged after "Synchronous task is executed," but before any I/O operations like timers.
```

### `setImmediate()`

`setImmediate()` is used to execute a callback after the current event loop cycle finishes and all I/O events have been processed. This means that `setImmediate()` callbacks run after any I/O callbacks, but before timers.

```javascript
setImmediate(() => {
  console.log('Immediate callback');
});
console.log('Synchronous task executed');
```

### When to use each?

- Use `process.nextTick()` for tasks that should execute before any I/O events, often useful for deferring operations or handling errors synchronously.
- Use `queueMicrotask()` for tasks that need to run immediately after the current script and before any I/O or timer callbacks, typically for Promise resolutions.
- Use `setImmediate()` for tasks that should run after I/O events but before timers.
