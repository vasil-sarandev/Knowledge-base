[Back to Databases in depth frontpage](./index.md)

### Transactions

#### Introduction

In database systems, a transaction is a series of operations that are executed as a single, atomic unit to ensure data integrity and consistency.

Transactions adhere to the ACID properties:

- Atomicity ensures all operations complete successfully or none are applied
- Consistency maintains the database’s valid state
- Isolation prevents transactions from interfering with each other - Durability guarantees that once a transaction is committed, its changes are permanent.

These properties collectively ensure that databases handle concurrent operations reliably and maintain accurate and consistent data even in the face of failures.

##### Available Resources:

- [What are Transactions?](https://fauna.com/blog/database-transaction)
