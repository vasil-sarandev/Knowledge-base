[Back to Software Design and Architecture](topics/software-design-and-architecture/index.md)

# Programming paradigms

##### Available Resources

- [Overview of Programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm)

## Introduction

A programming paradigm is a fundamental style or approach to solving problems using a programming language. Different programming paradigms provide different ways of organizing and structuring code, and have different strengths and weaknesses. Some of the most common programming paradigms include:

- Imperative programming
  - Object-oriented programming
  - Procedural programming
  - Structured programming
- Declarative programming
  - Logic programming
  - Functional programming

## Imperative Programming

In computer science, imperative programming is a programming paradigm of software that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform. Imperative programming focuses on describing how a program operates step by step (generally order of the steps being determined in source code by the placement of statements one below the other), rather than on high-level descriptions of its expected results.

The term is often used in contrast to declarative programming, which focuses on what the program should accomplish without specifying all the details of how the program should achieve the result.

### Object-Oriented programming

Object-oriented programming (OOP) is a programming paradigm that is based on the concept of “objects”, which are instances of classes. OOP is a way of organizing and structuring code that is based on the principles of encapsulation, inheritance, and polymorphism.

Encapsulation refers to the idea that an object’s internal state should be hidden and accessible only through its methods. This allows the object to control how its data is used and prevents external code from making invalid changes to the object’s state.

[Overview of Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

### Structured programming

Structured programming is a programming paradigm that emphasizes the use of structured control flow constructs, such as loops and conditional statements, to organize code into logical, easy-to-understand blocks.

It is a way of writing computer programs that emphasizes the use of procedures and functions, as well as data structures, to organize code and make it easier to understand, debug, and maintain.The main idea behind structured programming is to break down a program into smaller, manageable pieces that can be easily understood, tested, and modified.

This approach is opposed to the use of “goto” statements, which are considered to be unstructured and can lead to difficult-to-read and difficult-to-maintain code.

### Procedural programming

Procedural programming is a programming paradigm, classified as imperative programming, that involves implementing the behavior of a computer program as procedures (a.k.a. functions, subroutines) that call each other. The resulting program is a series of steps that forms a hierarchy of calls to its constituent procedures.

The first major procedural programming languages appeared c. 1957–1964, including Fortran, ALGOL, COBOL, PL/I and BASIC. Pascal and C were published c. 1970–1972.

## Declarative programming

In computer science, declarative programming is a programming paradigm—a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.

Many languages that apply this style attempt to minimize or eliminate side effects by describing what the program must accomplish in terms of the problem domain, rather than describing how to accomplish it as a sequence of the programming language primitives (the how being left up to the language's implementation). This is in contrast with imperative programming, which implements algorithms in explicit steps.

Declarative programming often considers programs as theories of a formal logic, and computations as deductions in that logic space. Declarative programming may greatly simplify writing parallel programs.

Common declarative languages include those of database query languages (e.g., SQL, XQuery), regular expressions, logic programming (e.g. Prolog, Datalog, answer set programming), functional programming, configuration management, and algebraic modeling systems.

```Javascript
const arr = [1,2,3,4,5];
// declarative - describes the outcome rather than doing it step by step.
const doubled = array.map(x => x*2);
// imperative
for(let i = 0; i<arr.length; i++>) {
    let curr = arr[i];
    arr[i] = curr * 2;
}
```

### Functional programming

Functional programming is a programming paradigm that emphasizes the use of pure functions and immutable data. It is a way of writing computer programs that emphasizes the use of functions and mathematical concepts, such as recursion, rather than using objects and classes like in object-oriented programming.

In functional programming, functions are first-class citizens, which means they can be passed as arguments to other functions and returned as values.

Functional programming encourages immutability, which means that once a variable is assigned a value, it cannot be changed. This can simplify code, as it eliminates the need for state management and the bugs that can come with it.
