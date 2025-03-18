[Back to Software Design and Architecture](topics/software-design-and-architecture/software-design-and-architecture.md)
# Architectural Styles
Architectural styles in software refer to the overall design and organization of a software system, and the principles and patterns that are used to guide the design. These styles provide a general framework for the design of a system, and can be used to ensure that the system is well-structured, maintainable, and scalable.
- [Client-Server Architecture](client-server.md)
- [Monolithic Architecture](monolithic.md)
- [Layered Architecture](layered.md)
- [Service-Oriented Architecture](service-oriented.md)
- [Microservices Architecture](microservices.md)
- [Event-Driven Architecture](event-driven.md)
- [Serverless Architecture](serverless.md)
- [Domain-Driven Design](domain-driven-design.md)
- [Peer-to-Peer Architecture](peer-to-peer.md)
- [Component-based Architecture](component-based.md)
- [Hexagonal Architecture](hexagonal.md)
## Distributed Architecture
Distributed systems refer to the design and organization of software components that are distributed across multiple devices or locations, connected via a network, and work together to achieve a common goal.

The main challenge in designing distributed systems is dealing with the inherent complexity that arises from the distribution of components and the communication between them, and it requires techniques such as load balancing, replication, and partitioning to improve scalability, fault-tolerance, and performance.

Additionally, security and coordination are also important aspects of distributed systems.
## Messaging
Messaging is a key concept in several architectural styles:
- Event-driven architecture (EDA)
- Microservices
- Message-driven architecture (MDA)

In general, messaging is a powerful concept that allows for the decoupling and scalability of systems and it’s used in different architectural styles to improve the flexibility and scalability of the system by allowing for loose coupling between components and making it easier to add new features or modify existing ones.

It is often implemented with a Message Queue and Broker like Apache Kafka, RabbitMQ, Azure ServiceBus.
### Publish-Subscribe Pattern
The publish-subscribe pattern is a messaging pattern in which a publisher sends a message to a topic, and any number of subscribers can subscribe to that topic to receive the message. The publish-subscribe pattern is also known as the “observer pattern” and is a way of implementing communication between different parts of an application in a decoupled way.

The main advantage of using the publish-subscribe pattern is that it allows for a clear separation of concerns between the publisher and the subscribers, and it can improve the flexibility and scalability of the system. Additionally, it allows for loose coupling between components, meaning that the publisher and subscribers are not aware of each other’s existence, and can be developed, deployed, and scaled independently.
## Available Resources
- [Overview - Architectural Patterns](https://en.wikipedia.org/wiki/Architectural_pattern)
