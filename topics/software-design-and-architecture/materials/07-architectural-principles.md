[Back to Software Design and Architecture](topics/software-design-and-architecture/software-design-and-architecture.md)
# Software Architectural Principles

Architectural principles refer to a set of guidelines or rules that are used to guide the design and development of a software architecture. These principles are intended to ensure that the resulting architecture is maintainable, scalable, and easy to understand and modify. 

Additionally, architectural principles are often used in conjunction with design patterns, which are reusable solutions to common software design problems.

- High cohesion - classes' responsibilities are in a similar domain and have a well-defined purpose.
- Low coupling - changes in one module have minimal impact to other modules
- Separation of concerns - dividing a system into distinct, independent parts, each responsible for a single functionality.
- Interface-based design - program against interfaces, not implementations
- Modularity - splitting the software in modules reduces coupling
- Interoperability - The degree to which a software system, devices, applications or other entity can connect and communicate with other entities.
- CAP Theorem
## CAP Theorem

The **CAP theorem** states that any distributed system can provide only 2 of the following 3 guarantees: 

- **Consistency** -  Every read receives the most recent write or an error. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in ACID.
- **Availability** - Every request received by a non-failing node in the system must result in a response. This is the definition of availability in CAP theorem as defined by Gilbert and Lynch.
- **Partition Tolerance** - The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

The theorem remains extremely relevant even today when we're talking about system design and architecture because there are trade-offs we need to be aware of
## Coupling and Cohesion

Coupling and cohesion are two principles in software architecture that are used to measure the degree of interdependence between components in a system.

Coupling refers to the degree to which one component depends on another component. High coupling means that a change in one component will likely affect other components, making the system more difficult to understand, test, and maintain. Low coupling, on the other hand, means that changes to one component have minimal impact on other components, making the system more modular and easier to understand, test, and maintain.

Cohesion, on the other hand, refers to the degree to which the responsibilities of a component are related to each other. High cohesion means that a component has a single, well-defined purpose and that all its functionality and data is related to that purpose. Low cohesion, on the other hand, means that a component has multiple, unrelated responsibilities, making it more difficult to understand, test, and maintain.
## Boundaries

In software architecture, boundaries refer to the interfaces or the points of separation between different components or systems. These boundaries can be physical, such as between different microservices in a distributed system, or logical, such as between different layers in an application.

Boundaries are important because they define the points of interaction between different components or systems, and they dictate how those components or systems will communicate with each other. By defining clear boundaries, it makes it easier to understand, test, and maintain the system, as the interactions between components or systems are well-defined and easy to reason about.
## Available Resources

- [Introduction to Architectural Principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)
