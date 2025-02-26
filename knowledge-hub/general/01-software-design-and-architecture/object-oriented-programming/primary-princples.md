[Back to Object-oriented programming frontpage](../03-object-oriented-programming.md)

### Primary Principles

There are several primary principles that are considered fundamental to object-oriented programming (OOP). These principles include:

- Inheritance: The ability of a new class to inherit the properties and methods of an existing class, enabling code reuse and allowing for a hierarchical organization of classes.
- Polymorphism: The ability of objects of different classes to be treated as objects of a common parent class, allowing code to be written in a more general and flexible way.
- Abstraction: The process of hiding the implementation details of an object and exposing only its essential features, reducing complexity and improving the modularity of the code.
- Encapsulation: The practice of wrapping an object’s internal data and behavior within a defined interface, and hiding the implementation details from the outside world.
- Classes: The blueprint for creating objects, which have both data (attributes) and behavior (methods).
- Objects: Instances of a class, which have their own unique state and behavior.

##### Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class to inherit the properties and methods of an existing class.

The class that is inherited from is called the parent or super class, while the class that inherits is called the child or sub class. Inheritance enables code reuse and allows for a hierarchical organization of classes, where a child class can inherit the properties and methods of its parent class and potentially add or override them.

The main advantage of inheritance is that it allows for a clean and organized way to reuse code and share functionality among classes.

```Javascript
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
```

##### Polymorphism

##### Abstraction

##### Encapsulation

##### Available Resources

[Principles of Object-Oriented Programming](https://khalilstemmler.com/articles/object-oriented/programming/4-principles/)
