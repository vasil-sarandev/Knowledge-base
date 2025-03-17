[Back to Scaling Databases](12-scaling-databases.md)

### Data Replication

##### Available resources:

[Data Replication - IBM](https://www.ibm.com/topics/data-replication)

#### Introduction

Data replication is the process of creating and maintaining multiple copies of the same data across different locations or nodes in a distributed system. It enhances data availability, reliability, and performance by ensuring that data remains accessible even if one or more nodes fail.

Replication can be synchronous (changes are applied to all copies simultaneously) or asynchronous (changes are propagated after being applied to the primary copy).

It’s widely used in database systems, content delivery networks, and distributed file systems. Replication strategies include master-slave, multi-master, and peer-to-peer models.

While improving fault tolerance and read performance, replication introduces challenges in maintaining data consistency across copies and managing potential conflicts.

Effective replication strategies must balance consistency, availability, and partition tolerance, often in line with the principles of the CAP theorem.
