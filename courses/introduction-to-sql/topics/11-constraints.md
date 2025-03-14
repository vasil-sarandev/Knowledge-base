[Back to course index](../index.md)

Table of Contents:

1. [Introduction](#introduction)
2. [Constraints in-depth](#constraints-in-depth)  
   [1. PRIMARY KEY](#1-primary-key)
   [2. FOREIGN KEY](#2-foreign-key)
   [3. FOREIGN KEY ACTIONS](#3-foreign-key-constraint-actions)
   [4. CHECK Constraint](#4-check-constraint)
   [5. UNIQUE Constraint](#5-unique-constraint)
   [6. NOT NULL Constraint](#6-not-null-constraint)
   [7. DEFAULT Constraint](#7-default-constraint)

## CONSTRAINTS

### Introduction

SQL constraints are used to specify rules for the data in a table.

Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.

The following constraints are commonly used in SQL:

- _NOT NULL_ - Ensures that a column cannot have a NULL value
- _UNIQUE_ - Ensures that all values in a column are different
- _PRIMARY KEY_ - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
- _FOREIGN KEY_ - Prevents actions that would destroy links between tables
- _CHECK_ - Ensures that the values in a column satisfies a specific condition
- _DEFAULT_ - Sets a default value for a column if no value is specified
- _CREATE INDEX_ - Used to create and retrieve data from the database very quickly

### Constraints In-depth

**Example for adding a constraint when creating table**

```SQL
CREATE TABLE Student(
    id SERIAL
    mentor_id INT,
    name VARCHAR(255),
    grade SMALLINT,
    GPA NUMERIC,
    PRIMARY KEY(id),  -- constraint 1: Primary Key
    CONSTRAINT fk_mentor -- constraint 2: Foreign Key
        FOREIGN KEY(mentor_id)
        REFERENCES Teacher(id)
        ON DELETE SET NULL
 )
```

**Example for adding a constraint through altering a table**

```SQL
CREATE TABLE Student(
    id SERIAL -- constraint 1: Primary Key
    mentor_id INT,
    name VARCHAR(255),
    grade SMALLINT,
    GPA NUMERIC,
);

ALTER TABLE Student
ADD CONSTRAINT pk_id PRIMARY KEY(id);

ALTER TABLE Student
ADD CONSTRAINT fk_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES Teacher(id)
    ON DELETE SET NULL;
```

#### 1. PRIMARY KEY

A primary key is a column or a group of columns used to uniquely identify a row in a table. The column that participates in the primary key is known as the primary key column.

A table can have zero or one primary key. It cannot have more than one primary key.

It is a good practice to add a primary key to every table. When you add a primary key to a table, PostgreSQL creates a unique B-tree index on the column or a group of columns used to define the primary key.

Technically, a primary key constraint is the combination of a **NOT-NULL** constraint and a **UNIQUE** constraint.

Typically, you define primary for a table when creating it:

```SQL
CREATE TABLE table_name (
  column_1 data_type PRIMARY KEY,
  column_2 data_type,
  …
);
```

In this syntax, you define the primary key as the column constraint of the primary key column.

If the primary key consists of more than one column, you can define it using the table constraint:

```SQL
CREATE TABLE table_name (
column_1 data_type,
column_2 data_type,
column_3 data_type,
…
PRIMARY KEY(column_1, column2, ...)
);
```

To add a primary key to an existing table, you the ALTER TABLE ... ADD PRIMARY KEY statement:

```SQL
ALTER TABLE table_name
ADD PRIMARY KEY (column_1, column_2, ...);
```

#### 2. FOREIGN KEY

A foreign key is a column or a group of columns in a table that uniquely identifies a row in another table.

A foreign key establishes a link between the data in two tables by referencing the primary key or a unique constraint of the referenced table.

The table containing a foreign key is referred to as the referencing table or child table. Conversely, the table referenced by a foreign key is known as the referenced table or parent table.

The main purpose of foreign keys is to maintain referential integrity in a relational database, ensuring that relationships between the parent and child tables are valid.

For example, a foreign key prevents the insertion of values that do not have corresponding values in the referenced table.

Additionally, a foreign key maintains consistency by automatically updating or deleting related rows in the child table when changes occur in the parent table.

A table can have multiple foreign keys depending on its relationships with other tables.

To define a foreign key, you can use a foreign key constraint.

```SQL
[CONSTRAINT fk_name]
   FOREIGN KEY(fk_columns)
   REFERENCES parent_table(parent_key_columns)
   [ON DELETE delete_action]
   [ON UPDATE update_action]
```

PostgreSQL supports the following actions as a follow up on Foreign Key operations.

- SET NULL
- SET DEFAULT
- RESTRICT
- NO ACTION
- CASCADE

**Foreign Key example**

```SQL
CREATE TABLE customers(
   customer_id INT GENERATED ALWAYS AS IDENTITY,
   customer_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(customer_id)
);

CREATE TABLE contacts(
   contact_id INT GENERATED ALWAYS AS IDENTITY,
   customer_id INT,
   contact_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(contact_id),
   CONSTRAINT fk_customer
    FOREIGN KEY(customer_id)
    REFERENCES customers(customer_id)
    ON DELETE CASCADE
);
```

#### 3. FOREIGN KEY Constraint Actions

We'll use the DELETE actions as an example.

1. `ON DELETE SET DEFAULT`
   The _ON DELETE SET DEFAULT_ sets the default value to the foreign key column of the referencing rows in the child table when the referenced rows from the parent table are deleted.
2. `ON DELETE SET NULL`
   The SET NULL automatically sets NULL to the foreign key columns in the referencing rows of the child table when the referenced rows in the parent table are deleted.
3. `ON DELETE NO ACTION`
   The RESTRICT action is similar to the NO ACTION. If the referenced rows are attempted to be deleted, a CONSTRAINT violation will be issued and the delete won't be allowed. The difference only arises when you define the foreign key constraint as DEFERRABLE with an INITIALLY DEFERRED or INITIALLY IMMEDIATE mode.
4. `ON DELETE CASCADE`
   The ON DELETE CASCADE automatically deletes all the referencing rows in the child table when the referenced rows in the parent table are deleted. In practice, the ON DELETE CASCADE is the most commonly used option.

#### 4. CHECK Constraint

A **CHECK** constraint ensures that values in a column or a group of columns meet a specific condition.

A check constraint allows you to enforce data integrity rules at the database level. A check constraint uses a boolean expression to evaluate the values, ensuring that only valid data is inserted or updated in a table.

```SQL
CREATE TABLE table_name(
   column1 datatype,
   ...,
   CONSTRAINT constraint_name CHECK(condition)
);
```

In this syntax:

First, specify the constraint name after the CONSTRAINT keyword. This is optional. If you omit it, PostgreSQL will automatically generate a name for the CHECK constraint.
Second, define a condition that must be satisfied for the constraint to be valid.
If the CHECK constraint involves only one column, you can define it as a column constraint like this:

```SQL
CREATE TABLE table_name(
column1 datatype,
column1 datatype CHECK(condition),
...,
);
```

**Example:**

```SQL
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  birth_date DATE NOT NULL,
  joined_date DATE NOT NULL,
  salary numeric,
  CONSTRAINT check_salary CHECK(salary > 0)
);
```

#### 5. UNIQUE Constraint

Sometimes, you want to ensure that values stored in a column or a group of columns are unique across the whole table such as email addresses or usernames.

PostgreSQL provides you with the UNIQUE constraint that maintains the uniqueness of the data correctly.

When a UNIQUE constraint is in place, every time you insert a new row, it checks if the value is already in the table. It rejects the change and issues an error if the value already exists. The same process is carried out for updating existing data.

When you add a UNIQUE constraint to a column or a group of columns, PostgreSQL will automatically create a unique index on the column or the group of columns.

```SQL
CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50),
  last_name VARCHAR (50),
  email VARCHAR (50) UNIQUE
);
```

or...

```SQL
CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50),
  last_name VARCHAR (50),
  email VARCHAR (50),
  UNIQUE(email)
);
```

#### 6. NOT NULL Constraint

To control whether a column can accept NULL, you use the NOT NULL constraint:

```SQL
CREATE TABLE table_name(
   ...
   column_name data_type NOT NULL,
   ...
);
```

**Example:**

```SQL
CREATE TABLE invoices(
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  qty numeric NOT NULL CHECK(qty > 0),
  net_price numeric CHECK(net_price > 0)
);
```

**Adding NOT NULL Constraints to existing columns**

To add the NOT NULL constraint to a column of an existing table, you use the following form of the ALTER TABLE statement:

```SQL
ALTER TABLE table_name
ALTER COLUMN column_name SET NOT NULL;
```

#### 7. DEFAULT Constraint

When creating a table, you can define a default value for a column in the table using the DEFAULT constraint. Here’s the basic syntax:

```SQL
CREATE TABLE table_name(
    column1 type,
    column2 type DEFAULT default_value,
    column3 type,
    ...
);
```

**Example:**

```SQL
CREATE TABLE logs(
   id SERIAL PRIMARY KEY,
   message TEXT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
