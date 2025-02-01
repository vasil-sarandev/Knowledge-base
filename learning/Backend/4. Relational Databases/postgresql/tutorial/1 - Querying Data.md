[Back to Tutorial front page](./index.md)

### PostgreSQL Tutorial Section 1: Querying Data

#### 1. SELECT statement

One of the most common tasks, when you work with the database, is to retrieve data from tables using the **SELECT** statement.

The **SELECT** statement is one of the most complex statements in PostgreSQL. It has many clauses that you can use to form a flexible query.

Due to its complexity, we will break it down into many shorter and easy-to-understand tutorials so that you can learn about each clause faster.

The **SELECT** statement has the following clauses:

- Select distinct rows using **DISTINCT** operator.
- Sort rows using **ORDER BY** clause.
- Filter rows using **WHERE** clause.
- Select a subset of rows from a table using **LIMIT** or **FETCH** clause.
- Group rows into groups using **GROUP BY** clause.
- Filter groups using **HAVING** clause.
- Join with other tables using joins such as **INNER JOIN**, **LEFT JOIN**, **FULL OUTER JOIN**, **CROSS JOIN** clauses.
- Perform set operations using **UNION**, **INTERSECT**, and **EXCEPT**.

##### Syntax

```SQL
SELECT
   select_list
FROM
   table_name;
```

##### Selecting from a database through PSQL

1. Connect to the Postgres server with psql and enter your password when prompted.
   `psql`
2. See the list of databases
   `\l`
3. Switch to the one you want
   `\c dvdrental`
4. Run the select statement

```SQL
SELECT first_name from Customer;
```

##### Selecting from a database through pgAdmin4

1. Run pgAdmin
2. Connect to the server and database
3. Open the Query Tool and run the query

```SQL
SELECT first_name from Customer;
```

#### 2. Column Aliases

A column alias allows you to assign a column or an expression in the select list of a **SELECT** statement a temporary name. The column alias exists temporarily during the execution of the query.

The following illustrates the syntax of using a column alias:

```SQL
SELECT column_name AS alias_name
FROM table_name;
```

**Example**
Here we are using the concatenation operator to select the full names of customers.

```SQL
SELECT first_name || ' ' || last_name as full_name
FROM customer
ORDER BY full_name ASC
LIMIT 100;
```

#### 3. ORDER BY

When you query data from a table, the **SELECT** statement returns rows in an unspecified order. To sort the rows of the result set, you use the **ORDER BY** clause in the **SELECT** statement.

The **ORDER BY** clause allows you to sort rows returned by a **SELECT** clause in ascending or descending order based on a sort expression.

The following illustrates the syntax of the **ORDER BY** clause:

```SQL
SELECT
  select_list
FROM
  table_name
ORDER BY
  sort_expression1 [ASC | DESC],
  sort_expression2 [ASC | DESC],
  ...;
```

**Examples**

```SQL
SELECT first_name, last_name
FROM customer
ORDER BY first_name ASC, last_name DESC;
```

```SQL
SELECT
  first_name,
  LENGTH(first_name) len
FROM
  customer
ORDER BY
  len DESC;
```

#### 4. SELECT DISTINCT

The **SELECT DISTINCT** removes duplicate rows from a result set. The **SELECT DISTINCT** clause retains one row for each group of duplicates.

The **SELECT DISTINCT** clause can be applied to one or more columns in the select list of the **SELECT** statement.

The following illustrates the syntax of the DISTINCT clause:

```SQL
SELECT
  DISTINCT column1
FROM
  table_name;
```

**Examples**

```SQL
SELECT DISTINCT
  rental_rate
FROM
  film
ORDER BY
  rental_rate;
```

```
Output:
rental_rate
-------------
        0.99
        2.99
        4.99
```

Let's create a new DB and table and populate it with values.

```SQL
CREATE TABLE colors(
  id SERIAL PRIMARY KEY,
  bcolor VARCHAR,
  fcolor VARCHAR
);

...

INSERT INTO
  colors (bcolor, fcolor)
VALUES
  ('red', 'red'),
  ('red', 'red'),
  ('red', NULL),
  (NULL, 'red'),
  (NULL, NULL),
  ('green', 'green'),
  ('blue', 'blue'),
  ('blue', 'blue');
```

Now let's select the distinct pairs

```SQL
SELECT
  DISTINCT bcolor, fcolor
FROM
  colors
ORDER BY
  bcolor,
  fcolor;
```
