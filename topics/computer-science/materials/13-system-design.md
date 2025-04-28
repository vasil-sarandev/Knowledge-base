[Back to Computer Science frontpage](computer-science.md)

# System Design

System design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. It is a very broad topic, and there are many ways to approach it.

## Horizontal vs Vertical scaling

Horizontal scaling is the process of adding more machines to your system. This is also known as scaling out. 

Vertical scaling is the process of adding more resources(CPU, RAM, ...etc) to a single machine. This is also known as scaling up.

[Scaling Horizontally vs. Scaling Vertically](https://www.digitalocean.com/resources/article/horizontal-scaling-vs-vertical-scaling)

## Load Balancing

Load balancing is the process of distributing network or application traffic across a cluster of servers. Load balancing is used to improve responsiveness and reliability of applications, maximize throughput, minimize response time, and avoid overload of any single server.

[Load Balancers 101](https://www.youtube.com/watch?v=galcDRNd5Ow)

## Clustering

At a high level, a computer cluster is a group of two or more computers, or nodes, that run in parallel to achieve a common goal. 

This allows workloads consisting of a high number of individual, parallelizable tasks to be distributed among the nodes in the cluster. As a result, these tasks can leverage the combined memory and processing power of each computer to increase overall performance.

[System Design: Clustering](https://dev.to/karanpratapsingh/system-design-clustering-3726)

## Load Balancing vs Clustering

Load balancing shares some common traits with clustering, but they are different processes. Clustering provides redundancy and boosts capacity and availability. 

Servers in a cluster are aware of each other and work together toward a common purpose. But with load balancing, servers are not aware of each other. Instead, they react to the requests they receive from the load balancer.

## Message Queues and Message Brokers

**Message Queues** are simple systems that **store and forward messages** between a sender and a receiver, typically using **FIFO** (First In, First Out) ordering. E.x: 

**Message Brokers** are more advanced systems that **route, transform, and manage messages** between multiple applications or components.

Both are commonly used to enable **asynchronous communication** and to **decouple systems**, improving scalability, fault tolerance, and flexibility.

Most popular implementations are RabbitMQ, Apache Kafka & Amazon SQS.

[Message Queues - System Design](https://dev.to/karanpratapsingh/system-design-the-complete-course-10fo#message-queues)

## Architectural Styles

Architectural styles define the overall organization of a software system.

- **Client-Server**: Clients send requests to a server for processing.
- **Monolithic**: A single, integrated system with high coupling.
- **Service-Oriented**: A collection of self-contained services.
- **Layered**: Divides the system into layers with specific responsibilities.
- **Microservices**: Small, independent services that can be developed and deployed independently.
- **Event-Driven**: The system reacts to events rather than continuously polling for changes.
- **Component-based**: Systems are composed of reusable components.
- **Domain-Driven Design**: Focuses on the business domain and entities.
- **Peer-to-Peer**: Nodes act as both clients and servers.
- **Hexagonal**: Loosely coupled components that interact with their environment through ports and adapters.

