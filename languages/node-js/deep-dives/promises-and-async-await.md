# Promises, callbacks and async/await

#deep-dive

A **Promise** is a special object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Essentially, a Promise is a placeholder for a value that is not yet available but will be in the future.

---

## Creating Promises using the Promise constructor

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

---
## async/await

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

---