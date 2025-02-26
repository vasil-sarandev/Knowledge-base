[Back to Databases in depth frontpage](./index.md)

### ACID (Atomicity Consitency Isolation Durabiltiy)

#### Introduction

ACID is an acronym representing four key properties that guarantee reliable processing of database transactions. It stands for Atomicity, Consistency, Isolation, and Durability.

- Atomicity ensures that a transaction is treated as a single, indivisible unit that either completes entirely or fails completely.
- Consistency maintains the database in a valid state before and after the transaction.
- Isolation ensures that concurrent transactions do not interfere with each other, appearing to execute sequentially.
- Durability guarantees that once a transaction is committed, it remains so, even in the event of system failures.

These properties are crucial in maintaining data integrity and reliability in database systems, particularly in scenarios involving multiple, simultaneous transactions or where data accuracy is critical, such as in financial systems or e-commerce platforms.

##### Available Resources:

- [What is ACID Compliant Database?](https://retool.com/blog/whats-an-acid-compliant-database/)
- [What is ACID Compliance?: Atomicity, Consistency, Isolation](https://fauna.com/blog/what-is-acid-compliance-atomicity-consistency-isolation)
