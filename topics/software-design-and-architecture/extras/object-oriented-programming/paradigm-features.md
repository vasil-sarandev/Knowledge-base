[Back to Object-oriented programming frontpage](03-object-oriented-programming.md)

### Paradigm Features

##### Available Resources

[Overview of Object-Oriented paradigm](https://www.tutorialspoint.com/software_architecture_design/object_oriented_paradigm.htm)

#### Introduction

Object-oriented programming (OOP) is a programming paradigm that is based on the concept of “objects,” which are instances of a class. OOP has several key features that distinguish it from other programming paradigms:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Classes
- Objects
- Interfaces
- Dynamic binding
- Message passing

#### Abstract Classes

[Abstract Classes in JavaScript](https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958)

An abstract class is a class in object-oriented programming (OOP) that cannot be instantiated. Instead, it serves as a template or blueprint for other classes to inherit from.

An abstract class can contain both abstract and non-abstract methods (abstract methods are methods that do not have any implementation, they just have a signature).

Abstract classes are used to provide a common interface and implementation for a group of related classes. They are also used to define common behavior that must be implemented by all subclasses. A subclass that inherits from an abstract class is called a concrete class, and it must provide an implementation for all the abstract methods declared in the parent class.

```TypeScript
abstract class Shape {
  name: string;
  constructor(name: string) {
     this.name = name;
  }
  abstract getArea(): number;
}

class Circle extends Shape {
  radius: number;
  constructor(name: string, radius:number){
     super(name);
     this.radius = radius;
  }
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
```

#### Concrete Classes

A concrete class is a class in object-oriented programming (OOP) that can be instantiated, meaning objects can be created from it. A concrete class is a class that provides an implementation for all of the abstract methods declared in its parent class, if it inherits from an abstract class. A concrete class can also be a class that does not inherit from an abstract class, in that case it can have implementation for all of its methods.

Concrete classes are used to provide specific implementation details for a group of related classes that inherit from a common abstract class. They are also used to define unique behavior for a specific class. A concrete class can have its own methods and variables, and can also override the methods of its parent class.

#### Scope Visibility

Scope visibility refers to the accessibility or visibility of variables, functions, and other elements in a program, depending on the context in which they are defined. In object-oriented programming (OOP), scope visibility is controlled through the use of access modifiers, such as “public,” “private,” and “protected.”

- _public_: A public element can be accessed from anywhere in the program, both within the class and outside of it.
- _private_: A private element can only be accessed within the class in which it is defined. It is not accessible to other classes, even if they inherit from the class.
- _protected_: A protected element can only be accessed within the class and its subclasses.

There are variations of scope visibility based on the programming language, but these are the most common.

#### Interfaces

In object-oriented programming (OOP), an interface is a contract or a set of methods that a class must implement. It defines a common set of methods that a class must provide, but it does not provide any implementation details. An interface can include both method signatures and constants.

Interfaces are used to define a common behavior for a group of related classes, and to provide a way for objects of different classes to be treated polymorphically. A class that implements an interface must provide an implementation for all of the methods declared in the interface. A class can implement multiple interfaces, but can only inherit from one base class.
