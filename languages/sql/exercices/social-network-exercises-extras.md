[Back to course index](sql-hub.md)

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

1.  For every situation where student A likes student B, but student B likes a different student C, return the names and grades of A, B, and C.

```SQL
SELECT S1.name, S1.grade, S2.name, S2.grade, S3.name, S3.grade
FROM Highschooler S1 -- Student A
INNER JOIN Likes L1 on S1.ID = L1.ID1 -- liked by Student A
INNER JOIN Highschooler S2 on L1.ID2 = S2.ID -- Student(s) B
INNER JOIN Likes L2 on L2.ID1 = S2.ID and L2.ID2 <> S1.ID -- liked by Student B (not A)
INNER JOIN Highschooler S3 on L2.ID2 = S3.ID -- Student(s) C
```

2.  Find those students for whom all of their friends are in different grades from themselves. Return the students' names and grades.

```SQL
SELECT DISTINCT S1.name, S1.grade
FROM Highschooler S1 -- Student A
INNER JOIN Friend on S1.ID = Friend.ID1 -- their friend relationships
WHERE NOT EXISTS (
    SELECT 1
    FROM Friend F2
    INNER JOIN Highschooler S2 on F2.ID2 = S2.ID -- their friends
    WHERE F2.ID1 = S1.ID and S2.grade = S1.grade -- no friend in the same grade.
);
```

...or

```SQL
SELECT S1.name, S1.grade
FROM Highschooler S1
INNER JOIN Friend F ON S1.ID = F.ID1 -- their friend relationships
INNER JOIN Highschooler S2 ON F.ID2 = S2.ID -- their friends
GROUP BY S1.name, S1.grade
HAVING SUM(CASE WHEN S2.grade = S1.grade THEN 1 ELSE 0 END) = 0
```

3.  What is the average number of friends per student? (Your result should be just one number.)

```SQL
SELECT AVG(friend_count) FROM (
    SELECT COUNT(*) as friend_count
    From Highschooler S1
    INNER JOIN Friend F on S1.ID = F.ID1
    GROUP BY S1.ID
);
```

4.  Find the number of students who are either friends with Cassandra or are friends of friends of Cassandra. Do not count Cassandra, even though technically she is a friend of a friend.

```SQL
SELECT COUNT(*) FROM (
    SELECT *
    FROM Highschooler S1
    INNER JOIN Friends F1 on S1.ID = F1.ID1 and S1.name = 'Cassandra' -- Cassandra's friends
    LEFT JOIN Friends F2 on F2.ID1 = F2.ID2 -- Cassandra's friends' friends
    WHERE F2.ID2 <> S1.ID
);
```

5.  Find the name and grade of the student(s) with the greatest number of friends.

```SQL
SELECT S1.name, S1.grade
FROM Highschooler S1
INNER JOIN Friend F1 on S1.ID = F1.ID1
GROUP BY S1.ID
HAVING COUNT(*) = (
    SELECT MAX(COUNT(*))
    FROM Highschooler S1
    INNER JOIN Friend F1 on S1.ID = F1.ID1
    GROUP BY S1.ID
)
```
