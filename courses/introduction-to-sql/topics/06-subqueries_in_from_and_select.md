[Back to course index](../index.md)

## SQL: Subqueries in FROM and SELECT

Subqueries that occur as nested SELECT statements in the FROM clause of an outer SELECT statement. These subqueries are sometimes called **_derived tables or table experssions_** because the outer query uses the results of the subquery as a data source.

Demos:

1. Scaled GPA Students optimisation

If we imagine we have the following query that returns all students whose scaled GPA is more than 1.0:

```SQL
SELECT sID, sName, GPA, GPA*(sizeHS/1000.0) as scaledGPA
from Student
where abs(GPA*(sizeHS/1000) - GPA) > 1.0
```

There's a problem that we are doing the same calculation multiple times. We could get around that by using subqueries.

```SQL
select *
from (SELECT sID, sName, GPA, GPA*(sizeHS/1000.0) as scaledGPA from Student) G
where abs(G.scaledGPA) - GPA) > 1.0;
```

2. Select clause subquery example

Let's imagine we have a query that pairs colleges with the highest GPA of their applicants.

```SQL
SELECT distinct College.cName, state, GPA
from College, Apply, Student
where College.cName = Apply.cName
    and Apply.sID = Student.sID
    and GPA >= all
                (select GPA from Student, Apply
                where Student.sID = Apply.sID
                    and Apply.cName = College.cName);
```

```SQL
SELECT cName, state,
(select distinct GPA
    from Apply, Student
    where College.cName = Apply.cName
        and Apply.sID = Student.sID
        and GPA >= all
                (select GPA from Student, Apply
                where Student.sID = Apply.sID
                    and Apply.cName = College.cName);
from College;
```
