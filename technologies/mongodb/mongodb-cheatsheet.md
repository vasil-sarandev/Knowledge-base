# MongoDB Cheatsheet

---
## Document Database

A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

### Collections

MongoDB stores *Documents* in *Collections* which are analogous to tables in relational databases.

### Key Features 

- #### **High Performance**
	MongoDB provides high performance data persistence. In particular: 
	- Support for embedded data models reduces I/O activity on database system.
	- Indexes support faster queries and can include keys from embedded documents and arrays.
- #### Query API
	The MongoDB Query API supports read and write operations (CRUD) as well as *Data Aggregation* and *Text Search*.
- #### **High Availability**
	MongoDB's replication facility, called *Replica Set*, provides *automatic failover* and *data redundancy*.
- #### **Horizontal Scalability** 
	MongoDB provides horizontal scalability as part of its _core_ functionality. *Sharding* distributes the data across a cluster of machines.

---

## MongoDB shell - mongosh

The MongoDB Shell, `mongosh`, is a JavaScript and Node.js environment for interacting with MongoDB deployments in [Atlas](https://www.mongodb.com/docs/atlas/)  , locally, or on another remote host. It is used to test queries and interact with the data in your MongoDB database.

### Basic commands

- #### `mongosh`
	Connects to the database. You can pass the address as an argument like: `mongosh "mongodb://localhost:27017"`
- #### `db`
	Shows the current database. *test* is the default one. 
- `use <database>`
	Switches to a specific database or creates it and switches to it.
- `db.getCollectionNames()`
- `db.createCollection()`

---

## Query and Projection Operators

#### Comparison

|                                                                                                   |                                                                     |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`$eq`](https://www.mongodb.com/docs/manual/reference/operator/query/eq/#mongodb-query-op.-eq)    | Matches values that are equal to a specified value.                 |
| [`$gt`](https://www.mongodb.com/docs/manual/reference/operator/query/gt/#mongodb-query-op.-gt)    | Matches values that are greater than a specified value.             |
| [`$gte`](https://www.mongodb.com/docs/manual/reference/operator/query/gte/#mongodb-query-op.-gte) | Matches values that are greater than or equal to a specified value. |
| [`$in`](https://www.mongodb.com/docs/manual/reference/operator/query/in/#mongodb-query-op.-in)    | Matches any of the values specified in an array.                    |
| [`$lt`](https://www.mongodb.com/docs/manual/reference/operator/query/lt/#mongodb-query-op.-lt)    | Matches values that are less than a specified value.                |
| [`$lte`](https://www.mongodb.com/docs/manual/reference/operator/query/lte/#mongodb-query-op.-lte) | Matches values that are less than or equal to a specified value.    |
| [`$ne`](https://www.mongodb.com/docs/manual/reference/operator/query/ne/#mongodb-query-op.-ne)    | Matches all values that are not equal to a specified value.         |
| [`$nin`](https://www.mongodb.com/docs/manual/reference/operator/query/nin/#mongodb-query-op.-nin) | Matches none of the values specified in an array.                   |

**Basic syntax** 

`{ field: { $operator: value } }`

```javascript
db.inventory.find({quantity: {$gt: 300}}) // -> quantity > 300
db.inventory.find({quantity: {$in: [5,10,15]}}) // -> either 5,10, or 15
```

#### Logical

|Name|Description|
|---|---|
|[`$and`](https://www.mongodb.com/docs/manual/reference/operator/query/and/#mongodb-query-op.-and)|Joins query clauses with a logical `AND` returns all documents that match the conditions of both clauses.|
|[`$not`](https://www.mongodb.com/docs/manual/reference/operator/query/not/#mongodb-query-op.-not)|Inverts the effect of a query predicate and returns documents that do _not_ match the query predicate.|
|[`$nor`](https://www.mongodb.com/docs/manual/reference/operator/query/nor/#mongodb-query-op.-nor)|Joins query clauses with a logical `NOR` returns all documents that fail to match both clauses.|
|[`$or`](https://www.mongodb.com/docs/manual/reference/operator/query/or/#mongodb-query-op.-or)|Joins query clauses with a logical `OR` returns all documents that match the conditions of either clause.|
**Basic Syntax**

```javascript
db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
// $and can be shorthanded and is functionally equivalent to
db.inventory.find( { price: { $ne: 1.99, $exists: true } } )

```

### Element

|Name|Description|
|---|---|
|[`$exists`](https://www.mongodb.com/docs/manual/reference/operator/query/exists/#mongodb-query-op.-exists)|Matches documents that have the specified field.|
|[`$type`](https://www.mongodb.com/docs/manual/reference/operator/query/type/#mongodb-query-op.-type)|Selects documents if a field is of the specified type.|