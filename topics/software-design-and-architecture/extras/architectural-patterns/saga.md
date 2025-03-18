[Back to Architectural Patterns](08-architectural-patterns.md)
## Saga 

Some business transactions span multiple microservices. Since microservices typically span different databases we can't execute the transaction as a simple local ACID transaction.

The solution is to implement each business transaction that spans multiple services as a saga. A saga is a sequence of local transactions. Each local transaction updates the database and publishes a message or event to trigger the next local transaction in the saga. If a local transaction fails because it violates a business rule then the saga executes a series of compensating transactions that undo the changes that were made by the preceding local transactions.
### Available Resources

- [Saga pattern - microservices.io](https://microservices.io/patterns/data/saga.html)