[Back to front page](backend-software-engineering.md)

# # Message Brokers

Message brokers are intermediaries that facilitate communication between distributed systems or components by receiving, routing, and delivering messages. They enable asynchronous message passing, decoupling producers (senders) from consumers (receivers), which improves scalability and flexibility. 

Common functions of message brokers include message queuing, load balancing, and ensuring reliable message delivery through features like persistence and acknowledgment. 

Popular message brokers include Apache Kafka, RabbitMQ, and ActiveMQ, each offering different features and capabilities suited to various use cases like real-time data processing, event streaming, or task management.

## Apache Kafka

Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant data processing. It acts as a message broker, allowing systems to publish and subscribe to streams of records, similar to a distributed commit log. 

Kafka is highly scalable and can handle large volumes of data with low latency, making it ideal for real-time analytics, log aggregation, and data integration. 

It features topics for organizing data streams, partitions for parallel processing, and replication for fault tolerance, enabling reliable and efficient handling of large-scale data flows across distributed systems.

[Official Quickstart - Apache Kafka](https://kafka.apache.org/quickstart)

## RabbitMQ

RabbitMQ is an open-source message broker that facilitates the exchange of messages between distributed systems using the Advanced Message Queuing Protocol (AMQP). 

It enables asynchronous communication by queuing and routing messages between producers and consumers, which helps decouple application components and improve scalability and reliability. 

RabbitMQ supports features such as message durability, acknowledgments, and flexible routing through exchanges and queues. It is highly configurable, allowing for various messaging patterns, including publish/subscribe, request/reply, and point-to-point communication. 

RabbitMQ is widely used in enterprise environments for handling high-throughput messaging and integrating heterogeneous systems.

[Official RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
## Available Resources

- [What are Message Brokers?](https://www.ibm.com/topics/message-brokers)