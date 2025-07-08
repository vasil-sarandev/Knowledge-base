# Apache Kafka

#technology

Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant, and scalable real-time data pipelines and streaming applications.

Typical use cases:

- **Real-time data pipelines** (ingesting and moving data between systems)
- **Stream processing** (transforming or enriching data streams)
- **Event sourcing and messaging** (decoupling microservices)
- **Log aggregation** and monitoring
- **High-throughput, fault-tolerant event storage**

---
## Core Concepts

- **Topic**: A named stream of records (like a category or feed name).
- **Producer**: An application that publishes (writes) data to topics.
- **Consumer**: An application that subscribes to topics to read data.
- **Partition**: Topics are split into partitions for parallelism and scalability.
- **Broker**: A Kafka server that stores data and serves clients.
- **Consumer Group**: A group of consumers coordinating to consume topic partitions collectively.
- **Offset**: A unique identifier for each record within a partition, used to track consumption progress.

---
## Resources

- **Deep Dives**
	- [Confluent.io Kafka Deep Dive Topics](https://developer.confluent.io/learn/)

- **Docs and References**
	- [Kafka Official Documentation](https://kafka.apache.org/documentation/)
	- [Confluent.io - Official Managed Kafka Reference](https://developer.confluent.io/)
