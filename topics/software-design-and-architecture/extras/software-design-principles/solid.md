[Back to Software Design and Development Principles](04-software-design-principles.md)

## SOLID Principles
_SOLID_ is an acronym that stands for five principles of object-oriented software development, which were first introduced by Robert C. Martin in the early 2000s. These principles are:
- [Single Responsibility Principle (SRP)](#Single%20Responsibility%20Principle%20(SRP))
- [Open/Closed Principle (OCP)](#Open/Closed%20Principle%20(OCP))
- [Liskov Substition Principle (LSP)](#Liskov%20Substition%20Principle%20(LSP))
- [Interface Segregation Principle (ISP)](#Interface%20Segregation%20Principle%20(ISP))
- [Dependency Inversion Principle (DIP)](#Dependency%20Inversion%20Principle%20(DIP))
### Single Responsibility Principle (SRP)
The single responsibility principle (SRP) mandates that: `A class should have one, and only one, reason to change.`

When following a SOLID programming approach, recognize that each class only does one thing. Every class or module is responsible for one part of the software’s functionality. More simply, each class should solve only one problem.

The single responsibility principle is a relatively basic one that most developers already use to build code. You can apply it to classes, software components, and microservices.

SRP makes it easier to test and maintain code for streamlined software implementation. It also helps to avoid unanticipated side effects of future changes.

To ensure that you’re following this principle in development, consider using an automated check when building to limit class scope. This check is not foolproof for following the SRP, but goes a long way to ensuring that classes are not violating this principle.
### Open/Closed Principle (OCP)
The open-closed principle recognizes you may need to add or change something to existing, well-tested classes. Any change risks creating problems or bugs. Instead of changing the class, however, you can simply extend it. The open-closed principle states:

“You should be able to extend a class’s behavior without modifying it.”

Following the open-closed principle makes your code easier to maintain and revise. It requires writing code that is:

- Open for extension, meaning you can add to that class’s behavior.
- Closed for modification, meaning that the source code is set and cannot be changed.

At first glance, these two criteria seem to be inherently contradictory. When you become more comfortable with it, you’ll see that the open-closed principle is not as complicated as it seems. You can comply with the open-closed principle using abstractions to make sure that your class is easily extendable without having to modify it. Using inheritance or interfaces that allow polymorphic substitutions is a common way to comply with this principle.
### Liskov Substition Principle (LSP)
The Liskov substitution principle requires that every derived class should be substitutable for its parent class.

> What is wanted here is something like the following substitution
> property: if for each object O1 of type S there is an object O2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when O1 is substituted for O2 then S is a subtype of T.

While this can be a difficult principle to internalize, it might help to think of it as an extension of the open-closed principle. The point of the Liskov substitution principle is to ensure that derived classes extend the base class without changing behavior.
### Interface Segregation Principle (ISP)
The interface segregation principle for SOLID programming states that it is better to have many smaller interfaces than a few bigger ones:

> Make fine grained interfaces that are client-specific. Clients should not be forced to implement interfaces they do not use.

You don’t want to just start with an existing interface and add new methods. Instead, build a new interface. Let your class implement multiple interfaces as needed. When you use smaller interfaces,you can prefer composition over inheritance and decoupling over coupling. According to the interface segregation principle, you should have many client-specific interfaces and avoid the temptation of having one big, general-purpose interface.
### Dependency Inversion Principle (DIP)
Use the dependency inversion principle of SOLID software design to decouple software modules. You should “depend on abstractions, not on concretions” when developing software:

> High level modules should not depend upon low level modules. Both should depend on abstractions…abstractions should not depend on details. Details should depend upon abstractions.

One way of many for complying with this SOLID principle is to use a dependency inversion pattern. Whatever method you use, following the dependency inversion principle will make your code more flexible, agile, and reusable.

The following example satisfies DIP because the High-level module doesn't directly depend on the concrete low-level module (DatabaseService) but on an abstraction.

```Javascript
// Abstraction
class DataRepository {
  save(data) {
    throw new Error('This method should be overridden by subclasses');
  }
}
// Low-level module
class DatabaseService extends DataRepository {
  save(data) {
    // Logic to save data to the database
  }
}
// High-level module
class UserService {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }
  saveUser(user) {
    // Business logic for saving a user
    this.dataRepository.save(user);
  }
}
```
### Available Materials
- [Get Started with SOLID](https://www.bmc.com/blogs/solid-design-principles/)
- [SOLID Principles](https://khalilstemmler.com/articles/tags/solid/)