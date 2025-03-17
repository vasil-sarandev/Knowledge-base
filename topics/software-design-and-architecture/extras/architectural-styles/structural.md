[Back to Architectural Styles](07-architectural-styles.md)

### Structural Architectural Styles

#### Introduction

Structural architecture in software refers to the organization and design of the components of a software system, and how they interact with each other. It deals with the physical organization of the system, and the relationships between the different components.

There are several different structural architecture patterns and styles that can be used to design software systems, including:

- Monolithic: where the system is built as a single, integrated, and self-contained unit.
- Layered: where the system is divided into a set of layers, each of which has a specific responsibility and communicates with the other layers through well-defined interfaces.
- Microservices: where the system is built as a collection of small, independent, and loosely-coupled services.
- Event-driven: where the system reacts to specific events that occur, rather than being continuously polled for changes.
- Client-Server: where a client sends requests to a server, and the server responds to those requests
- Peer-to-Peer: where each node in the network acts as both a client and a server
- Component-based: where the system is composed of reusable and independent software components
- Domain-Driven: where the system is organized around the core business domain and business entities.

#### Monolithic

In software architecture, monolithic architecture is a design approach in which a software system is built as a single, integrated, and self-contained unit. In a monolithic architecture, all the components of the system are tightly coupled and depend on each other. This means that changes in one part of the system may affect other parts of the system.

A monolithic architecture is often used for small to medium-sized systems, where the complexity of the system is manageable and the need for scalability and flexibility is not as high. In a monolithic architecture, the entire system is typically built, deployed, and executed as a single unit, which can make it easier to understand and manage the system.

[Overview of Monolithic Architecture - Atlassian](https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith)

#### Layered Architecture

In software architecture, layered architecture is a design approach in which a software system is divided into a set of layers, each of which has a specific responsibility and communicates with the other layers through well-defined interfaces. This approach allows for a more modular and flexible design, where each layer can be developed, tested, and deployed independently, making it easier to add new features, modify existing ones, and maintain the system.

A layered architecture is often used for large and complex systems, where the need for scalability and flexibility is high. Each layer in a layered architecture is responsible for a specific functionality and can be thought of as a “black box” with a well-defined interface. The layers communicate with each other through these interfaces, allowing for a clear separation of concerns.

[Layered Architecture - University of Waterloo](https://cs.uwaterloo.ca/~m2nagapp/courses/CS446/1195/Arch_Design_Activity/Layered.pdf)

#### Component Based Architecture

In software architecture, component-based design (CBD) is an approach to designing software systems by composing them from a set of reusable and independent software components. These components encapsulate specific functionality and can be easily integrated into different parts of the system, allowing for a more modular and flexible design.

In CBD, a software system is divided into a set of components, each of which has a well-defined interface and a specific responsibility. These components can be developed, tested, and deployed independently, making it easier to add new features, modify existing ones, and maintain the system.

[Component Based Software Architecture](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)
