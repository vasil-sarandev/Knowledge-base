[Back to Object-oriented programming frontpage](03-object-oriented-programming.md)

## Model-Driven Design

#### Introduction

Model-driven design (MDD) is a software development methodology in which the design of a system is represented by a set of models, and the models are used to drive the development of the system. MDD is based on the idea that the design of a system can be represented by a set of models, and that these models can be used to generate the code for the system.

The main advantage of using MDD is that it allows for a clear separation of concerns between the design and implementation of a system. The models represent the design of the system, and the code is generated from the models, which makes it easier to maintain and evolve the system. Additionally, MDD can also improve the quality of the code, as the models can be used to check for design errors and inconsistencies before the code is generated.

### Domain Models

A domain model is a representation of a specific area of knowledge or business that is used to model the objects and concepts within that domain, and to capture the relationships and constraints between them. In object-oriented programming (OOP), a domain model is typically represented by a set of classes and interfaces, with each class or interface representing a specific concept or object within the domain.

A domain model is used to provide a clear and consistent representation of the problem domain, and to capture the business requirements and constraints of the system. It is also used to guide the design of the system and to ensure that the system accurately reflects the real-world problem it is intended to solve.

[Overview of Domain Model](https://en.wikipedia.org/wiki/Domain_model)

### Anemic Model

An Anemic model, also known as an anemic domain model, is a type of domain model in which the domain objects only contain data (attributes) and lack behavior. An anemic model often results in the use of data-transfer objects (DTOs) and service layer to handle the behavior.

An anemic model is considered an anti-pattern in object-oriented programming (OOP) because it violates the principles of encapsulation and separation of concerns. In an anemic model, the behavior is separated from the data, and is typically implemented in a separate service layer, which can lead to a complex, tightly coupled, and hard-to-maintain codebase.

[Overview of Anemic Domain Model](https://en.wikipedia.org/wiki/Anemic_domain_model)

### Layered Architecture

A layered architecture is a software design pattern in which the functionality of a system is divided into a set of layers, with each layer having a specific responsibility and interacting with the layers above and below it. The main idea behind a layered architecture is to separate the concerns of the system into distinct and independent layers, making the code more modular, easier to understand, test, and modify.

There are several types of layered architectures, but a common one is the three-layer architecture which consists of:

- Presentation Layer
- Business Layer
- Data Access Layer

[Software Architecture Patterns — Layered Architecture](https://priyalwalpita.medium.com/software-architecture-patterns-layered-architecture-a3b89b71a057)
[5 Primary Layers in Software Architecture](https://www.indeed.com/career-advice/career-development/what-are-the-layers-in-software-architecture)

### Domain Language

A domain language is a specific vocabulary and set of concepts used to describe and communicate about a specific area of knowledge or business. In software development, a domain language is used to model the objects and concepts within a specific domain, and to capture the relationships and constraints between them.

A domain language is used to provide a common understanding of the problem domain among all stakeholders, including developers, business analysts, and domain experts. It is also used to ensure that the software system accurately reflects the real-world problem it is intended to solve.

[What are Domain Languages (DSLs)?](https://www.jetbrains.com/mps/concepts/domain-specific-languages/)

### Class Invariants

A class invariant is a set of conditions that must be true for any object of a class, at any point in time. In object-oriented programming (OOP), class invariants are used to define the valid states of an object and to ensure that the object always remains in a valid state.

Class invariants are typically defined in the constructor of a class and are enforced through the use of private methods and data members that are used to validate the state of the object. They are also checked in the class’s methods before and after any operation that can change the state of the object.

[Overview of Class Invariant](https://en.wikipedia.org/wiki/Class_invariant)

[The concept of class invariant in object-oriented programming](https://arxiv.org/abs/2109.06557)
