[Back to Architectural Patterns](08-architectural-patterns.md)
## CQRS (Command Query Responsibility Segregation)
CQRS (Command Query Responsibility Segregation) is an architectural pattern that is used to separate the responsibilities of reading and writing data in a software system. In a CQRS architecture, the system is divided into two separate parts: the command side and the query side.

The command side is responsible for processing commands and updating the system’s state, while the query side is responsible for reading the current state of the system and returning the results to the client. The command and query sides can use different data models, storage mechanisms, and even different technologies.
### Available Resources
- [Get started with CQRS - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [CQRS Pattern: The Good, The Bad, and the Ugly](https://betterprogramming.pub/cqrs-software-architecture-pattern-the-good-the-bad-and-the-ugly-e9d6e7a34daf)