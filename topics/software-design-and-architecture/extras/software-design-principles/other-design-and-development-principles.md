[Back to Software Design and Development Principles](04-software-design-principles.md)
## Other Software Design and Development Principles

### Encapsulate What Varies

- [What does it mean when one says “Encapsulate what varies”?](https://softwareengineering.stackexchange.com/questions/337413/what-does-it-mean-when-one-says-encapsulate-what-varies)
- [Overview of Encapsulate What Varies](https://bootcamp.uxdesign.cc/software-design-principles-every-developers-should-know-23d24735518e)

`Encapsulate what varies` is a programming principle that suggests that code should be organized in such a way that the parts that are likely to change in the future are isolated from the parts that are unlikely to change. This is accomplished by creating interfaces and classes that separate the varying parts of the code from the stable parts.

Encapsulating what varies allows for more flexibility in the code. When changes are needed, they can be made to the encapsulated parts without affecting the rest of the code. This makes it easier to understand, test, and maintain the code.
### Program against Abstractions

[Overview of Abstraction principle](<https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)>)

Programming against abstractions is a programming principle that suggests that code should be written in such a way that it is not tied to specific implementations, but rather to abstractions. This is accomplished by defining interfaces or abstract classes that define the behavior of a group of related classes without specifying their implementation.

Programming against abstractions allows for more flexibility in the code. When changes are needed, they can be made to the implementation of the abstractions without affecting the code that uses them. This makes it easier to understand, test, and maintain the code.
### Hollywood Principle

The Hollywood Principle is a software development principle that states: “Don’t call us, we’ll call you.” It suggests that high-level components should dictate the flow of control in an application, rather than low-level components.

This principle is often used in the context of inversion of control (IoC) and dependency injection. In traditional software development, low-level components are responsible for creating and managing the high-level components that they depend on. With IoC, the high-level components dictate the flow of control, and the low-level components are created and managed by a separate mechanism.
