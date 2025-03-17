[Back to Scaling Databases](12-scaling-databases.md)

### CAP Theorem

#### Introduction

The CAP Theorem, also known as Brewer’s Theorem, is a fundamental principle in distributed database systems.

It states that in a distributed system, it’s impossible to simultaneously guarantee all three of the following properties: Consistency (all nodes see the same data at the same time), Availability (every request receives a response, without guarantee that it contains the most recent version of the data), and Partition tolerance (the system continues to operate despite network failures between nodes).

According to the theorem, a distributed system can only strongly provide two of these three guarantees at any given time. This principle guides the design and architecture of distributed systems, influencing decisions on data consistency models, replication strategies, and failure handling.

Understanding the CAP Theorem is crucial for designing robust, scalable distributed systems and for choosing appropriate database solutions for specific use cases in distributed computing environments.
