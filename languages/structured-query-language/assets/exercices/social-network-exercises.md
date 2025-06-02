[Back to course index](structured-query-language.md)

## Social-Network Query Exercises

Students at your hometown high school have decided to organize their social network using databases. So far, they have collected information about sixteen students in four grades, 9-12. Here's the schema:

Highschooler ( ID, name, grade )
English: There is a high school student with unique ID and a given first name in a certain grade.

Friend ( ID1, ID2 )
English: The student with ID1 is friends with the student with ID2. Friendship is mutual, so if (123, 456) is in the Friend table, so is (456, 123).

Likes ( ID1, ID2 )
English: The student with ID1 likes the student with ID2. Liking someone is not necessarily mutual, so if (123, 456) is in the Likes table, there is no guarantee that (456, 123) is also present.

Your queries will run over a small data set conforming to the schema. [View the database](https://courses.edx.org/asset-v1:StanfordOnline+SOE.YDB-SQL0001+2T2020+type@asset+block/socialdata.html). [You can also download the schema and data](https://s3-us-west-2.amazonaws.com/prod-c2g/db/Winter2013/files/social.sql).

For your convenience, here is a graph showing the various connections between the students in our database. 9th graders are blue, 10th graders are green, 11th graders are yellow, and 12th graders are purple. Undirected black edges indicate friendships, and directed red edges indicate that one student likes another student.

![Social-exercises](social-exercises.png)

1.  Find the names of all students who are friends with someone named Gabriel.

```SQL
SELECT name
FROM Friend
INNER JOIN Highschooler HS1 on Friend.ID1 = HS1.ID --highschoolers with friends
INNER JOIN Highschooler HS2 on Friend.ID2 = HS2.ID and HS2.name = 'Gabriel' -- highschoolers with friends named "Gabriel"
```

2. For every student who likes someone 2 or more grades younger than themselves, return that student's name and grade, and the name and grade of the student they like.

```SQL
SELECT HS1.name, HS1.grade, HS2.name, HS2.grade
FROM Highschooler HS1
INNER JOIN FRIEND ON HS1.ID = Friend.ID1
INNER JOIN (
    SELECT *
    FROM Highschooler HS2
    INNER JOIN FRIEND ON HS2.ID = Friend.ID2
    WHERE HS1.grade > HS2.grade + 1
) as HS2;
```

3.  For every pair of students who both like each other, return the name and grade of both students. Include each pair only once, with the two names in alphabetical order.

```SQL
SELECT
    CASE
        WHEN HS1.name < HS2.name THEN HS1.name
        ELSE HS2.name
    END AS name1,
    CASE
        WHEN HS1.name < HS2.name THEN HS1.grade
        ELSE HS2.grade
    END AS grade1,
    CASE
        WHEN HS1.name < HS2.name THEN HS2.name
        ELSE HS1.name
    END AS name2,
    CASE
        WHEN HS1.name < HS2.name THEN HS2.grade
        ELSE HS1.grade
    END AS grade2
FROM Highschooler HS1
INNER JOIN Likes L1 ON HS1.ID = L1.ID1
INNER JOIN Likes L2 ON L1.ID1 = L2.ID2 AND L1.ID2 = L2.ID1 -- Ensure mutual liking
INNER JOIN Highschooler HS2 ON HS2.ID = L1.ID2
WHERE HS1.name < HS2.name -- Ensure each pair is included only once
ORDER BY name1, name2;
```

4.  Find all students who do not appear in the Likes table (as a student who likes or is liked) and return their names and grades. Sort by grade, then by name within each grade.

```SQL
SELECT HS.name, HS.grade
FROM Highschooler HS
LEFT OUTER JOIN Likes ON HS.ID = Likes.ID1
WHERE NOT EXISTS (
    SELECT *
    FROM Likes
    WHERE Likes.ID1 = HS.ID or Likes.ID2 = HS.ID
)
ORDER BY HS.grade, HS.name;
```

or

```SQL
SELECT HS.name, HS.grade
FROM Highschooler HS
LEFT JOIN Likes ON HS.ID = Likes.ID1 OR HS.ID = Likes.ID2
WHERE Likes.ID1 IS NULL AND Likes.ID2 IS NULL
ORDER BY HS.grade, HS.name;
```

5.  For every situation where student A likes student B, but we have no information about whom B likes (that is, B does not appear as an ID1 in the Likes table), return A and B's names and grades.

```SQL
SELECT HS1.name, HS1.grade, HS2.name, HS2.grade
FROM Highschooler HS1
INNER JOIN Likes L1 ON HS1.ID = L1.ID1
INNER JOIN Highschooler HS2 ON L1.ID2 = HS2.ID
WHERE NOT EXISTS (
    SELECT *
    FROM Likes L2
    WHERE L2.ID1 = HS2.ID
);
```

6.  Find names and grades of students who only have friends in the same grade. Return the result sorted by grade, then by name within each grade.

```SQL
SELECT DISTINCT HS1.name, HS1.grade
FROM Highschooler HS1
INNER JOIN Friend F1 ON HS1.ID = F1.ID1
INNER JOIN Highschooler HS2 ON HS2.ID = F1.ID2
GROUP BY HS1.ID
HAVING MIN(HS2.grade) = HS1.grade AND MAX(HS2.grade) = HS1.grade
ORDER BY HS1.grade, HS1.name;
```

or ...

```SQL
SELECT HS1.name, HS1.grade
FROM Highschooler HS1
INNER JOIN Friend F1 ON HS1.ID = F1.ID1
INNER JOIN Highschooler HS2 ON HS2.ID = F1.ID2
WHERE NOT EXISTS (
    SELECT 1
    FROM Friend F2
    INNER JOIN Highschooler HS3 ON HS3.ID = F2.ID2
    WHERE F2.ID1 = HS2.ID
    AND HS3.grade != HS1.grade
)
ORDER BY HS1.grade, HS1.name;
```

7.  For each student A who likes a student B where the two are not friends, find if they have a friend C in common (who can introduce them!). For all such trios, return the name and grade of A, B, and C.

```SQL
SELECT DISTINCT
    HS1.name AS student_A_name, HS1.grade AS student_A_grade,
    HS2.name AS student_B_name, HS2.grade AS student_B_grade,
    HS3.name AS mutual_friend_name, HS3.grade AS mutual_friend_grade
FROM Highschooler HS1 -- Student A
INNER JOIN Likes L1 ON HS1.ID = L1.ID1 -- A likes B
INNER JOIN Highschooler HS2 ON L1.ID2 = HS2.ID -- Student B
LEFT JOIN Friend F1 ON HS1.ID = F1.ID1 AND HS2.ID = F1.ID2 -- Check if A and B are friends
INNER JOIN Friend F2 ON HS1.ID = F2.ID1 -- Friends of A
INNER JOIN Friend F3 ON HS2.ID = F3.ID1 -- Friends of B
INNER JOIN Highschooler HS3 ON F2.ID2 = F3.ID2 AND F2.ID2 = HS3.ID -- Mutual friend C
WHERE F1.ID1 IS NULL -- Ensure A and B are not friends
ORDER BY HS1.name, HS2.name, HS3.name; -- Sort for clarity
```

8.  Find the difference between the number of students in the school and the number of different first names.

```SQL
SELECT
    (SELECT COUNT(*) FROM Highschooler) - COUNT(DISTINCT name) AS difference
FROM Highschooler;
```

9.  Find the name and grade of all students who are liked by more than one other student.

```SQL
SELECT DISTINCT HS.name, HS.grade
FROM Highschooler HS -- student A
INNER JOIN Likes L1 on L1.ID2 = HS.ID -- B likes A
INNER JOIN Likes L2 on L2.ID2 = HS.ID and L2.ID1 <> L1.ID1; --C likes A too
```
