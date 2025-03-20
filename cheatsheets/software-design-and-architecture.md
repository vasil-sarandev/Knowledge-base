# Software Design and Architecture

## Programming Paradigms

[In-depth notes](02-programming-paradigms.md)

A programming paradigm is a fundamental style or approach to solving problems using a programming language.
### Imperative Programming

In computer science, imperative programming is a programming paradigm of software that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform.

- **Object-oriented programming** - a programming paradigm that is based on the concept of “objects”, which are instances of classes.
- **Procedural programming** - a paradigm that involves implementing the behavior of a computer program as procedures (a.k.a. functions, subroutines) that call each other. 
- **Structured programming** - a programming paradigm that emphasizes the use of structured control flow constructs, such as loops and conditional statements, to organize code into logical, easy-to-understand blocks.

### Declarative programming

In computer science, declarative programming is a programming paradigm—a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.

  - **Functional programming** - a programming paradigm that emphasizes the use of pure functions and immutable data. It is a way of writing computer programs that emphasizes the use of functions and mathematical concepts, such as recursion, rather than using objects and classes like in object-oriented programming.
  - **Logic programming** - a programming paradigm that described programming by description.

## Object-Oriented Programming

[In-depth notes](03-object-oriented-programming.md)

OOP is a programming paradigm that is based on the concept of “objects,” which are instances of a class.

### OOP Primary Principles

There are several primary principles that are considered fundamental to object-oriented programming (OOP). These principles include:

- **Inheritance**: The ability of a new class to inherit the properties and methods of an existing class, enabling code reuse and allowing for a hierarchical organization of classes.
- **Polymorphism**: The ability of objects of different classes to be treated as objects of a common parent class, allowing code to be written in a more general and flexible way.
- **Abstraction**: The process of hiding the implementation details of an object and exposing only its essential features, reducing complexity and improving the modularity of the code.
- **Encapsulation**: The practice of wrapping an object’s internal data and behavior to control access and prevent modification.
- **Classes**: The blueprint for creating objects, which have both data (attributes) and behavior (methods).
- **Objects**: Instances of a class, which have their own unique state and behavior.

### OOP Paradigm Features

OOP has several key features that distinguish it from other programming paradigms:

- **Abstract Classes** - a class that cannot be instantiated. Instead, it serves as a template or blueprint for other classes to inherit from. Can contain both abstract and non-abstract methods.
- **Concrete Classes** - a class that can be instantiated.
- **Dynamic binding** - a concept in programming where the method to be invoked is determined at runtime rather than compile time. Method overriding is an example.
- **Scope Visibility** - refers to the accessibility or visibility of variables and functions. Controlled through the use of access modifies - such as public, private, *protected*.
- **Interfaces** - a contract for classes to implement. Can contain attributes and abstract methods.
## Software Design Principles

[In-depth notes](04-software-design-principles.md)

There are many software design principles that aim to guide the development of software in a way that makes it easy to understand, maintain, and extend. Some of the most common design principles include:

**SOLID Principles**

- **Single Responsibility Principle** - each class should solve only one problem
- **Open/Closed Principle**- you should be able to extend a class's behavior without modifying it
- **Liskov Substitution Principle** - every derived class should be substitutable for its parent class.
- **Interface Segregation Principle** - better to have many small interfaces than a few big ones
- **Dependency Inversion Principle** - depend on abstractions, not on concretions

**Composition over Inheritance**

Composition over inheritance is a programming principle that suggests that it is better to use composition, a mechanism for assembling objects, to create complex objects, rather than using inheritance, which is a mechanism for creating new classes based on existing ones.

Inheritance is a powerful mechanism for creating reusable code, but it can also lead to tightly coupled, hard-to-maintain code. This is because inherited classes are tightly bound to their parent classes and any changes made to the parent class will affect all of its child classes. This makes it hard to change or extend the code without affecting the entire class hierarchy.

Composition is better than Inheritance in theory but in practice they often work hand in hand.

**Other Software Design Principles**

- **Program against Abstractions** - code should be written in such a way that it is not tied to specific implementations, but rather to abstractions.
- **Encapsulate what varies**- code should be organized in such a way that the parts that are likely to change in the future are isolated from the parts that are unlikely to change
- **DRY (Don't Repeat Yourself)** - code should not have duplicate functionality.
- **YAGNI (You Ain’t Gonna Need It)** - a principle that suggests that developers should not add functionality to a codebase unless it is immediately necessary
- **KISS** (Keep It Simple, Stupid) - a principle that suggests that systems work best when they are simple and easy to understand, rather than complex
- **Hollywood Principle** - “Don’t call us, we’ll call you”. The principle suggests that high-level components should dictate the flow of control in an application, rather than low-level components.
## Software Design Patterns

[In-depth notes](05-software-design-patterns.md)

Software Design Patterns are general solutions to common problems that arise in software development. They are not specific to any particular programming language or technology, but rather describe the problem and the solution in a way that can be applied to many different contexts. They are typically grouped into Creational, Structural and Behavioral Design Patterns.

**Creational Design Patterns** - these are the design patterns that deal with the creation of an object.

- **Singleton** - restricts the initialization of a class to ensure that only one instance of the class can be created
- **Factory** - takes out the responsibility of instantiating a object from the class to a Factory class.
- **Abstract Factory** - allows us to create a Factory for factory classes.
- **Builder** - creating an object step by step and a method to finally get the object instance.
- **Prototype** - creating a new object instance from another similar instance and then modify according to our requirements.

**Structural Design Patterns** - they explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

- **Adapter** - provides an interface between two unrelated entities so that they can work together.
- **Composite** - used when we have to implement a part-whole hierarchy. For example, a diagram made of other pieces such as circle, square, triangle, etc.
- **Proxy** - provide a surrogate or placeholder for another object to control access to it.
- **Flyweight** - caching and reusing object instances, used with immutable objects.
- **Facade** - creating a wrapper interfaces on top of existing interfaces to help client applications.
- **Bridge** - used to decouple the interfaces from implementation and hiding the implementation details from the client program.
- **Decorator** - used to modify the functionality of an object at runtime.

**Behavioral Design Patterns** - this type of design patterns provide solution for the better interaction between objects, how to provide loose coupling, and flexibility to extend easily in future.

- **Template Method** - used to create a template method stub and defer some of the steps of implementation to the subclasses.
- **Mediator** - used to provide a centralized communication medium between different objects in a system.
- **Chain of Responsibility** - used to achieve loose coupling in software design where a request from the client is passed to a chain of objects to process them.
- **Observer** - useful when you are interested in the state of an object and want to get notified whenever there is any change.
- **Strategy** - used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime.
- **Command** - used to implement loose coupling in a request-response model.
- **State** - used when an Object change it’s behavior based on it’s internal state.
- **Visitor** - used when we have to perform an operation on a group of similar kind of Objects.
- **Interpreter** - defines a grammatical representation for a language and provides an interpreter to deal with this grammar.
- **Iterator** - used to provide a standard way to traverse through a group of Objects.
- **Memento** - used when we want to save the state of an object so that we can restore later on.

## Distributed Systems

[In-depth notes](06-distributed-systems.md)

Distributed systems refer to the design and organization of software components that are distributed across multiple devices or locations, connected via a network, and work together to achieve a common goal.

### Characteristics of a Distributed System

- **Scalability** – Ability to handle increased workload by adding more nodes.
- **Fault Tolerance** – Systems should remain functional despite node failures.
- **Concurrency** – Multiple components operate simultaneously without conflicts.
- **Decentralization** – No single point of failure; decision-making is distributed.

### Communication Models

- **Synchronous Communication** - more coupling, requires services to be available at same time.
- **Asynchronous Communication** - less coupling, introduces eventual consistency. 

### Data Management

- **Replication** - Asynchronous (Replicas) / Synchronous (Writes to all replicas before committing). Tradeoff is eventual consistency and better read performance vs increased write latency.
- **Sharding** - Divides data across multiple databases based on a key (e.g., user ID) to distribute load.
- **Partitioning** - Separates data within a single database (e.g., range-based, list-based, or hash-based partitions).

### Eventual Consistency vs Strong Consistency

- **Eventual Consistency** - Means that different nodes may have stale data at some point. Less coupling and typically a side effect of Message-Driven Architecture or Event-Driven Architecture. 
- **Strong consistency** - Guarantees all nodes have the same data. It is sometimes critical and can be achieved through Distributed Transactions or Quorum-based Writes.

### Fault Tolerance & Resilience 

- **Leader Election** – Ensuring coordination in distributed environments.
- **Circuit Breaker Pattern** – Preventing cascading failures in microservices.
- **Retries & Exponential Backoff** – Handling transient failures gracefully.

### Messaging

Key concept in Distributed Systems. Typically implemented with a Message Queue/Broker like Apache Kafka, RabbitMQ or Azure ServiceBus.

## Architectural Principles

[In-depth notes](07-architectural-principles.md)

Architectural principles refer to a set of guidelines or rules that are used to guide the design and development of a software architecture. These principles are intended to ensure that the resulting architecture is maintainable, scalable, and easy to understand and modify. 
 
- **High cohesion** - classes' responsibilities are in a similar domain and have a well-defined purpose.
- **Low coupling** - changes in one module have minimal impact to other modules
- **Separation of concerns** - dividing a system into distinct, independent parts, each responsible for a single functionality.
- **Interface-based design** - program against interfaces, not implementations
- **Modularity**- splitting the software in modules reduces coupling
- **Interoperability** - The degree to which a software system, devices, applications or other entity can connect and communicate with other entities.
- **CAP Theorem** - Consistency, Availability, Partition Tolerance. In distributed systems choose 2 of 3.
## Architectural Styles

[In-depth notes](08-architectural-styles.md)

Architectural styles in software refer to the overall design and organization of a software system, and the principles and patterns that are used to guide the design. These styles provide a general framework for the design of a system, and can be used to ensure that the system is well-structured, maintainable, and scalable.

- **Client-Server Architecture** - a client (or multiple clients) send requests to a server, and the server responds to those requests.
- **Monolithic Architecture** - the system is built as a single, integrated, and self-contained unit. Monolithic architecture often results in high coupling.
- **Service-Oriented Architecture** - organizes the system as a collection of services that are autonomous, self-contained units of functionality that can be reused and combined to create new functionality.
- **Layered Architecture** - the software system is divided into a set of layers, each of which has a specific responsibility and communicates with the other layers through well-defined interfaces.
- **Microservices Architecture** - used to design software systems as a collection of small, independent, and loosely-coupled services. Each service is responsible for a specific functionality and can be developed, deployed, and scaled independently.
- **Event-driven Architecture** - the system reacts to specific events that occur, rather than being continuously polled for changes. In EDA, events are messages that are sent asynchronously between components, and the components react to the events they are interested in.
- **Component-based Architecture** - used to design software systems by composing them from a set of reusable and independent software components. 
- **Domain-Driven Design** - used to design software systems based on the core business domain and business entities, it’s focused on creating a clear and accurate representation of the business domain within the software system, and on aligning the software system with the business goals and objectives.
- **Peer-to-Peer Architecture** - distributed computing architecture in which each node (peer) in the network acts as both a client and a server. In P2P architecture, there is no central authority or server that manages the network, and each node communicates directly with other nodes to exchange information, share resources, and perform computations.
- **Hexagonal Architecture** - aims at creating loosely coupled application components that can be easily connected to their software environment by means of ports and adapters.

## Architectural Patterns

[In-depth notes](09-architectural-patterns.md)

Architectural patterns are a set of solutions that have been proven to work well for specific types of software systems. They provide a common vocabulary and set of best practices for designing and building software systems, and can help developers make better design decisions. Some common architectural patterns include:

- **Command-Query Responsibility Segregation (CQRS)** - used to separate the responsibilities of reading and writing data in a software system which allows us to scale them independently and results in lower coupling.
- **Message Queues and Streams** - used to decouple different components of a system and enable asynchronous communication between them. Typical implementations are Kafka, RabbitMQ and Azure ServiceBus.
- **Event Sourcing** - used to build systems that need to maintain a history of all the changes that have occurred over time. This pattern stores all changes to the system’s state as a sequence of events, rather than just the current state.
- **Saga** - because microservices typically span different databases we can't user normal ACID transactions and some transactions need to be implemented as a Saga - a collection of local transactions
- **Circuit Breaker** - used to prevent an application from repeatedly trying to execute an operation that's likely to fail. 
- **Model-View-Controller (MVC)** - separates the concerns of a software system into three distinct components: the model, the view, and the controller, where the model represents the data and the business logic of the system, the view represents the user interface of the system and the controller acts as an intermediary between the model and the view.
- **Microkernel** - aims to minimize the amount of code running in kernel mode (i.e., privileged mode with direct access to hardware resources) and instead move as much functionality as possible into user mode.
- **Blackboard** - allows for the creation of a centralized repository of information that can be accessed and modified by multiple independent modules or subsystems. Typically used with reasoning models.
## Enterprise Patterns

[In-depth notes](10-enterprise-patterns.md)

Enterprise patterns are a set of design patterns that are commonly used in the development of enterprise software applications. These patterns provide a common vocabulary and a set of best practices for solving common problems that arise in the development of large, complex software systems. Some examples of enterprise patterns include:

- **DTOs** - essentially, a data structure passed between the server and client.
- **Identity Maps** - used to maintain a map of objects that have been loaded from the database, keyed by their unique identifier.
- **Repositories** - used to provide a consistent and abstracted way to access data storage
- **Mappers** - used to provide a consistent and simple API for data transformation.
- **Transaction Script** - organizes business logic into a single procedural script
- **Value Objects** - used to to represent simple, immutable values that are used to model domain concepts. They are typically used to encapsulate data that is not an entity, but is important to the domain
- **Entities** - they represent the business concepts that have a unique identity and a lifetime. They are typically used to model real-world objects or concepts that have a distinct identity and a lifecycle, such as a customer, an order, or an account.
- **ORMs** - Object-Relational Mapping. It is a technique used in enterprise application development to map between the object-oriented programming model and the relational database model. It allows developers to work with objects in their code, while the ORM tool takes care of translating those objects into the appropriate database operations.
- **Use Cases** - used to represent the functional requirements of a system.