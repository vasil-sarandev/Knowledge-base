[Back to Object-oriented programming](03-object-oriented-programming.md)

## Primary Principles


There are several primary principles that are considered fundamental to object-oriented programming (OOP). These principles include:

- Inheritance: The ability of a new class to inherit the properties and methods of an existing class, enabling code reuse and allowing for a hierarchical organization of classes.
- Polymorphism: The ability of objects of different classes to be treated as objects of a common parent class, allowing code to be written in a more general and flexible way.
- Abstraction: The process of hiding the implementation details of an object and exposing only its essential features, reducing complexity and improving the modularity of the code.
- Encapsulation: The practice of wrapping an object’s internal data and behavior within a defined interface, and hiding the implementation details from the outside world.
- Classes: The blueprint for creating objects, which have both data (attributes) and behavior (methods).
- Objects: Instances of a class, which have their own unique state and behavior.

### Inheritance

[Inheritance (Object-oriented programming)](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>)

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

### Polymorphism

[Polymorphism](https://www.geeksforgeeks.org/polymorphism-in-javascript/)

Polymorphism is a concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common parent class. This is achieved by defining a common interface for all classes that need to be treated polymorphically. The word polymorphism is derived from Greek, “poly” means many and “morph” means form.

There are two types of polymorphism:

- Compile-time polymorphism (also called static polymorphism or early binding) occurs when the type of the object that is going to be acted upon is determined at compile-time. This is achieved through method overloading, which allows multiple methods to have the same name but different parameters within the same class.
- Run-time polymorphism (also called dynamic polymorphism or late binding) occurs when the type of the object is determined at run-time. This is achieved through method overriding, which allows a child class to provide a specific implementation of a method that is already defined in its parent class.

```Javascript
class Animal {
  speak = () => {
    console.log('animal speaks');
  }
}
class Dog extends Animal {
  speak = () => {
    console.log('dog barks);
  }
}
class Cat extends Animal {
  speak = () => {
    console.log('cat meows');
  }
}
new Cat().speak(); // cat meows
new Dog().speak(); // dog barks
// this is an example of polymorphism in javascript with
// method overriding. Each subclass implements its own speak method
// so objects of type Dog and Cat are instances of Animal but have
// their own implementations of "speak".
//
// When cat.speak() is called
// the subclass's method is invoked which is a run-time decision.
```

### Abstraction

Abstraction is a concept in object-oriented programming (OOP) that refers to the process of hiding the implementation details of an object and exposing only its essential features. It enables the use of objects without the need to understand the underlying complexity of their internal structure and behavior.

There are two types of abstraction:

- Data abstraction: refers to hiding the internal representation of data and providing a simplified view of the data through a set of well-defined interfaces.
- Behavioral abstraction: refers to hiding the internal behavior of an object and providing a simplified view of its capabilities through a set of well-defined interfaces.

### Encapsulation

[Encapsulation in Computer Programming](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>)

Encapsulation is a concept in object-oriented programming (OOP) that refers to the practice of wrapping an object’s internal data and behavior within a defined interface, and hiding the implementation details from the outside world. It is one of the fundamental concepts of OOP and is closely related to the concepts of data hiding and information hiding.

Encapsulation is achieved by using access modifiers (such as “public,” “private,” and “protected”) to control the visibility and accessibility of an object’s data and methods. For example, data members of a class can be declared as private, which means they can only be accessed by methods within the class, while methods can be declared as public, which means they can be called by any code that has a reference to the object.
