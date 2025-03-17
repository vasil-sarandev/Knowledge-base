[Back to Architectural Styles](07-architectural-styles.md)

### Messaging

##### Available Resources

[Architectural Messaging Patterns](https://www.redhat.com/architect/architectural-messaging-patterns)

#### Introduction

Messaging is a key concept in several architectural styles, including event-driven architecture (EDA), microservices, and message-driven architecture (MDA).

- Event-driven architecture (EDA)
- Microservices
- Message-driven architecture (MDA)

In general, messaging is a powerful concept that allows for the decoupling and scalability of systems and it’s used in different architectural styles to improve the flexibility and scalability of the system by allowing for loose coupling between components and making it easier to add new features or modify existing ones.

#### Publish-Subscribe Pattern

The publish-subscribe pattern is a messaging pattern in which a publisher sends a message to a topic, and any number of subscribers can subscribe to that topic to receive the message. The publish-subscribe pattern is also known as the “observer pattern” and is a way of implementing communication between different parts of an application in a decoupled way.

The main advantage of using the publish-subscribe pattern is that it allows for a clear separation of concerns between the publisher and the subscribers, and it can improve the flexibility and scalability of the system. Additionally, it allows for loose coupling between components, meaning that the publisher and subscribers are not aware of each other’s existence, and can be developed, deployed, and scaled independently.

#### Event-Driven Architecture

Event-driven architecture (EDA) is a software design pattern in which the system reacts to specific events that occur, rather than being continuously polled for changes. In EDA, events are messages that are sent asynchronously between components, and the components react to the events they are interested in.

The main advantage of using EDA is that it allows for a clear separation of concerns between the components, and it can improve the scalability and fault-tolerance of the system. Additionally, it allows for loose coupling between components, meaning that the components are not aware of each other’s existence, and can be developed, deployed, and scaled independently.

Event-Driven Architecture uses a pub-sub pattern.

[What is event-driven architecture? - Redhate](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture)
