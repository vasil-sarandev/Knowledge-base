# Common Questions for Technical Interviews

<a id="top"></a>

##### Table of contents

- [Explain how `this` works in javascript](#this-keyword)
- [Explain ES Modules, CommonJS and AMD](#modules-imports)
- [How do you define IIFEs and why would you use them?](#iife)
- [Explain the difference between Native and Host objects](#native-host)
- [What's the difference between `.call` and `.apply`?](#call-apply)
- [Explain `Function.prototype.bind`](#bind)
- [What's the difference between feature detection and feature inference](#feature-detection-inference)
- [Explain Ajax in as much detail as possible.](#ajax)
- [Explain how JSONP works (and how it's not really Ajax).](#jsonp)
- [Explain Event Bubbling and Event Delegation](#event-bubbling-delegation)
- [What's the difference between an "attribute" and a "property"](#attribute-property)
- [Difference between document `load` event and document `DOMContentLoaded` event?](#load-dom)
- [What is the difference between `==` and `===`?](#equality)
- [Explain the difference between synchronous and asynchronous functions](#sync-async)
- [What is event loop? What is the difference between call stack and task queue?](#event-loop)

  ### <a id="this-keyword"></a>Explain how `this` works in javascript

  There's no simple explanation for `this`. It is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called.

  [Back to top](#top)

  ### <a id="modules-imports"></a>ES Modules vs CommonJS vs AMD

  ES modules are the standard for JavaScript, while CommonJS is the default in Node.js

  ```javascript
  module.exports = {}; //commonJS
  export default {}; //ES Modules
  ```

  [Back to top](#top)

  ### <a id="iife"></a>How do you define IIFEs and why would you use them?

  IIFEs can be used to to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope.

  ```javascript
    ((function ()) {
      //write your js code here
    })();
  ```

  [Back to top](#top)

  ### <a id="native-host"></a>Explain the difference between Native and Host objects

  Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as `String`, `Math`, `RegExp`, `Object`, `Function`, etc.

  Host objects are provided by the runtime environment (browser or Node), such as `window`, `XMLHTTPRequest`, etc.

  [Back to top](#top)

  ### <a id="call-apply"></a>What's the difference between `.call` and `.apply`?

  Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.

  ```javascript
  function add(a, b) {
    return a + b;
  }

  console.log(add.call(null, 1, 2)); // 3
  console.log(add.apply(null, [1, 2])); // 3
  ```

  [Back to top](#top)

  ### <a id="bind"></a>Explain `Function.prototype.bind`?

  The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

  [Back to top](#top)

  ### <a id="feature-detection-inference"></a>What's the difference between feature detection, feature inference?

  **Feature Detection**

  Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. For example:

  ```javascript
  if ("geolocation" in navigator) {
    // Can use navigator.geolocation
  } else {
    // Handle lack of feature
  }
  ```

  **Feature Inference**

  Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:

  ```javascript
  if (document.getElementsByTagName) {
    element = document.getElementById(id);
  }
  ```

  [Back to top](#top)

  ### <a id="ajax"></a>Explain Ajax in as much detail as possible.

  Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly use JSON instead of XML, due to the advantages of JSON being native to JavaScript.

  The `XMLHttpRequest` API is frequently used for the asynchronous communication or these days, the `fetch` API.

  [Back to top](#top)

  ### <a id="jsonp"></a>Explain how JSONP works (and how it's not really Ajax).

  JSONP (JSON with Padding) is a method commonly used to bypass the cross-domain policies in web browsers because Ajax requests from the current page to a cross-origin domain is not allowed.

  JSONP works by making a request to a cross-origin domain via a `<script>` tag and usually with a callback query parameter, for example: `https://example.com?callback=printData`. The server will then wrap the data within a function called printData and return it to the client.

  [Back to top](#top)

  ### <a id="event-bubbling-delegation"></a>Explain Event Bubbling and Event Delegation

  When an event triggers on a DOM element, it will attempt to handle the event if there is a listener attached, then the event is bubbled up to its parent and the same thing happens. This bubbling occurs up the element's ancestors all the way to the `document`.
  Event bubbling is the mechanism behind Event Delegation. It for example allows you to assign a listener only to an `<ul>` and and not to each individual `<li>`

  [Back to top](#top)

  ### <a id="attribute-property"></a>What's the difference between an "attribute" and a "property"?

  Attributes are defined on the HTML markup but properties are defined on the DOM.

  ```javascript
  const input = document.querySelector("input");
  console.log(input.getAttribute("value")); // Hello
  console.log(input.value); // Hello
  // change value by adding "world"
  console.log(input.getAttribute("value")); // Hello
  console.log(input.value); // Hello world
  ```

  [Back to top](#top)

  ### <a id="load-dom"></a>Difference between document load event and document DOMContentLoaded event?

  The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

  window's `load` event is only fired after the DOM and all dependent resources and assets have loaded.

  [Back to top](#top)

  ### <a id="equality"></a>What is the difference between `==` and `===`?

  `==` is the abstract equality operator while `===` is the strict equality operator. The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do type conversion, so if two values are not the same type `===` will simply return false. When using `==`, funky things can happen, such as:

  ```javascript
  1 == "1"; // true
  1 == [1]; // true
  1 == true; // true
  0 == ""; // true
  0 == "0"; // true
  0 == false; // true
  ```

  [Back to top](#top)

  ### <a id="sync-async"></a>Explain the difference between synchronous and asynchronous functions.

  Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

  Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

  [Back to top](#top)

  ### <a id="event-loop"></a>What is event loop? What is the difference between call stack and task queue?

  The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

  [Back to top](#top)
