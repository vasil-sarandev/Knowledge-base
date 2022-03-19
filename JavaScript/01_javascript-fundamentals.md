# JavaScript cheatsheet

<a id="top"></a>
# Table of Content

- [JavaScript](#javascript-fundamentals)
    - [Variable declarations](#variable-declarations)
    - [Hoisting](#variable-hoisting)
    - [Closures](#closures)
    - [Promises/async await](#promises)

## <a id="javascript-fundamentals"></a>JavaScript Fundamentals
  ### <a id="variable-declarations"></a>Variable Declarations
  **let** and **const** are **block scoped**, **var** is **function scoped**. All three declarations are **hoisted**.

  ```javascript
    {
      var x = 1
      let y = 1
      const z = 1
    }
    console.log(x) // 1
    console.log(y) // error because `y` has block scope
    console.log(z) // error because `z` has block scope
  ```
  
  ### <a id="variable-hoisting"></a>Variable Hoisting
  Variables defined with let and const are hoisted to the top of the block, but not initialized.  

  Variables defined with var are hoisted to the top of the block, but initialized with a value of undefined.  
  
  ```javascript
      console.log(counter); // ReferenceError: Cannot access 'counter' before initialization
      let counter = 1; 
      
      // 

      console.log(counter); // undefined
      var counter = 1;
  ```

  ### <a id="closures"></a>Closures
  Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
  
  ```javascript
    const Counter = () => {
      let counter = 0;
      increaseCounter = () => {
          return counter += 1;
      };
      return increaseCounter;
    }
    const counter = Counter();
    log(counter()); // 1
    log(counter()); // 2
    log(counter()); // 3
    log(counter()); // 4
  ```

  ### <a id="promises"></a>Promises/async await
  The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. .then() and .catch() can be used to invoke the resolve and reject functions.

  The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  
  ```javascript
    const myFunction = new Promise((resolve, reject) => {
      // The producing code (this may take some time)
      const condition = true

      if(condition) resolve("resolved state")
      else reject("rejected state")
    });
    
  ```