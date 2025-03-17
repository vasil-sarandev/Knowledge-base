[Back to Software Design and Architecture](topics/software-design-and-architecture/index.md)

# Enterprise Patterns

##### Available Resources

- [Software Architecture Patterns in Enterprise Software](https://blog.devgenius.io/10-software-architecture-patterns-in-enterprise-software-development-fabacb5ed0c8)
## Introduction

Enterprise patterns are a set of design patterns that are commonly used in the development of enterprise software applications. These patterns provide a common vocabulary and a set of best practices for solving common problems that arise in the development of large, complex software systems. Some examples of enterprise patterns include:

- Domain-Driven Design (DDD)
- Model-View-Controller (MVC)
- Service Oriented Architecture (SOA)
- Command and Query Responsibility Segregation (CQRS)
- Event Sourcing
- Microservices
- Event-Driven Architecture (EDA)

These patterns can help to improve the maintainability and scalability of the software, by providing a clear separation of concerns and allowing for a more modular and flexible architecture.

## DTOs

The Data Transfer Object Design Pattern is one of the enterprise application architecture patterns that calls for the use of objects that aggregate and encapsulate data for transfer. A Data Transfer Object is, essentially, like a data structure. It should not contain any business logic but should contain serialization and deserialization mechanisms.

[Data Transfer Object pattern and Mappers](https://medium.com/@abdalrhmanalkraien/data-transfer-object-pattern-and-mapper-116508bc9df0)

## Identity Maps

Identity Maps is a pattern used in enterprise application development to maintain a map of objects that have been loaded from the database, keyed by their unique identifier. It is used to ensure that multiple copies of the same object are not created in memory when the same data is accessed multiple times.

The identity map pattern is typically used in conjunction with an ORM (Object-Relational Mapping) tool. When an object is loaded from the database, it is first checked against the identity map to see if it has already been loaded. If it has, the existing object is returned, instead of creating a new copy.

[Overview of Identity Map pattern](https://en.wikipedia.org/wiki/Identity_map_pattern)
[Identity Map Pattern in JAVA](https://java-design-patterns.com/patterns/identity-map/#programmatic-example-of-identity-map-pattern-in-java)

## Use Cases

Use Cases are a pattern used in enterprise application development to represent the functional requirements of a system. They describe the interactions between the system and its users, and the steps that are required to accomplish a specific goal. Use cases are a way to capture the requirements of the system in a way that is easily understood by both the development team and the stakeholders.

A use case is a description of a sequence of actions that a system performs in response to a request from a user, in order to achieve a specific goal. A use case typically includes:

- The actor (user) who initiates the action
- The goal that the actor wants to achieve
- The steps required to achieve the goal, including any alternative paths or error conditions
- The expected outcome of the interaction

Use cases are often used to drive the design and development of the system, as they provide a clear and detailed understanding of the requirements.

## Repositories

Repositories are a pattern used in enterprise application development to provide a consistent and abstracted way to access data storage. Repositories act as an abstraction layer between the application and the data storage, providing a consistent and simple API for data access and manipulation.

A repository is a pattern that can be used to organize the data access code and encapsulate the logic of retrieving and storing objects. Repositories provide a way to separate the concerns of the data access from the rest of the application, allowing the application code to be written against an interface and not a specific data storage technology.

[Introduction to Repository Design Pattern](https://cubettech.com/resources/blog/introduction-to-repository-design-pattern/)

## Mappers

Mappers are a pattern used in enterprise application development to provide a consistent and abstracted way to map between different data models. They act as an abstraction layer between the application and the data storage, providing a consistent and simple API for data transformation.

A mapper is a component that can be used to convert data from one format or model to another. For example, a mapper can be used to convert data from a database model to a domain model, or from a domain model to a data transfer object (DTO).

The interface of an object conforming to this pattern would include functions such as Create, Read, Update, and Delete, that operate on objects that represent domain entity types in a data store.

```JAVA
public interface StudentDataMapper {
    void insert(final Student student);
    void update(final Student student);
    void delete(final Student student);
    Optional<Student> find(final int studentId);
    // ...
}
```

[Overview of Data Mapper Pattern](https://en.wikipedia.org/wiki/Data_mapper_pattern)

## Transaction Script

Transaction Script is a pattern used in enterprise application development that organizes business logic into a single procedural script. It is often used for simple CRUD (create, read, update, delete) operations, where all of the logic for a specific transaction is contained in a single script or function. This pattern is simple to implement and easy to understand, but can become unwieldy as the complexity of the application increases. Alternative patterns such as Domain-Driven Design (DDD) and the Active Record pattern may be more appropriate for more complex applications.

[Transaction Script Pattern](https://gunnarpeipman.com/transaction-script-pattern/)

## Commands Queries

The Command and Query Responsibility Segregation (CQRS) pattern is a technique used in enterprise application development to separate the responsibilities of handling command (write) operations and query (read) operations for performing actions that change the state of the system, such as creating, updating, or deleting data. These operations are handled by Command Handlers, which are responsible for validating the data and executing the appropriate business logic.

Queries are used for retrieving data from the system, such as reading data from a database or a cache. These operations are handled by Query Handlers, which are responsible for executing the appropriate query and returning the data to the caller.

[CQRS Pattern - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs)

## Value Objects

Value Objects are a pattern used in enterprise application development to represent simple, immutable values that are used to model domain concepts. They are typically used to encapsulate data that is not an entity, but is important to the domain.

A Value Object is defined by its value rather than its identity, meaning that two Value Objects with the same value are considered to be equal, regardless of their identity.

[Overview - Implement Value Objects](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/implement-value-objects)

## Domain Models

Domain Models are a pattern used in enterprise application development to represent the business concepts and rules of a specific domain. They are typically used to model the problem domain, or the area of expertise of a specific business.

A Domain Model is a collection of objects that represent the real-world concepts and entities of the domain. These objects are typically modeled as classes or types, and they encapsulate the data and behavior that is specific to the domain. They are responsible for representing the state and behavior of the business concepts they model, and for enforcing the rules and constraints of the domain.

[Overview - Domain Models](https://sparxsystems.com/enterprise_architect_user_guide/14.0/model_domains/specialized_models.html)

## Entities

Entities are a pattern used in enterprise application development to represent the business concepts that have a unique identity and a lifetime. They are typically used to model real-world objects or concepts that have a distinct identity and a lifecycle, such as a customer, an order, or an account.

An Entity is defined by its identity, meaning that two entities with the same identity are considered to be the same, regardless of their state. Entities usually have a unique identifier, such as a primary key, that is used to identify them. They also have an associated set of properties or attributes that describe their state.

## ORMs

ORM stands for Object-Relational Mapping, it is a technique used in enterprise application development to map between the object-oriented programming model and the relational database model. It allows developers to work with objects in their code, while the ORM tool takes care of translating those objects into the appropriate database operations.

ORMs are designed to abstract away the complexity of working with a relational database and allow developers to interact with the database using a higher-level, object-oriented API. They provide a set of libraries and tools that map the objects in the code to the tables and rows in the database, and vice versa. This allows developers to work with the data using a familiar object-oriented paradigm, rather than having to write complex SQL queries.

[Do you need an ORM?](https://enterprisecraftsmanship.com/posts/do-you-need-an-orm/)
