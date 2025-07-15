# Apache Kafka

#technology

Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant, and scalable real-time data pipelines and streaming applications.

---
## Resources

- **Deep Dives**
	- [Confluent.io Kafka Deep Dive Topics](https://developer.confluent.io/learn/)

- **Docs and References**
	- [Kafka Official Documentation](https://kafka.apache.org/documentation/)
	- [Confluent.io - Official Managed Kafka Reference](https://developer.confluent.io/)

---
## Core Concepts

- **Topic**: A named stream of records (like a category or feed name).
- **Producer**: An application that publishes (writes) data to topics.
- **Consumer**: An application that subscribes to topics to read data.
- **Partition**: Topics are split into partitions for parallelism and scalability.
- **Broker**: A Kafka server that stores data and serves clients.
- **Consumer Group**: A group of consumers coordinating to consume topic partitions collectively.
- **Offset**: A unique identifier for each record within a partition, used to track consumption progress.
- **Typical use cases**:
	- **Real-time data pipelines** (ingesting and moving data between systems)
	- **Stream processing** (transforming or enriching data streams)
	- **Event sourcing and messaging** (decoupling microservices)
	- **Log aggregation** and monitoring
	- **High-throughput, fault-tolerant event storage**

---

## KRaft and ZooKeeper

- **ZooKeeper**
	- **Role**: Originally, Kafka relied on **Apache ZooKeeper** to manage cluster metadata such as broker membership, topic configurations, partition assignments, and controller election.
	- **Challenges**:
	    - Operational complexity (separate ZooKeeper cluster).
	    - Latency and inconsistency issues.
	    - Difficult to scale and maintain.
- **KRaft (Kafka Raft Metadata Mode)**
	- **Introduced**: As part of Kafka’s effort to remove the dependency on ZooKeeper.
	- **Based on**: A Raft consensus protocol implementation built into Kafka.
	- **Key Features**:
	    - Kafka brokers themselves manage metadata.
	    - One broker acts as the **controller** (leader), replicating metadata logs to others.
	    - Improved consistency, scalability, and simpler architecture.
	    - Easier deployment (no separate ZooKeeper cluster).

---