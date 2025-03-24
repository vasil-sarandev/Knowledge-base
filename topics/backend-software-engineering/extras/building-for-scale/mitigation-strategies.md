[Back to "Building For Scale"](19-building-for-scale.md)

## Mitigation Strategies

Mitigation strategies in Software Engineering are techniques and practices designed to reduce risks, improve system resilience, and ensure reliability. 

These strategies address potential failures, security vulnerabilities, performance bottlenecks, and scalability challenges by implementing fault tolerance, redundancy, proper error handling, security controls, and monitoring mechanisms.

### Circuit Breaker

The circuit breaker design pattern is a way to protect a system from failures or excessive load by temporarily stopping certain operations if the system is deemed to be in a failed or overloaded state. It is commonly used in cloud computing environments to prevent cascading failures and to improve the resilience and availability of a system. 

A circuit breaker consists of three states: closed, open, and half-open. In the closed state, the circuit breaker allows operations to proceed as normal. If the system encounters a failure or becomes overloaded, the circuit breaker moves to the open state, and all subsequent operations are immediately stopped. After a specified period of time, the circuit breaker moves to the half-open state, and a small number of operations are allowed to proceed. If these operations are successful, the circuit breaker moves back to the closed state; if they fail, the circuit breaker moves back to the open state.

[Circuit Breaker - AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_graceful_degradation.html)

### Load Shifting

Load shifting is a strategy used to manage and distribute computing or system workloads more efficiently by moving or redistributing the load from peak times to off-peak periods. 

This approach helps in balancing the demand on resources, optimizing performance, and reducing costs. In cloud computing and data centers, load shifting can involve rescheduling jobs, leveraging different regions or availability zones, or adjusting resource allocation based on real-time demand. 

By smoothing out peak loads, organizations can enhance system reliability, minimize latency, and better utilize their infrastructure.

### Backpressure

Backpressure is a flow control mechanism in systems processing asynchronous data streams, where the receiving component signals its capacity to handle incoming data to the sending component. This feedback loop prevents overwhelming the receiver with more data than it can process, ensuring system stability and optimal performance. 

In software systems, particularly those dealing with high-volume data or event-driven architectures, back pressure helps manage resource allocation, prevent memory overflows, and maintain responsiveness. 

It’s commonly implemented in reactive programming, message queues, and streaming data processing systems. By allowing the receiver to control the flow of data, backpressure helps create more resilient, efficient systems that can gracefully handle varying loads and prevent cascading failures in distributed systems.

- [Awesome Architecture: Backpressure](https://awesome-architecture.com/back-pressure/)
- [Backpressure explained — The Resisted Flow of Data through Software](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7)

### Throttling

Throttling is a technique used to control the rate at which requests or operations are processed, typically to prevent overloading a system or service. It involves setting limits on the number of requests a user or application can make within a specific time period. 

Throttling helps manage resource consumption, ensure fair usage, and maintain system stability by avoiding excessive load that could degrade performance or cause outages. It is commonly implemented in APIs, network services, and databases to balance demand, protect against abuse, and ensure consistent performance across users and services.

[Throttling - AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/2022-03-31/framework/rel_mitigate_interaction_failure_throttle_requests.html)

### Graceful Degradation

Graceful degradation is a design principle that states that a system should be designed to continue functioning, even if some of its components or features are not available. In the context of web development, graceful degradation refers to the ability of a web page or application to continue functioning, even if the user’s browser or device does not support certain features or technologies. 

Graceful degradation is often used as an alternative to progressive enhancement, a design principle that states that a system should be designed to take advantage of advanced features and technologies if they are available.

[What is Graceful Degradation & Why Does it Matter?](https://blog.hubspot.com/website/graceful-degradation)