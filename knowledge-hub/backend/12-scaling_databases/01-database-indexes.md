[Back to Scaling Databases](./index.md)

### Database Indexes

#### Introduction

Database indexes are data structures that improve the speed of data retrieval operations in a database management system. They work similarly to book indexes, providing a quick way to look up information based on specific columns or sets of columns.

Indexes create a separate structure that holds a reference to the actual data, allowing the database engine to find information without scanning the entire table.

While indexes significantly enhance query performance, especially for large datasets, they come with trade-offs. They increase storage space requirements and can slow down write operations as the index must be updated with each data modification.

Common types include B-tree indexes for general purpose use, bitmap indexes for low-cardinality data, and hash indexes for equality comparisons.

Proper index design is crucial for optimizing database performance, balancing faster reads against slower writes and increased storage needs.

##### Available resources:

[What is a database index?](https://www.codecademy.com/article/sql-indexes)
