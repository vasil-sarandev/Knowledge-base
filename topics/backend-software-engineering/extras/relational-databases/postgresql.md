[Back to Relational Databases](../index.md)

# PostgreSQL

##### Table of Contents

1. [Introduction](#postgresql)
2. [Basics](#postgresql-basics)
   1. [PgAdmin](#pgadmin)
   2. [PSQL](#using-psql)
3. [Transactions](#transactions)
4. [Importing & Exporting Data](#import--export-data)

##### Available Resources:

- [Tutorial: PostgreSQL - Full Tutorial for Beginners](https://www.postgresqltutorial.com/)
- [Roadmap: Dedicated PostgreSQL DBA Roadmap](https://roadmap.sh/postgresql-dba)

### Introduction

PostgreSQL is an advanced, open-source relational database management system (RDBMS) known for its robustness, extensibility, and standards compliance. It supports a wide range of data types and advanced features, including complex queries, foreign keys, and full-text search. PostgreSQL is highly extensible, allowing users to define custom data types, operators, and functions. It supports ACID (Atomicity, Consistency, Isolation, Durability) properties for reliable transaction processing and offers strong support for concurrency and data integrity. Its capabilities make it suitable for various applications, from simple web apps to large-scale data warehousing and analytics solutions.

### PostgreSQL basics

PostgreSQL runs as a server on the machine. When the specific version is installed PG 14, PG17, ...etc, a power user and his password are specified and the port where the server runs.

There are 2 ways to connect to the server:

#### PgAdmin

PgAdmin (4) is the GUI that allows us to connect to the PostgreSQL servers. It's pretty intuitive, you can add Servers for multiple connections and once you authenticate, you can run SQL queries, see the Schema and the tables for the db and pretty much do anything you can do with PSQL.

![pgAdmin4](pgAdmin.png)

#### Using PSQL

**PSQL** is a terminal-based front-end to PostgreSQL. It enables you to type in queries interactively, issue them to PostgreSQL, and see the query results. Alternatively, input can be from a file or from command line arguments. In addition, psql provides a number of meta-commands and various shell-like features to facilitate writing scripts and automating a wide variety of tasks.

The PSQL file lives in the applications folder for the particular PostgreSQL version we've installed. Some setups are needed to have it run correctly. Here's the part of my system user's terminal config regarding PostgreSQL (.zshrc)

```
export PATH=$PATH:/Library/PostgreSQL/14/bin #PG 14: pgsql, pg-restore, etc
# POSTGRES STUFF. 5433 is port for PG14. 5432 is port for PG17 in my current setup.
export PGUSER=postgres
export PGPORT=5433;
```

**Some useful PSQL commands**

1. Connect to PostgreSQL database
   The following command connects to a database under a specific user. After pressing Enter PostgreSQL will ask for the password of the user.

   ```
   psql -d database -U user -W
   ```

2) Switch connection to a new database
   Once you are connected to a database, you can switch the connection to a new database under a user-specified by user. The previous connection will be closed. If you omit the user parameter, the current user is assumed.

   ```
   \c dbname username
   ```

3) List available databases
   To list all databases in the current PostgreSQL database server, you use \l command:
   ```
   \l
   ```
4) List available tables
   To list all tables in the current database, you use the \dt command:

   ```
   \dt
   ```

5) Describe a table
   To describe a table such as a column, type, or modifiers of columns, you use the following command:

   ```
   \d table_name
   ```

6) List available schema
   To list all schemas of the currently connected database, you use the \dn command.

   ```
   \dn
   ```

7) List available functions
   To list available functions in the current database, you use the \df command.

   ```
   \df
   ```

8. List available views
   To list available views in the current database, you use the \dv command.

   ```
   \dv
   ```

9. List users and their roles
   To list all users and their assigned roles, you use \du command:

   ```
   \du
   ```

10) Execute the previous command
    To retrieve the current version of PostgreSQL server, you use the version() function as follows:

    ```
    SELECT version();
    ```

    Now, if you want to save time typing the previous command again, you can use \g command to execute the previous command:

    ```
    \g
    ```

### Transactions

A database transaction is a single unit of work that consists of one or more operations.

A classical example of a transaction is a bank transfer from one account to another. A complete transaction must ensure a balance between the sender and receiver accounts.

This implies that if the sender account transfers X amount, the receiver receives exactly X amount, neither more nor less.

To start a transaction explicitly, you execute either one of the following statements:

`BEGIN TRANSACTION;` or `BEGIN WORK` or `BEGIN`.

Example transaction:

```SQL
BEGIN;

INSERT INTO accounts(name,balance)
VALUES('Alice',10000);
```

From the current session, you can see the change by retrieving data from the accounts table:

```SQL
SELECT
    id,
    name,
    balance
FROM
    accounts;
```

However, you will not see the change if you connect to the PostgreSQL server in a new session and execute the query above.

To permanently apply the change to the database, you commit the transaction by using the COMMIT WORK statement:

`COMMIT WORK;` or `COMMIT TRANSACTION;` or simply - `COMMIT;`

so to wrap the transaction up:

```SQL

BEGIN;

INSERT INTO accounts(name,balance)
VALUES('Alice',10000);

COMMIT WORK; --BEFORE THIS LINE THE RESULT IS ONLY VISIBLE IN OUR SESSION.
```

If you want to undo the changes to the database, you can use the ROLLBACK statement `ROLLBACK;` or `ROLLBACK TRANSACTION;` or `ROLLBACK WORK;`

### Import & Export Data

#### Importing a CSV into the database

We can import a CSV into one of our database tables by using the following syntax:

```SQL
COPY persons(first_name, last_name, dob, email)
FROM 'C:\sampledb\persons.csv'
DELIMITER ','
CSV HEADER;
```

#### Export data from a table to CSV using the COPY statement

```SQL
COPY persons TO 'C:\temp\persons_db.csv' DELIMITER ',' CSV HEADER;
```

```SQL
CREATE TABLE Student (
    id SERIAL PRIMARY KEY
    teacher_id INT FOREIGN KEY REFERENCES teachers(id)
    name VARCHAR(255)
    grade SMALLINT
    GPA Float(10,2)
)
```
