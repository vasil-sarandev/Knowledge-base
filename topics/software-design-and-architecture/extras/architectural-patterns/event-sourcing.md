[Back to Architectural Patterns](08-architectural-patterns.md)

## Event Sourcing

##### Available Resources

- [Event Sourcing Pattern - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)

### Introduction

Event sourcing is an architectural pattern that is used to build systems that need to maintain a history of all the changes that have occurred over time. This pattern stores all changes to the system’s state as a sequence of events, rather than just the current state.

In Event sourcing, all changes to the state of the system are treated as events, and these events are stored in an append-only log, also known as an event store. The current state of the system can be reconstructed from the event log at any given point in time by replaying the events from the log.
