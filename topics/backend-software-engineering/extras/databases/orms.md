[Back to Databases in depth frontpage](11-databases-in-depth.md)

## ORMs (Object Relational Mapping)

Object-Relational Mapping (ORM) is a programming technique that allows developers to interact with a relational database using object-oriented programming concepts.

ORM frameworks map database tables to classes and rows to objects, enabling developers to perform database operations through objects rather than writing raw SQL queries. This abstraction simplifies data manipulation and improves code maintainability by aligning database interactions with the application’s object model. ORM tools handle the translation between objects and database schemas, manage relationships, and often provide features like lazy loading and caching.

Popular ORM frameworks include:

- TypeORM, Sequelize, Prisma for NodeJS
- Hibernate for Java
- Entity Framework for .NET,
- SQLAlchemy for Python.

ORMs are technically the layer between the OOP language and the database.

```SQL
"SELECT id, name, email, country, phone_number FROM users WHERE id = 20"
--Looks like this in an ORM:
users.getById(20)
```

### Pros of using ORMs

- It speeds up development time for teams.
- Decreases the cost of development.
- Handles the logic required to interact with databases.
- Improves security. ORM tools are built to eliminate the possibility of SQL injection attacks.
- You write less code when using ORM tools than with SQL.

### Cons of using ORMs

- Learning how to use ORM tools can be time consuming.
- They are likely not going to perform better when very complex queries are involved.
- ORMs are generally slower than using SQL.

### Available Resources:

- [What is an ORM, how does it work, and how should I use one?](https://stackoverflow.com/a/1279678)
- [What is an ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/)
