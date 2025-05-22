# Software Design and Architecture

## Programming Paradigms

A programming paradigm is a fundamental approach to solving problems using a programming language.

### Imperative Programming

A style where the program state is changed through statements, resembling commands in natural languages.

- **Object-oriented programming (OOP)**: Based on objects, instances of classes.
- **Procedural programming**: Implements program behavior via procedures (functions, subroutines).
- **Structured programming**: Uses structured control flow (loops, conditionals) to organize code.

### Declarative Programming

Describes the _what_ of computation without specifying _how_ to execute it.

- **Functional programming**: Emphasizes pure functions and immutable data.
- **Logic programming**: Describes logic through declarations and relationships.

## Object-Oriented Programming

OOP is based on “objects,” instances of classes.

### Primary Principles

- **Inheritance**: A class can inherit properties and methods from another class.
- **Polymorphism**: Objects from different classes can be treated as instances of a common parent.
- **Abstraction**: Hides implementation details, exposing essential features.
- **Encapsulation**: Controls access to an object's internal state.
- **Classes**: Blueprints for objects. 
- **Objects**: Instances of classes, each with its own state and behavior.

### Features

- **Abstract Classes**: Cannot be instantiated; used as templates.
- **Concrete Classes**: Instantiable classes.
- **Dynamic Binding**: Method invocation is determined at runtime.
- **Scope Visibility**: Determines access to variables and methods (public, private, protected).
- **Interfaces**: Contracts for classes to implement.

## Software Design Principles

These principles guide software development, ensuring maintainability, scalability, and flexibility.

### SOLID Principles

- **Single Responsibility**: A class should have one reason to change.
- **Open/Closed**: Classes should be open for extension but closed for modification.
- **Liskov Substitution**: Derived classes should be interchangeable with their parent classes.
- **Interface Segregation**: Prefer small, specific interfaces over large ones.
- **Dependency Inversion**: Depend on abstractions, not on concretions.

### Other Principles

- **Composition over Inheritance**: Use composition to create complex objects instead of inheritance.
- **DRY (Don't Repeat Yourself)**: Avoid duplicate code.
- **YAGNI (You Ain’t Gonna Need It)**: Don’t add functionality unless necessary.
- **KISS (Keep It Simple, Stupid)**: Keep systems simple and easy to understand.
- **Hollywood Principle**: "Don’t call us, we’ll call you." High-level components control flow.

## Software Design Patterns

Design patterns are reusable solutions to common software development problems.

### Creational Patterns

- **Singleton**: Ensures a class has only one instance.
- **Factory**: Delegates object instantiation to a factory class.
- **Abstract Factory**: Creates factories for other factories.
- **Builder**: Constructs complex objects step by step.
- **Prototype**: Creates new instances based on an existing object.

### Structural Patterns

- **Adapter**: Allows incompatible interfaces to work together.
- **Composite**: Implements a part-whole hierarchy.
- **Proxy**: A placeholder for another object to control access.
- **Facade**: Simplifies a system’s interface.
- **Decorator**: Adds functionality to objects at runtime.

### Behavioral Patterns

- **Template Method**: Defines a skeleton of an algorithm, deferring some steps to subclasses.
- **Mediator**: Centralizes communication between components.
- **Chain of Responsibility**: Passes requests through a chain of handlers.
- **Observer**: Notifies observers of changes to an object.
- **Strategy**: Selects an algorithm at runtime.
- **Command**: Encapsulates requests as objects.
- **State**: Changes behavior based on an object's state.
- **Visitor**: Operates on a collection of objects without modifying their classes.
    

## Distributed Systems

Distributed systems consist of components spread across multiple machines, working together to achieve a common goal.

### Characteristics

- **Scalability**: Ability to handle increased workload by adding nodes.
- **Fault Tolerance**: System remains operational despite failures.
- **Concurrency**: Multiple components operate simultaneously.
- **Decentralization**: No central point of failure.

### Data Management

- **Replication**: Distributes data across multiple nodes for availability.
- **Sharding**: Divides data across multiple databases.
- **Partitioning**: Divides data within a single database.

### Consistency Models

- **Eventual Consistency**: Data across nodes may be temporarily out of sync.
- **Strong Consistency**: Guarantees that all nodes have the same data.

### Fault Tolerance

- **Leader Election**: Ensures coordination in distributed environments.
- **Circuit Breaker Pattern**: Prevents cascading failures in microservices.
- **Retries & Exponential Backoff**: Gracefully handles transient failures.

### Messaging

Asynchronous communication between system components, typically implemented with message queues (e.g., Kafka, RabbitMQ).

## Architectural Principles

These principles guide the design of maintainable and scalable software architectures.

- **High Cohesion**: Classes should focus on a single responsibility.
- **Low Coupling**: Modules should be minimally dependent on each other.
- **Separation of Concerns**: Divide the system into distinct, independent parts.
- **Interface-based Design**: Program against interfaces, not implementations.
- **Modularity**: Reduces coupling by splitting systems into modules.
- **Interoperability**: Ensures systems can communicate with others.

## Architectural Styles

Architectural styles define the overall organization of a software system.

- **Client-Server**: Clients send requests to a server for processing.
- **Monolithic**: A single, integrated system with high coupling.
- **Service-Oriented**: A collection of self-contained services.
- **Layered**: Divides the system into layers with specific responsibilities.
- **Microservices**: Small, independent services that can be developed and deployed independently.
- **Event-Driven**: The system reacts to events rather than continuously polling for changes.
- **Component-based**: Systems are composed of reusable components.
- **Domain-Driven Design**: Focuses on the business domain and entities.
- **Peer-to-Peer**: Nodes act as both clients and servers.
- **Hexagonal**: Loosely coupled components that interact with their environment through ports and adapters.

## Architectural Patterns

Proven solutions for specific software system designs.

- **CQRS** (Command Query Responsibility Segregation): Separates reading and writing of data to scale them independently.
- **Message Queues**: Decouples components using asynchronous communication (e.g., Kafka, RabbitMQ).
- **Event Sourcing**: Stores changes as a series of events.
- **Saga**: Manages distributed transactions in microservices.
- **Circuit Breaker**: Prevents repeated failures from cascading.
- **MVC**: Separates system concerns into model, view, and controller.
- **Microkernel**: Minimizes the core system and moves functionality to user mode.
- **Blackboard**: Uses a centralized repository for information sharing.

## Enterprise Patterns

Common patterns in large, complex enterprise systems.

- **DTOs**: Data structures exchanged between the server and client.
- **Identity Maps**: Maintains a map of objects loaded from the database.
- **Repositories**: Provides an abstracted way to access data.
- **Mappers**: Transforms data between formats.
- **Transaction Script**: Organizes business logic into procedural scripts.
- **Value Objects**: Immutable objects representing domain concepts.
- **Entities**: Objects with a unique identity and lifecycle.
- **ORMs**: Maps object-oriented models to relational databases.
- **Use Cases**: Represents functional requirements of the system.