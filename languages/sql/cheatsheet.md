# Structured Query Language Cheatsheet

#language 

SQL or "sequel" has been around for decades and supports a many billion dollar markets.
It is supported by all major commercial database systems and is a declarative language, based on relational algebra.

There's 2 parts to the language:

- **Data Definition Language** (DDL) - CREATE table, DROP table, ...etc
- **Data Manipulation Language** (DML) - SELECT, INSERT, DELETE, UPDATE, ...etc

---
## Relational Model

An efficient model that's used by all major commercial database systems. Can be queried with high-level languages.

- **Database** - set of named *relations* (or *tables*)
- **Relations/tables** - set of named *attributes* (or *columns*)
- **Tuples/rows** - has a *value* for each *attribute*
- **Attributes** - have a type

---
## Basic SELECT statement

Selects a set of attributes(*SELECT*) from a set of relations(*FROM*) that satisfy certain conditions (*WHERE*).

**Examples**

```SQL
-- select ALL students
SELECT * from Student;
-- select students with GPA > 3.6
SELECT sID, sName, GPA FROM Student where GPA > 3.6;
-- select students with GPA NOT equal to 3.6.
SELECT sID, sName, GPA FROM Student where GPA <> 3.6;
-- which student applied to each major
SELECT (distinct) sName, major FROM Student, Apply where Student.sID = Apply.sID;
-- select attributes from Apply-ies containing "bio" in the major
SELECT sID, major from Apply where major like '%bio%';
-- cartesian product, will match every student with every college.
SELECT * from Student, College
```

---

## Table Variables

We can use Table Variables to distinguish the same table if we're joining it on itself.

```SQL
-- finds matches for students who have the same GPA
SELECT *
FROM Student S1, Student S2
where S1.GPA = S2.GPA and S1.sID <> S2.sID
```

---
## Set Operators

### Union

We can use Union to generate a list that includes a set of attributes from different relations.

```SQL
SELECT cName as name from College
union
SELECT sName as name from Student

-- returns something along the likes of 
-- Jonathan, Pete, Harvard, MIT under the same "name" column
```

  The **union** operator by default eliminates duplicates. If we want to see the duplicates, we can use **union all** instead.

### Intersect

We can use **intersect** to combine 2 select statements and only return the datasets that are common in both the statements.

```SQL
select sID from Apply where major = 'CS'
intersect
select sID from Apply where major = 'EE'
```

### Except

The **except** or **difference** operator is used to find the difference between two datasets.

```SQL
SELECT sID from Apply where major = 'CS'
EXCEPT
SELECT sID from Apply where major = 'EE'
```

### Set Operators support

Some RDBMS don't support *Intersect* or union *Except*. We can rewrite all set operators query with joins and have them produce the exact same result.

```SQL
-- set operator query
SELECT sID from Apply where major = 'CS'
EXCEPT
SELECT sID from Apply where major = 'EE'

-- functionally equivalent to
SELECT A1.sID
FROM Apply A1, Apply A2
where A1.sID = A2.sID and A1.major = 'CS' and A2.major <> 'EE'
```

---

## Subqueries in WHERE

Subqueries can be used in the WHERE statement which further improve our ability to fine-grain the selected data. Some of the subqueries we can use are:

- **Nested SELECT statements**
- **EXISTS**
- **NOT EXISTS**
- **ALL**
- **ANY**

**Examples**

```SQL
-- select students who applied to CS
SELECT sID, sName
from Student
where sID in (select sID from Apply where major='CS');

-- select colleges where a college in the same state exists in our database
select cName, state
from College C1
where exists (select * from College C2 where C2.state = C1.state and C1.cName <> C2.cName);

-- select the college with the highest enrollment
SELECT cName
FROM College C1
WHERE not exists (SELECT * FROM College C2 WHERE C2.enrollment > C1.enrollment);

-- select students NOT from the smallest highschool
SELECT sID, sName, sizeHS
FROM Student
WHERE sizeHS > any (select sizeHS from Student)
```

---
## Subqueries in FROM and SELECT

Subqueries that occur as nested SELECT statements in the FROM clause of an outer SELECT statement. These subqueries are sometimes called **_derived tables or table expressions** because the outer query uses the results of the subquery as a data source.

```SQL
-- imagine we have the following query that retuns students whose scaled GPA is more than 1.0. The problem is we're doing the calculation two times.
SELECT sID, sName, GPA, GPA*(sizeHS/1000.0) as scaledGPA
from Student
where abs(GPA*(sizeHS/1000) - GPA) > 1.0
-- we can fix that by using subqueries in the FROM statement
select *
from (SELECT sID, sName, GPA, GPA*(sizeHS/1000.0) as scaledGPA from Student) G
where abs(G.scaledGPA) - GPA) > 1.0;
```

---
## Join Operators

```SQL
SELECT * from Table1, Table2, Table3
```

When we're listing relations (tables) without a specified *JOIN*, SQL does an *Inner Join* which is a Cartesian Product of the tables. A Cartesian Product is one where each tuple (row) in each table is matched with each row in the other tables.

### Natural Join


```SQL
select distinct sName, major
from Student NATURAL JOIN Apply;
```

**How a Natural Join works**

1. Match columns with the same name: A Natural Join looks for columns with identical names in both relations.
2. Compare values: It combines rows where the values in these matching columns are the same.
3. Eliminate duplicates: The resulting relation includes each matching column only once in the output (it doesn't duplicate the column values).

### Inner Join

*Inner Join* joins the tables on a condition. It effectively does a Cartesian Product after it makes sure the tuples satisfy the condition. It is the default join in SQL.


```SQL
-- select student names and majors
SELECT DISTINCT sName, major
FROM Student INNER JOIN Apply
ON Student.sID = Apply.sID

-- rewrite using WHERE syntax
SELECT DISTINCT sName, major
FROM Student, Apply
WHERE Student.sID = Apply.sID

-- select data from multiple tables
SELECT Apply.sID, sName, GPA, Apply.cName, enrollment
from (Apply join Student on Apply.sID = Student.sID) join College
on Apply.cName = College.cName

-- functionally equivalent to
SELECT Apply.sID, sName, GPA, Apply.cName, enrollment
from Apply, Student, College
where Apply.sID = Student.sID and Apply.cName = College.cName
```

### Outer Join

Outer join includes tuples that don't have a match in the relations.

```SQL
-- gives us all students who have applied and shows the colleges and majors they applied to
select sName, sID, cName, major
from Student inner join Apply using(sID);
-- gives us all students (including those who haven't applied anywhere) and shows the colleges and majors. The major and cName columns will be filled with nulls for empty values.
select sName, sID, cName, major
from Student left outer join Apply using(sID);
```

- **Left Outer Join** - **Left outer** join takes any tuples on the left side of the join and if they don't have a matching tuple (this occurrence is called a **_dangling tuple_** - tuple that has no match) they are still added to the result and padded with *null*
- **Right Outer Join** - The same as Left Outer Join but with right side.
- **Full Outer Join** - A combination of both.

---
## Aggregation

**_Aggregation_** functions appear in the SELECT statement initially and they perform computations over sets of values in multiple rows in the relation.

The basic **Aggregation** functions supported by every SQL system are:

- **min**
- **max**
- **sum**
- **avg**
- **count**

Once aggregation functions are added, there are additional clauses we can include in our SQL statement.

- **Group by** - partitions our relations into groups.
- **Having** - test filters over the result of aggregate values.

**Examples**

```SQL
-- BASIC Aggregation

-- selects average GPA
select avg(GPA)
from Student;
-- select avg GPA of students who applied to CS
select avg(GPA)
from Student
WHERE sID in (select distinct sID from Apply where major = 'cs');
-- select count of colleges with enrollment > 5000
SELECT count(*)
FROM Colleges
WHERE enrollment >= 5000

-- GROUP BY

--  count of applications for each college (group by cName)
SELECT cName, count(*)
FROM Apply
GROUP BY cName
-- min and max GPA for each pair of cName and major
SELECT cName, major, min(GPA), max(GPA)
FROM Student INNER JOIN Apply using(sID)
GROUP BY cName, major;

-- HAVING

-- colleges with fewer than 5 applicants
SELECT cName
FROM Apply
GROUP BY cName
HAVING count(*) < 5

-- finds all majors that have a MAX GPA Applicant less than the AVG for Students
SELECT major
FROM Student INNER JOIN Apply using (sID)
GROUP BY major
having MAX(GPA) < (select AVG(GPA) from Student)
```

---
## Modifications

Modifications or **Data Modification Statements** include a couple useful tools for modifying the data:

- For inserting data
- For deleting data
- For modifying the data

```SQL
INSERT INTO Table VALUES(A1, A2, A3... An)

-- Insert can also work with SELECT as long as it matches the schema. The following query INSERTS applications for CS@Carnegie Melon for all students who haven't applied anywhere yet.
INSERT INTO Apply
SELECT sID, 'Carnegie Mellon', 'CS', null
from Student
where sID not in (select sID from Apply)

DELETE FROM Student WHERE GPA < 4.0

Update Student
Set GPA = 4.0, sizeHS = 10000
WHERE GPA < 4.0
```

---
## Constraints

SQL constraints are used to specify rules for the data in a table.

Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.

- _NOT NULL_ - Ensures that a column cannot have a NULL value
- _UNIQUE_ - Ensures that all values in a column are different
- _PRIMARY KEY_ - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
- _FOREIGN KEY_ - Prevents actions that would destroy links between tables
- _CHECK_ - Ensures that the values in a column satisfies a specific condition
- _DEFAULT_ - Sets a default value for a column if no value is specified
- _CREATE INDEX_ - Used to create and retrieve data from the database very quickly

### Adding Constraints

```SQL
-- when creating a Table
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
 
 -- by altering a table
 
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

### Constraint Types

#### PRIMARY KEY

A primary key is a column or a group of columns used to uniquely identify a row in a table. The column that participates in the primary key is known as the primary key column.

```SQL
CREATE TABLE table_name (
	column_1 data_type,
	column_2 data_type,
	column_3 data_type,
	…
	PRIMARY KEY(column_1, column2, ...)
);
```
#### FOREIGN KEY

A foreign key is a column or a group of columns in a table that uniquely identifies a row in another table. The Foreign Key establishes a link between the data in two tables by referencing the primary key or a unique constraint of the referenced table.

The main purpose of foreign keys is to maintain referential integrity in a relational database, ensuring that relationships between the parent and child tables are valid.

```SQL
[CONSTRAINT fk_name]
   FOREIGN KEY(fk_columns)
   REFERENCES parent_table(parent_key_columns)
   [ON DELETE delete_action]
   [ON UPDATE update_action]
```

##### FOREGN KEY Constraint Actions

We'll use the DELETE actions as an example.

- **`ON DELETE SET DEFAULT`** - sets the default value to the foreign key column of the referencing rows in the child table when the referenced rows from the parent table are deleted.
- **`ON DELETE SET NULL`** - automatically sets NULL to the foreign key columns in the referencing rows of the child table when the referenced rows in the parent table are deleted.
- **`ON DELETE NO ACTION`** -  If the referenced rows are attempted to be deleted, a CONSTRAINT violation will be issued and the delete won't be allowed. 
- **`ON DELETE CASCADE`** - automatically deletes all the referencing rows in the child table when the referenced rows in the parent table are deleted. In practice, the ON DELETE CASCADE is the most commonly used option.

#### CHECK Constraint

A **CHECK** constraint ensures that values in a column or a group of columns meet a specific condition.

A check constraint allows you to enforce data integrity rules at the database level. A check constraint uses a boolean expression to evaluate the values, ensuring that only valid data is inserted or updated in a table.

```SQL
CREATE TABLE table_name(
	column1 datatype,
	column1 datatype CHECK(condition),
...,
);
```

#### UNIQUE Constraint

Sometimes, you want to ensure that values stored in a column or a group of columns are unique across the whole table such as email addresses or usernames.

PostgreSQL provides you with the UNIQUE constraint that maintains the uniqueness of the data correctly.

```SQL
CREATE TABLE table_name (
	column1 datatype,
	column1 datatype UNIQUE
);
```

####  NOT NULL Constraint

To control whether a column can accept NULL, you use the NOT NULL constraint:

```SQL
CREATE TABLE table_name(
   ...
   column_name data_type NOT NULL,
   ...
);
```

#### DEFAULT Constraint

When creating a table, you can define a default value for a column in the table using the DEFAULT constraint. Here’s the basic syntax:

```SQL
CREATE TABLE table_name(
    column1 type,
    column2 type DEFAULT default_value,
    column3 type,
    ...
);
```
