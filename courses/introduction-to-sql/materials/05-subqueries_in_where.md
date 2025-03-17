[Back to course frontpage](courses/introduction-to-sql/index.md)

## SQL: Subqueries in WHERE

Some of the expressions for subqueries we can use in WHERE:

- **nested select statements**
- **exists**
- **not exists**
- **all**
- **any**

Demos:

1. To find the IDs and names of students who have applied to major in cs at some college

```SQL
SELECT sID, sName
from Student
where sID in (select sID from Apply where major='CS');
```

We could produce the exact same results without a subquery.

```SQL
SELECT DISTINCT Student.sID, sName
from Student, Apply
where Student.sID = Apply.sID and major = 'CS';
```

2. To find the IDs and names of students who applied to CS but didn't apply to EE, we could write the following query:

```SQL
SELECT sID, sName
FROM Student
WHERE sID in (select sID from Apply where Major = 'CS') and sID not in (select sID from Apply where major = 'EE')
```

3. To find all colleges such that some other college is in the same state, we could use the following query:

```SQL
SELECT cName, state
from College C1
where exists (select * from College C2 where C2.state = C1.state and C1.cName <> C2.cName);
```

4. To find the college with highest enrollment, we can use the following query:

```SQL
SELECT cName
FROM College C1
WHERE not exists (SELECT * FROM College C2 WHERE C2.enrollment > C1.enrollment);
```

We can produce the same result with:

```SQL
SELECT cName
FROM College
WHERE enrollment = (SELECT MAX(enrollment) FROM College);
```

5. To find the student with highest GPA, we can use:

```SQL
SELECT sName, GPA
FROM Student
where GPA >= all (select GPA from Student);
```

6. To find the College with highest enrollment, we can use:

```SQL
SELECT cName
FROM College C1
WHERE enrollment > all (select enrollment from College C2 where C2.cName <> C1.cName)
```

7. To find all students NOT from the smallest high school

```SQL

SELECT sID, sName, sizeHS
FROM Student
WHERE sizeHS > any (select sizeHS from Student)
```

**ALL/ANY** are not supported everywhere. They are convenient but we can write every single **all/any** query with **exists/not exists** instead which happen to be more widely supported.

We can produce the same result at the last query with:

```SQL
SELECT sID, sName, sizeHS
FROM Student S1
WHERE exists (select * from Student S2 where S2.sizeHS < S1.sizeHS)
```
