[Back to course index](./index.md)

## SQL: Basic Select

Selects a set of attributes(SELECT) from a set of relations(FROM) that satisfy certain conditions (WHERE).

For the DEMO purposes, this is the Schema we're using:

- College table(cNAME, state, enrollment). cNAME is unique.
- Student table(sID, sName, GPA, sizeHS). sID is unique.
- Apply table(sID, cName, major, decision). The combination of sID, cName, major attributes is unique.

1. To select all students with a GPA > 3.6 we can use the following SQL query:

```SQL
SELECT sID, sName, GPA
FROM Student
where GPA > 3.6;
```

2. To select which student applied to which major we can use:

```SQL
SELECT (distinct) sName, major
FROM Student, Apply
where Student.sID = Apply.sID;
```

If we don't want any duplicates we can add **distinct** to the query.

3. Our next query finds the names, GPA and the decision of students with a Highschool with less than 1000 people that applied to CS in Stanford.

```SQL
select sName, GPA, decision
from Student, Apply
where Student.sID = Apply.sID
    and sizeHS < 1000 and major = 'CS' and cnmae = 'Stanford';
```

4. Finds the large campuses with enrollment over 20 000 that have someone applying to CS.

```SQL
select distinct College.cName
from College, Apply
where College.cName = Apply.cName
    and enrollment > 20000 and major = 'CS'
```

5. Get the SID, name, GPA, college name, and enrollment of the college

```SQL
select Student.sID, sName, GPA, College.cName, enrollment
from Student, Apply, College
where Apply.sID = Student.sID and Apply.cName = College.cName;
```

6. Get the sID and major of applications of people that applied to any biology major (or something containing bio)

```SQL
SELECT sID, major
from Apply
where major like '%bio%';
```

**%bio%** - some set of characters followed by bio followed by some set of characters.

7. Get all attributes from the match between every single student and every single college

```SQL
SELECT *
from Student, College
```

When there's no WHERE statement and there's a JOIN of tables (FROM), SQL performs a **Cartesian product** of the 2 tables. This means that it will match every single Student with every single College. Basically if there's 10 students and 5 colleges, the join of the 2 tables will have 50 tuples (or rows).

8. We can use arithmetic operations in SELECT statements for example to scale the GPA with regard to size of highschool.

```SQL
SELECT sID, sName, GPA, sizeHS, GPA*(sizeHS/1000) as scaledGPA
from Student
```
