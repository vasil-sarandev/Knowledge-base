# MongoDB

#technology

MongoDB is a NoSQL document database designed for ease of development and horizontal scaling.

---
## Core Concepts

- A **document** is a key-value data structure (similar to a JSON object).
- Documents are stored in **collections**, which are analogous to tables in relational databases.
- Field values can include other documents, arrays, or arrays of documents.

---
## Schema Design: Embedding vs Referencing

When modeling data, choose between **embedding** and **referencing** based on how your application accesses related data.

### Embedded Documents (Denormalized)

- Store related data in a single document.
- Enables fast, one-operation reads.
- Best when related data is frequently read together.
- Watch out for large document sizes and duplication across documents.
### Referenced Documents (Normalized)

- Use references (e.g., `customerId` in `orders`) to link documents across collections.
- Better when data is reused in many places and updated independently.
- Requires additional queries (or `$lookup`) to resolve references.

For most MongoDB use cases, **denormalized (embedded) models are recommended**, unless:

- Data duplication leads to frequent updates across many documents.
- Referenced data is large or shared across many entities.

[Official Reference for Schema Design / Data Modeling - MongoDB](https://www.mongodb.com/docs/manual/data-modeling/)

---
## Resources

- **Deep Dives** 
	- [Aggregation - MongoDB Manual](https://www.mongodb.com/docs/manual/aggregation/)
	- [Replication - MongoDB Manual](https://www.mongodb.com/docs/manual/replication/)
	- [Sharding - MongoDB Manual](https://www.mongodb.com/docs/manual/sharding/) 

- **Docs & References** 
	- [MongoDB documentation](https://www.mongodb.com/docs/manual/)
	- [MongoDB shell documentation](https://www.mongodb.com/docs/mongodb-shell/)
	- [Course: Schema Design Patterns and Antipatterns](https://learn.mongodb.com/courses/schema-design-patterns-and-antipatterns)