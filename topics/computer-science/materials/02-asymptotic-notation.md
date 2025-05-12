[Back to Computer Science frontpage](topics/computer-science/computer-science.md)

# Asymptotic Notation

The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.

An algorithm may not have the same performance for different types of inputs. With the increase in the input size, the performance will change.

The study of change in performance of the algorithm with the change in the order of the input size is defined as asymptotic analysis.

## Big O Notation

The Big O notation can be used to describe how the running time of an algorithm scales with the growth of the input size, ignoring implementation details such as programming language and computer speed. 

Specifically, it denotes the upper bound(worst case) of the growth rate of a function that relates the running time of an algorithm to its input size. It can be used to compare algorithms and determine which one is better.

## Big Omega Notation

The Big Omega notation is similar to the Big O notation. The only difference is that it denotes the lower bound on the growth rate of a function.

## Big Theta Notation

If a function has the same Big O and Big Omega, they also become the function’s Big Theta. Big Theta is used to describe the exact growth rate of a function. It is denoted by the symbol Θ.

## Common Runtimes

### Constant time algorithms - O(1)

Constant time algorithms are the simplest and most efficient algorithms. They are algorithms that always take the same amount of time to run, regardless of the size of the input. This is the best case scenario for an algorithm, and is the goal of all algorithms.

### Logarithmic time algorithms - O(log n)

Logarithmic complexity algorithms are the second fastest algorithms. They are faster than linear algorithms, but slower than constant algorithms.

### Linear time algorithms - O(n)

Linear algorithms are algorithms that have a runtime that is directly proportional to the size of the input. This means that the runtime of the algorithm will increase linearly with the size of the input. 

For example, if the input size is 10, the runtime will be 10 times the runtime of the algorithm when the input size is 1. If the input size is 100, the runtime will be 100 times the runtime of the algorithm when the input size is 1.

### Polynomial time algorithms - O(n^2)

Polynomial algorithms are algorithms that have a runtime that is a polynomial function of the input size. This means that the runtime is a function of the form `n^k` where `k` is a constant. For example, the runtime of the following algorithm is `n^2`:

```PYTHON
def polynomial_algorithm(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
```

### Exponential time algorithms - O(2^n)

Exponential algorithms are those that grow at a rate of 2^n. This means that for each additional input, the algorithm will take twice as long to run.

### Factorial time algorithms - O(n^n)

Factorial complexity algorithms have a runtime of `O(n!)`. This is the worst case scenario for an algorithm. Factorial complexity algorithms are very inefficient and should be avoided.

An example of a Factorial time complexity algorithm is generating the permutations of an array. There's basically no way to avoid having an `O(n^n)` time complexity there because we need to loop through each variant.

## Big O Cheat Sheet

[This](https://www.bigocheatsheet.com/) is a great cheat sheet on Big O Notations for Data Structures & Algorithms.

## Available Resources

- [Berkeley Lecture 19: Asymptotic Analysis](https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98)
- [Big O Notation | Brilliant Math & Science Wiki](https://brilliant.org/wiki/big-o-notation/)
- [Asymptotic Analysis: Big-O Notation and More](https://www.programiz.com/dsa/asymptotic-notations)