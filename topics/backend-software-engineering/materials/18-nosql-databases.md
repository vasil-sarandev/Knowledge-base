[Back to front page](backend-software-engineering.md)

# NoSQL Databases

NoSQL databases are a category of database management systems designed for handling unstructured, semi-structured, or rapidly changing data. 

Unlike traditional relational databases, which use fixed schemas and SQL for querying, NoSQL databases offer flexible data models and can be classified into several types:

- **Key-Value Stores**: Store data as key-value pairs, suitable for high-speed read and write operations (e.g., Redis, Riak).
- **Column-Family Stores**: Store data in columns rather than rows, which is useful for handling large volumes of data and wide columnar tables (e.g., Apache Cassandra, HBase).
- **Graph Databases**: Optimize the storage and querying of data with complex relationships using graph structures (e.g., Neo4j, Amazon Neptune).

NoSQL databases are often used for applications requiring high scalability, flexibility, and performance, such as real-time analytics, content management systems, and distributed data storage.

## Document Databases

Store data in JSON, BSON, or XML formats, allowing for flexible and hierarchical data structures (e.g., MongoDB, CouchDB).
### MongoDB

MongoDB is a NoSQL, open-source database designed for storing and managing large volumes of unstructured or semi-structured data. 

It uses a document-oriented data model where data is stored in BSON (Binary JSON) format, which allows for flexible and hierarchical data representation. Unlike traditional relational databases, MongoDB doesn’t require a fixed schema, making it suitable for applications with evolving data requirements or varying data structures. It supports horizontal scaling through sharding and offers high availability with replica sets. MongoDB is commonly used for applications requiring rapid development, real-time analytics, and large-scale data handling, such as content management systems, IoT applications, and big data platforms.

[MongoDB Website](https://www.mongodb.com/)

##