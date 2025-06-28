# NodeJS Cheatsheet

#cheatsheet 

---
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

---
## Setting up a Node TS project

These days the way to go about this is: use *Typescript* and its compiler to build the code for distribution. Use a typescript runtime environment for development (*tsx* / *ts-node*).

[DigitalOcean: Setting up a Node Project with TS](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)

Here's a [nicely setup Node-Typescript boilerplate repo](https://github.com/jsynowiec/node-typescript-boilerplate/tree/main).

**sample package.json commands**

```json
{
	"scripts": {
		"dev": "tsx watch src/app.ts --env-file=.env",
		"build": "tsc",
		"start": "node dist/app.js",
		"test": "echo \"No tests yet\""
	}
};
```

---
## Asynchronous Work
### Concurrency 

Concurrency in NodeJS refers to the event loop's capacity to execute multiple I/O operations at the same time, even though JavaScript itself is single threaded.

This is achieved by using a **non-blocking I/O model** with the **libuv** library under the hood.

### Blocking vs Non-Blocking

> "I/O" refers primarily to interaction with the system's disk and network supported by [libuv](https://libuv.org/).

**Blocking** is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a **blocking** operation is occurring.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are **non-blocking**, and accept callback functions. Some methods also have **blocking** counterparts, which have names that end with `Sync`.


```typescript
import fs from 'node:fs';
// blocking
const data = fs.readFileSync('/file.md'); // blocks here until file is read
// non-blocking
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```

### Event Loop

The Event Loop is what enables Node.js to perform non-blocking I/O operations (such as database reads, file system access, and HTTP requests) — even though JavaScript itself runs on a single thread. It does this by offloading I/O operations to the system kernel or a worker thread pool whenever possible.

#### How the Event Loop Works (Simplified)

1. A request or event is received (e.g., an incoming HTTP request).
2. If the operation is asynchronous, it’s registered and dispatched to `libuv`.
3. For eligible operations, `libuv` delegates them either to the system kernel (if they are natively non-blocking) or to its internal thread pool.
4. Once the operation completes, a callback is pushed to the Event Queue (also called the Callback Queue).
5. The Event Loop continuously checks the queue and, when the call stack is clear, pushes callbacks onto it for execution.

### Asynchronous Control Flow

At its core, JavaScript is designed to be non-blocking on the "main" thread, this is where views are rendered. You can imagine the importance of this in the browser. When the main thread becomes blocked it results in the infamous "freezing" that end users dread, and no other events can be dispatched resulting in the loss of data acquisition, for example.

This creates some unique constraints that only a functional style of programming can cure. This is where Promises(and callbacks) come in to the picture.

### NodeJS Event Emitter

Much of what the JavaScript code in browser reacts to is user events.

On the backend side, Node.js offers us the option to build a similar system using the *events module* (node:events). 

It's typically used in low-level modules and NodeJS Core APIs - `http.Server`, `fs.ReadStream`, `net.Socket` all extend the `EventEmitter` class.

```javascript
import EventEmitter from ('node:events');

const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {...});
eventEmitter.emit('start');
```

---
## Cluster and Worker Threads

Node.js runs JavaScript on a single thread by default, but to leverage multiple CPU cores and perform parallel processing, Node.js provides:

- **Cluster module** — for scaling across multiple processes.
- **Worker Threads** — for parallelism within the same process.

### When to Use What?

The **Cluster** module allows you to create multiple Node.js processes (workers) that share the same server port. This is useful to take advantage of multi-core systems and improve throughput.

**Worker Threads** enable running JavaScript code in parallel threads inside the same Node.js process. They share memory via `SharedArrayBuffer` but have isolated event loops. Use worker threads for CPU-intensive tasks that would block the main event loop.

---
## Manipulating Files

### File Stats

Every file comes with a set of details that we can inspect using Node.js. In particular, using the `stat()` method provided by the `fs` module.

```javascript
import fs from 'node:fs/promises';

const stats = await fs.stat('/my_test_file');
```

### File Paths

Every file in the system has a path.  You need to pay attention when using paths in your applications, as this difference between how Linux and MacOS and Windows represent filepaths must be taken into account.

```javascript
import path from 'node:path';

const notes = '/users/joe/notes.txt';
path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

// path.join() - used to join two or more paths
path.join('/', 'users', 'joe', 'notes.txt'); // '/users/joe/notes.txt'

// path.resolve() - used to get the absolute path calculation of a relative path 
path.resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder

// path.normalize() - used to try to normalize / calculate the actual path
path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'
```

### File Descriptors

Before you're able to interact with a file that sits in your filesystem, you must get a file descriptor.

A file descriptor is a reference to an open file, a number (fd) returned by opening the file using the `open()` method offered by the `fs` module. This number (`fd`) uniquely identifies an open file in operating system and allows us to read/write to it without reopening it each time.

```javascript
import fs from 'node:fs';

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  // fd is our file descriptor
});
```

You are however unlikely to work with those directly unless you're dealing with low-level file manipulation, because most of the `fs` module methods abstract them away. (`fs.readFile`, `fs.writeFile`, ...)

### File Streams

A stream is an abstract interface for working with streaming data in Node.js. The `node:stream` module provides an API for implementing the stream interface. Streams are instances of `EventEmitter`.

Node.js provides several built-in stream objects — for example, `fs.createReadStream()`, `fs.createWriteStream()`, process.stdout`, or HTTP request/response objects.

**`pipeline()`** is a utility from the `stream` module that **composes multiple streams** into a chain. It automatically handles **backpressure**, **errors**, and **cleanup**, making it safer and more readable than chaining `.pipe()` manually.

#### Types of Streams

- **Readable** – for reading data (e.g., `fs.createReadStream()`).
- **Writable** – for writing data (e.g., `fs.createWriteStream()`).
- **Duplex** – both readable and writable (e.g., `net.Socket`).
- **Transform** – a duplex stream that can modify data (e.g., `zlib.createGzip()`).

#### **Example – Gzip a file**

```javascript
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

await pipeline(
  createReadStream('archive.tar'),
  createGzip(),
  createWriteStream('archive.tar.gz')
);
```

### Reading Files

The simplest way to read a file in Node.js is to use the `fs.readFile()` method. Alternatively - use `fs.createReadStream()` for big files.

```Javascript
import fs from 'node:fs/promises';

const data = await fs.readFile('myFile.txt', 'utf8');
// or the synchronous version (if you've got a respectable reason to use it)
const data = fs.readFileSync('myFile.txt', 'utf8');

// use for large files because fs.readFile keeps the full contents of the file in memory.
const readStream = fs.createReadStream('myFile.txt', {encoding: 'utf8'});
```

**Note:** If an encoding is not specified, the `fs.readFile` and `fs.createReadStream` APIs return a `Buffer` (binary data). To get a string from a `Buffer`, use `buffer.toString('utf8')`.

### Writing Files

The easiest way to write to files in Node.js is to use the `fs.writeFile()` API. Alternatively - use `fs.createWriteStream()` for big files.

```javascript
const fs = require('node:fs/promises');

const example = async () => {
	const content = 'Some content!';
    await fs.writeFile('/Users/joe/test.txt', content);
}
example();

// or you can use the synchronous version if you've got a respectable reason
fs.writeFileSync('/Users/joe/test.txt', content);

// use for big files so not all the contents are stored in memory 
const writeStream = fs.createWriteStream('/Users/joe/test.txt');
await pipeline(myReadStream, writeStream);
```

--- 
## Buffers and Binary Data Handling

Buffers are NodeJS's way of handling raw binary data. They are instances of the global `Buffer` class and provide a way to work with streams, file I/O, and network protocols that deal with binary data.

### Common Buffer Methods

- `buffer.toString([encoding])` — Converts buffer to string (default encoding is 'utf8')
- `Buffer.from(string, [encoding])` — Creates a new buffer from a string
- `buffer.length` — Returns the size of the buffer in bytes

### Example

Reading a file as a buffer and converting it to string

```javascript
import fs from 'node:fs/promises';

const data = await fs.readFile('file.bin'); // returns a Buffer
console.log(data); // <Buffer 48 65 6c 6c 6f ...>
console.log(data.toString('utf8')); // Converts buffer to string
```

---
## Setting an ENV file for Node Application

Since Node v20, NodeJS provides a way to natively handle environment files.

`node --env-file=.env app.js`

## Reading input from the command line

NodeJS provides the `readline`module that lets you get input from a readable stream such as the `process.stdin` stream, which during the execution of a Node.js program is the terminal input, one line at a time.

```javascript
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
```


## Layered Architecture in NodeJS

Keeps concerns separated, improves testability and maintainability.

- **Controller**: Handles HTTP requests, calls services, sends responses.
- **Service**: Contains business logic, coordinates data and operations.
- **Repository**: Handles database access and raw queries.

## Project Structure

```
my-system
├─ apps (components)
│  ├─ orders  
   │  ├─ entry-points
   │  │  ├─ api # controller comes here
   │  │  ├─ message-queue # message consumer comes here
   │  ├─ domain # features and flows: DTO, services, logic
   │  ├─ data-access # DB calls w/o ORM
│  ├─ users
│  ├─ payments
├─ libraries (generic cross-component functionality)
│  ├─ logger
│  ├─ authenticator
```


## Testing Node Applications

Since Node v21, Node includes a robust and flexible built-in test runner.

Alternatives are:

- [Vitest](https://vitest.dev/guide/)
- [Jest](https://jestjs.io/)

