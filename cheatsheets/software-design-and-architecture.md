# Software Design and Architecture

## Programming Paradigms

[In-depth notes](02-programming-paradigms.md)

A programming paradigm is a fundamental style or approach to solving problems using a programming language.

Different programming paradigms provide different ways of organizing and structuring code, and have different strengths and weaknesses. Some of the most common programming paradigms include:

- **Imperative programming** - In computer science, imperative programming is a programming paradigm of software that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform.
  - **Object-oriented programming**
  - **Procedural programming**
  - **Structured programming**
- **Declarative programming** - In computer science, declarative programming is a programming paradigm—a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.
  - **Functional programming**
  - **Logic programming**

## Object-Oriented Programming

[In-depth notes](03-object-oriented-programming.md)

OOP is a programming paradigm that is based on the concept of “objects,” which are instances of a class.

In OOP, a class is a blueprint for creating objects, which have both data (attributes) and behavior (methods). The main idea behind OOP is to model real-world objects and their interactions, making it well-suited for creating complex and large-scale software systems.

**OOP Primary Principles**

There are several primary principles that are considered fundamental to object-oriented programming (OOP). These principles include:

- **Inheritance**
- **Polymorphism**
- **Abstraction**
- **Encapsulation**
- **Classes**
- **Objects**

**OOP Key Features**

Several key features distinguish OOP from other programming paradigms. These include Inheritance, Polymorphism, Abstraction, Encapsulation, Classes, Objects and some other features:

- Abstract Classes
- Concrete Classes
- Scope Visibility
- Interfaces

## Software Design Principles

[In-depth notes](04-software-design-principles.md)

There are many software design principles that aim to guide the development of software in a way that makes it easy to understand, maintain, and extend. Some of the most common design principles include:

- SOLID
- Composition over Inheritance
- Program against Abstractions
- Encapsulate what varies
- DRY (Don't Repeat Yourself)
- YAGNI (You Ain’t Gonna Need It)
- KISS (Keep It Simple, Stupid)
- Hollywood Principle

## Software Design Patterns

[In-depth notes](04-software-design-principles.md)

Software Design Patterns are general solutions to common problems that arise in software development. They provide a way to describe and communicate proven solutions to common design problems and they provide a common vocabulary for design. 

They are not specific to any particular programming language or technology, but rather describe the problem and the solution in a way that can be applied to many different contexts.

There are several different types of design patterns, including:

- **Creational Design Patterns** - These are the design patterns that deal with the creation of an object.
	- *Singleton*
	- *Factory*
	- *Abstract Factory*
	- *Builder*
	- *Prototype*
- **Structural Design Patterns** - Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
	- *Adapter*
	- *Composite*
	- *Proxy*
	- *Flyweight*
	- *Facade*
	- *Bridge*
	- *Decorator*
- **Behavioral Design Patterns** - This type of design patterns provide solution for the better interaction between objects, how to provide lose coupling, and flexibility to extend easily in future.
	- *Template Method*
	- *Mediator*
	- *Chain of Responsibility*
	- *Observer*
	- *Strategy*
	- *Command*
	- *State*
	- *Visitor*
	- *Interpreter*
	- *Iterator*
	- *Memento*

## Architectural Principles

[In-depth notes](06-architectural-principles.md)

Architectural principles refer to a set of guidelines or rules that are used to guide the design and development of a software architecture. These principles are intended to ensure that the resulting architecture is maintainable, scalable, and easy to understand and modify. 

Some of the key Software Architectural Principles include:

- **High cohesion**
- **Low coupling**
- **Separation of concerns**
- **Interface-based design**
- **Modularity**
- **Interoperability**
- **Reusability**
- **Testability**

## Architectural Styles

[In-depth notes](07-architectural-styles.md)

Architectural styles in software refer to the overall design and organization of a software system, and the principles and patterns that are used to guide the design. These styles provide a general framework for the design of a system, and can be used to ensure that the system is well-structured, maintainable, and scalable.

**Structural Architectural Styles**

Structural architecture in software refers to the organization and design of the components of a software system, and how they interact with each other. It deals with the physical organization of the system, and the relationships between the different components.

- **Monolithic**
- **Service-Oriented**
- **Layered**
- **Microservices**
- **Component-based**
- **Event-driven**
- **Domain-Driven**
- **Client-Server**
- **Peer-to-Peer**

**Distributed Architecture**

Distributed systems refer to the design and organization of software components that are distributed across multiple devices or locations, connected via a network, and work together to achieve a common goal.

 - **Microservices**
 - **Event-driven architecture**
 - **Client-Server**
 - **Peer-to-Peer**

**Messaging**

Messaging is a key concept in several architectural styles, including:

- **Microservices**
- **Event-driven architecture (EDA)**
- **Message-driven architecture (MDA)**

**Publish-subscribe pattern**

The publish-subscribe pattern is a messaging pattern in which a publisher sends a message to a topic, and any number of subscribers can subscribe to that topic to receive the message. The publish-subscribe pattern is also known as the “observer pattern” and is a way of implementing communication between different parts of an application in a decoupled way.

**Event-Driven Architecture (EDA)**

Event-driven architecture (EDA) is a software design pattern in which the system reacts to specific events that occur, rather than being continuously polled for changes. In EDA, events are messages that are sent asynchronously between components, and the components react to the events they are interested in.

## Architectural Patterns

[In-depth notes](08-architectural-patterns.md)

Architectural patterns are a set of solutions that have been proven to work well for specific types of software systems. They provide a common vocabulary and set of best practices for designing and building software systems, and can help developers make better design decisions. Some common architectural patterns include:

- **Model-View-Controller (MVC)**
- **Microservices**
- **Event-Driven**
- **Layered**
- **Pipe-and-Filter**
- **Command-Query Responsibility Segregation (CQRS)**
- **Blackboard**
- **Microkernel**
- **Serverless**
- **Message Queues and Streams**
- **Event Sourcing**

## Enterprise Patterns

[In-depth notes](09-enterprise-patterns.md)

Enterprise patterns are a set of design patterns that are commonly used in the development of enterprise software applications. These patterns provide a common vocabulary and a set of best practices for solving common problems that arise in the development of large, complex software systems. Some examples of enterprise patterns include:

- DTOs
- Identity Maps
- Use Cases
- Repositories
- Mappers
- Transaction Script
- Value Objects
- Entities
- ORMs
- Service Oriented Architecture (SOA)
- Command and Query Responsibility Segregation (CQRS)
- Event Sourcing
- Microservices
- Event-Driven Architecture (EDA)