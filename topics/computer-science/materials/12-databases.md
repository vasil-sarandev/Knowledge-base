[Back to Computer Science frontpage](computer-science.md)

# Databases

A database is a collection of useful data of one or more related organizations structured in a way to make data an asset to the organization. A database management system is a software designed to assist in maintaining and extracting large collections of data in a timely fashion.

## Locking

Locks are used to prevent data from being modified by multiple processes at the same time. 

This is important because if two processes are modifying the same data at the same time, the data can become corrupted. Locks are used to prevent this from happening.

[Locking in Databases and Isolation Mechanisms](https://medium.com/inspiredbrilliance/what-are-database-locks-1aff9117c290)

## ACID Model

ACID is an acronym representing four key properties that guarantee reliable processing of database transactions. 

- **Atomicity** - ensures that a transaction is treated as a single, indivisible unit that either completes entirely or fails completely.
- **Consistency** - maintains the database in a valid state before and after the transaction.
- **Isolation** - ensures that concurrent transactions do not interfere with each other, appearing to execute sequentially.
- **Durability** - guarantees that once a transaction is committed, it remains so, even in the event of system failures.

[What is ACID Compliant Database?](https://retool.com/blog/whats-an-acid-compliant-database/)

## BASE Model

The rise in popularity of NoSQL databases provided a flexible and fluidity with ease to manipulate data and as a result, a new database model was designed, reflecting these properties. **BASE** stands for:

- **B**asically **A**vailable — The system guarantees availability, even if not all data is consistent at all times.
- **S**oft state — The system's state can change over time, even without input, due to eventual consistency.
- **E**ventual consistency — The system will become consistent over time, but it does not guarantee immediate consistency after updates.

**BASE** is often used in distributed systems where availability and partition tolerance are prioritized over strict consistency.

## CAP Theorem

The CAP Theorem is a fundamental principle in distributed database systems. It states that a distributed system can only guarantee two of the three:

- **Consistency:** All nodes show the same data.    
- **Availability:** Every request gets a response.
- **Partition Tolerance:** Operates despite network failures.

[CAP Theorem - Wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)

## Indexes

Database indexes are data structures that improve the speed of data retrieval operations in a database management system. They work similarly to book indexes, providing a quick way to look up information based on specific columns or sets of columns.

Indexes create a separate structure that holds a reference to the actual data, allowing the database engine to find information without scanning the entire table.

While indexes significantly enhance query performance, especially for large datasets, they come with trade-offs. They increase storage space requirements and can slow down write operations as the index must be updated with each data modification.

## Transactions

In short, a database transaction is a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. In other words, there's never a case where only half of the operations are performed and the results saved.

Transactions adhere to the ACID properties.

[What are Transactions?](https://fauna.com/blog/database-transaction)

## Stored Procedures

Stored Procedures are created to perform one or more DML operations on Database. It is nothing but the group of SQL statements that accepts some input in the form of parameters and performs some task and may or may not returns a value.

```SQL
CREATE PROCEDURE transfer_money(sender_id INT, receiver_id INT, amount DECIMAL)
BEGIN
  UPDATE accounts SET balance = balance - amount WHERE id = sender_id;
  UPDATE accounts SET balance = balance + amount WHERE id = receiver_id;
END;

...

CALL transfer_money(1, 2, 100);
```

[SQL Stored Procedures](https://www.programiz.com/sql/stored-procedures)

## Database Federation

Federation (or functional partitioning) splits up databases by function. The federation architecture makes several distinct physical databases appear as one logical database to end-users. As a result different databases (even with different schemas or engines) are queried as if they are one.

[Database Federation](https://dev.to/karanpratapsingh/system-design-the-complete-course-10fo#database-federation)

## Database Replication

Database replication is the process of creating and maintaining multiple copies of the same data across different locations or nodes in a distributed system. It enhances data availability, reliability, and performance by ensuring that data remains accessible even if one or more nodes fail.

Replication can be synchronous (changes are applied to all copies simultaneously) or asynchronous (changes are propagated after being applied to the primary copy).

[Database Replication](https://dev.to/karanpratapsingh/system-design-the-complete-course-10fo#database-replication)

## Database Sharding

 A method where a database is split into smaller, more manageable parts (shards), which are distributed across multiple servers, enhancing search efficiency and overall performance.

Database Sharding is a horizontal scaling strategy.

[Sharding](https://dev.to/karanpratapsingh/system-design-the-complete-course-10fo#sharding)


