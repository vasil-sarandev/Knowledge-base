[Back to Common Algorithms](03-common-algorithms.md)
## Recursion algorithms

Recursion is defined as **a method of solving problems that involves breaking a problem down into smaller and smaller sub problems until you get to a small enough problem that it can be solved trivially**. 

### Tail recursion

Tail recursion is a special kind of recursion where the recursive call is the very last thing in the function. It’s a function that does not do anything at all after recursing.

[Tail recursion discussion - Quora](https://www.quora.com/What-is-tail-recursion-Why-is-it-so-bad)

### Non-tail recursion

Tail recursion is when a function can directly return the result of a recursive call - there are no outstanding operations, and there is no need for the call stack frame to be preserved. So it can be translated to a “goto with arguments”, and the stack usage will be constant.

In “non-tail recursion”, there are outstanding operations after the recursive call, and the stack frame cannot be nuked.

### Tail and Non-tail recursion example

```JAVASCRIPT
// Tail Recursion
return factorial( currentNumber - 1, currentNumber * previousMultiplication ) 

// Non-tail Recursion
return n * factorial ( n - 1 )
```

*Tail recursion* is considered better because it can be optimized by the compiler.

