[Back to Databases in depth frontpage](./index.md)

### Migrations

##### Available Resources:

- [What are Database Migrations?](https://www.prisma.io/dataguide/types/relational/what-are-database-migrations)

#### Introduction

Database migrations are a version-controlled way to manage and apply incremental changes to a database schema over time, allowing developers to modify the database structure (e.g., adding tables, altering columns) without affecting existing data.

They ensure that the database evolves alongside application code in a consistent, repeatable manner across environments (e.g., development, testing, production), while maintaining compatibility with older versions of the schema.

Migrations are typically written in SQL or a database-agnostic language, and are executed using migration tools like Liquibase, Flyway, or built-in ORM features such as Django or Rails migrations.
