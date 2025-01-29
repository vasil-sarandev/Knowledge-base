[Back to course index](./index.md)

## Modifications

Modifications or **Data Modification Statements** include a couple useful tools for modifying the data:

- For inserting data
- For deleting data
- For modifying the data

### Inserting new data (2 methods)

#### 1. Insert INTO Table

We specify the values of the tuple and the result of the command is that the one tuple is now included into the relation.

```SQL
INSERT INTO Table VALUES(A1, A2, A3... An)
```

#### 2. Insert Into Table Select-Statement

The other possibility is to run a query over the database a select statement. That select statement will produce a set of tuples and as long as that set of tuples has the same Schema as the Table, we can insert all the tuples into the table.

### Deleting data (DELETE)

It is a fairly simple command - it instructs SQL to delete from the Table WHERE a condition is met.

```SQL
DELETE
FROM Student
WHERE GPA < 4.0
```

Every tuple that satisfies the condition will be deleted.

### Update Existing Data (UPDATE)

Similar as the DELETE method. Operatos on one table and evaluates the condition over each tuple of the table except that when the condition is truthy, we don't delete the tuple, we modify it.

```SQL
Update Student
Set GPA = 4.0, sizeHS = 10000, sName = 'Vasil'
WHERE GPA < 4.0
```

### Examples

**Example 1**
Inserts the following college into the College relation.

```SQL
INSERT INTO College values ('Carnegie Mellon', 'PA', 11500);
```

**Example 2**
Let's get all students who haven't applied anywhere yet to apply to our new college.

```SQL
INSERT INTO Apply
SELECT sID, 'Carnegie Mellon', 'CS', null
from Student
where sID not in (select sID from Apply)
```

The SELECT looks like this to make sure it matches the Apply schema.

**Example 3**
Let's get all students who applied to EE elsewhere and were turned down to apply to EE in Carnegie Mellon and have them accepted.

```SQL
INSERT INTO Apply
SELECT sID, 'Carnegie Mellon', 'EE', 'Y'
FROM Student INNER JOIN Apply using(sID)
WHERE major = 'EE' and decision = 'N'
```

The SELECT looks like this to make sure it matches the Apply schema.

**Example 4**
Delete all students who have applied to more than two different majors.

```SQL
DELETE from Student
WHERE sID in
(SELECT sID, count(distinct major)
from Apply
group by sID
having count(distinct major) > 2);
```

**Example 5**
Delete all applications from the students we just deleted.

```SQL
DELETE from Apply
WHERE sID in
(SELECT sID, count(distinct major)
from Apply
group by sID
having count(distinct major) > 2);
```

Some database systems don't support this form of deletion - ones where the subquery includes the same relation we're deleting from.

The way to get around this is to create a temporary table, populate it with the results from the subquery and then delete from Apply where the SID is present in the new table.

**Example 6**
Delete colleges with no CS applicants

```SQL
DELETE from College
WHERE cName in
(SELECT cName
FROM College
WHERE cName not in (select cName from Apply where major = 'CS'));
```

**Example 7**
Accept applicants to Carnegie Mellon with GPA < 3.6 but turn them into economics majors

```SQL
UPDATE APPLY
set decision = 'Y', major = 'ECONOMICS'
WHERE sID in
(SELECT sID
FROM Apply INNER JOIN Student using(sID)
WHERE GPA < 3.6 AND cName = 'Carnegie Mellon');
```

**Example 8**

```SQL
UPDATE Student
SET GPA = (select max(GPA) from Student), sizeHS = (select min(sizeHS) from Student);
```

**Example 9**

```SQL
UPDATE Apply
SET decision = 'Y';
```
