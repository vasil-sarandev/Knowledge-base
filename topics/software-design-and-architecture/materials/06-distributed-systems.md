
[Back to Software Design and Architecture](topics/software-design-and-architecture/software-design-and-architecture.md)
# Distributed Systems

Distributed systems refer to the design and organization of software components that are distributed across multiple devices or locations, connected via a network, and work together to achieve a common goal.

The main challenge in designing distributed systems is dealing with the inherent complexity that arises from the distribution of components and the communication between them, and it requires techniques such as load balancing, replication, and partitioning to improve scalability, fault-tolerance, and performance. Additionally, security and coordination are also important aspects of distributed systems.
## Characteristics of Distributed Systems 

- **Scalability** – Ability to handle increased workload by adding more nodes.
- **Fault Tolerance** – Systems should remain functional despite node failures.
- **Concurrency** – Multiple components operate simultaneously without conflicts.
- **Decentralization** – No single point of failure; decision-making is distributed.
## Communication Models

- **Synchronous Communication** – API calls between services, typically using HTTP or gRPC. This makes services more tightly coupled and requires both to be available at the same time.
- **Asynchronous Communication** – Usually achieved with message queues like Kafka, RabbitMQ, or Azure Service Bus. This reduces coupling but introduces challenges like eventual consistency and message ordering.
## Data Management in Distributed Systems

#### Replication

Replication involves maintaining multiple copies of data to improve availability, fault tolerance, and performance.

- **Asynchronous Replication (Read Replicas)** – The primary database updates secondary replicas asynchronously, improving read performance but leading to eventual consistency.
- **Synchronous Replication** – Ensures strong consistency by committing writes across replicas before confirming success, at the cost of higher write latency.

### Sharding / Partitioning

Sharding (horizontal partitioning) and partitioning (logical or physical data separation) distribute data across multiple nodes to improve scalability.

- **Sharding** – Divides data across multiple databases based on a key (e.g., user ID) to distribute load.
- **Partitioning** – Separates data within a single database (e.g., range-based, list-based, or hash-based partitions).

### **Eventual Consistency vs. Strong Consistency**

- **Eventual Consistency** 
	Data updates propagate asynchronously, meaning different nodes may temporarily have stale data but will eventually converge. Typically a side effect of Message-Driven and Event-Driven Architectures.

- **Strong Consistency** 
	Guarantees all nodes always have the latest data, often at the cost of availability or latency. It is critical in systems requiring immediate accuracy, such as financial transactions. Can be achieved with: 
	- **Distributed Transactions** – Uses mechanisms like **Two-Phase Commit (2PC)** or **Paxos/Raft consensus algorithms** to maintain atomic consistency across multiple services.
	- **Quorum-Based Writes** – Requires a majority of nodes to acknowledge a write before it is committed, ensuring consistency but increasing latency.

### Fault Tolerance & Resilience

- **Leader Election** – Ensuring coordination in distributed environments.
- **Circuit Breaker Pattern** – Preventing cascading failures in microservices.
- **Retries & Exponential Backoff** – Handling transient failures gracefully.

### Messaging

Messaging is a key concept in several architectural styles:
- Event-driven architecture (EDA)
- Microservices
- Message-driven architecture (MDA)

In general, messaging is a powerful concept that allows for the decoupling and scalability of systems and it’s used in different architectural styles to improve the flexibility and scalability of the system by allowing for loose coupling between components and making it easier to add new features or modify existing ones.

It is often implemented with a Message Queue and Broker like Apache Kafka, RabbitMQ, Azure ServiceBus.
