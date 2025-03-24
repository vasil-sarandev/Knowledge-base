[Back to front page](topics/backend-software-engineering/backend-software-engineering.md)

# NoSQL Databases

NoSQL databases are a category of database management systems designed for handling unstructured, semi-structured, or rapidly changing data. 

Unlike traditional relational databases, which use fixed schemas and SQL for querying, NoSQL databases offer flexible data models and can be classified into several types:

NoSQL databases are often used for applications requiring high scalability, flexibility, and performance, such as real-time analytics, content management systems, and distributed data storage.

## Document Databases

Store data in JSON, BSON, or XML formats, allowing for flexible and hierarchical data structures (e.g., MongoDB, CouchDB).

### MongoDB

MongoDB is a NoSQL, open-source database designed for storing and managing large volumes of unstructured or semi-structured data. 

It uses a document-oriented data model where data is stored in BSON (Binary JSON) format, which allows for flexible and hierarchical data representation. Unlike traditional relational databases, MongoDB doesn’t require a fixed schema, making it suitable for applications with evolving data requirements or varying data structures. It supports horizontal scaling through sharding and offers high availability with replica sets. MongoDB is commonly used for applications requiring rapid development, real-time analytics, and large-scale data handling, such as content management systems, IoT applications, and big data platforms.

[MongoDB Website](https://www.mongodb.com/)

## Key-Value Stores

Store data as key-value pairs, suitable for high-speed read and write operations.

### Redis

Redis is an open-source, in-memory data structure store known for its speed and versatility. 

It supports various data types, including strings, lists, sets, hashes, and sorted sets, and provides functionalities such as caching, session management, real-time analytics, and message brokering. Redis operates as a key-value store, allowing for rapid read and write operations, and is often used to enhance performance and scalability in applications. It supports persistence options to save data to disk, replication for high availability, and clustering for horizontal scaling. 

Redis is widely used for scenarios requiring low-latency access to data and high-throughput performance.

[Official Website - Redis](https://redis.io/)

## Column Databases

Store data in columns rather than rows, which is useful for handling large volumes of data and wide columnar tables.

### Apache Cassandra

Apache Cassandra is a highly scalable, distributed NoSQL database designed to handle large amounts of structured data across multiple commodity servers. It provides high availability with no single point of failure, offering linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure. 

Cassandra uses a masterless ring architecture, where all nodes are equal, allowing for easy data distribution and replication. It supports flexible data models and can handle both unstructured and structured data. Cassandra excels in write-heavy environments and is particularly suitable for applications requiring high throughput and low latency. Its data model is based on wide column stores, offering a more complex structure than key-value stores. 

Widely used in big data applications, Cassandra is known for its ability to handle massive datasets while maintaining performance and reliability.

[Apache Cassandra](https://cassandra.apache.org/_/index.html)

## Graph Databases

Optimize the storage and querying of data with complex relationships using graph structures 

### Neo4j

Neo4j is a highly popular open-source graph database designed to store, manage, and query data as interconnected nodes and relationships. 

Unlike traditional relational databases that use tables and rows, Neo4j uses a graph model where data is represented as nodes (entities) and edges (relationships), allowing for highly efficient querying of complex, interconnected data. 

It supports Cypher, a declarative query language specifically designed for graph querying, which simplifies operations like traversing relationships and pattern matching. 

Neo4j is well-suited for applications involving complex relationships, such as social networks, recommendation engines, and fraud detection, where understanding and leveraging connections between data points is crucial.

[Official - Neo4j](https://neo4j.com/)

