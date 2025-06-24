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
- #### `use <database>`
	Switches to a specific database or creates it and switches to it.
- #### `db.getCollectionNames()`
- #### `db.createCollection()`

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

```javascript
db.inventory.find( { price: { $exists: true } } );
db.inventory.find( { price: { $type: 'double' } } );
```

---

## Basic CRUD

### Insert

The MongoDB shell provides the following methods to insert documents into a collection:

- To insert a single document, use [`db.collection.insertOne()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/#mongodb-method-db.collection.insertOne)
- To insert multiple documents, use [`db.collection.insertMany()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/#mongodb-method-db.collection.insertMany)

```javascript
db.movies.insertOne({title: "The Favourite", genres: [ "Drama", "History" ]})
db.movies.insertMany([{title: "The Favourite", genres: ["Drama"], ...}])
```

### Read

Use the [`db.collection.find()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find) method in the MongoDB Shell to query documents in a collection.

```javascript
db.movies.find( { "title": "Titanic" } );
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )
db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } )
db.movies.find( { year: 2010, $or: [ { "awards.wins": { $gte: 5 } }, { genres: "Drama" } ]
} )
```

### Update

The MongoDB shell provides the following methods to update documents in a collection:

- To update a single document, use [`db.collection.updateOne()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne)
- To update multiple documents, use [`db.collection.updateMany()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany)
- To replace a document, use [`db.collection.replaceOne()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/#mongodb-method-db.collection.replaceOne)

```javascript
db.movies.updateOne( { title: "Twilight" }, { $set: {title: "Twilight 2"} })
```

### Delete
The MongoDB shell provides the following methods to delete documents from a collection:

- To delete multiple documents, use [`db.collection.deleteMany()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/#mongodb-method-db.collection.deleteMany)
- To delete a single document, use [`db.collection.deleteOne()`.](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne)

```javascript
db.movies.deleteMany({}) // deletes all documents in collection
db.movies.deleteMany( { title: "Titanic" } )
db.movies.deleteOne( { cast: "Brad Pitt" } )
```

---

## Aggregation Operations

Aggregation operations process multiple documents and return computed results. You can use aggregation operations to:

- Group values from multiple documents together.
- Perform operations on the grouped data to return a single result.
- Analyze data changes over time.

**Example**

```javascript
db.orders.aggregate( [
   // Stage 1: Filter pizza order documents by pizza size
   { $match: { size: "medium" } },
   // Stage 2: Group remaining documents by pizza name and calculate total quantity
   { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } }
] )
```

---

## Indexes

Indexes support efficient execution of queries in MongoDB. Without indexes, MongoDB must scan every document in a collection to return query results. If an appropriate index exists for a query, MongoDB uses the index to limit the number of documents it must scan.

Although indexes improve query performance, adding an index has negative performance impact for write operations. For collections with a high write-to-read ratio, indexes are expensive because each insert must also update any indexes.

Example scenario: A human resources department often needs to look up employees by employee ID. You can create an index on the employee ID field to improve query performance.

---

## Transactions

In MongoDB, an operation on a single document is atomic. Because you can use embedded documents and arrays to capture relationships between data in a single document structure instead of normalizing across multiple documents and collections, this single-document atomicity obviates the need for distributed transactions for many practical use cases.

For situations that require atomicity of reads and writes to multiple documents (in a single or multiple collections), MongoDB supports distributed transactions. With distributed transactions, transactions can be used across multiple operations, collections, databases, documents, and shards.

---

## Data Modelling

TODO!!!

---

## Replication

A _replica set_ in MongoDB is a group of [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) processes that maintain the same data set. Replica sets provide redundancy and [high availability](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-high-availability), and are the basis for all production deployments. 

**How Replication works in MongoDB**

The primary node receives all write operations. A replica set can have only one primary capable of confirming writes with `{ w: "majority" }` write concern.

Secondaries replicate the primary's oplog and apply the operations to their data sets asynchronously. By having the secondaries' data sets reflect the primary's data set, the replica set can continue to function despite the failure of one or more members. 

If the primary is unavailable, an eligible secondary will hold an election to elect itself the new primary.

---
## Sharding

*Sharding* is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.

Database systems with large data sets or high throughput applications can challenge the capacity of a single server. For example, high query rates can exhaust the CPU capacity of the server. Working set sizes larger than the system's RAM stress the I/O capacity of disk drives.

MongoDB natively supports horizontal scaling through *Sharding*.

