[Back to course index](structured-query-language.md)

## Social-Network Modification Exercises

Students at your hometown high school have decided to organize their social network using databases. So far, they have collected information about sixteen students in four grades, 9-12. Here's the schema:

Highschooler ( ID, name, grade )
English: There is a high school student with unique ID and a given first name in a certain grade.

Friend ( ID1, ID2 )
English: The student with ID1 is friends with the student with ID2. Friendship is mutual, so if (123, 456) is in the Friend table, so is (456, 123).

Likes ( ID1, ID2 )
English: The student with ID1 likes the student with ID2. Liking someone is not necessarily mutual, so if (123, 456) is in the Likes table, there is no guarantee that (456, 123) is also present.

Your modifications will run over a small data set conforming to the schema. [View the database](https://courses.edx.org/asset-v1:StanfordOnline+SOE.YDB-SQL0001+2T2020+type@asset+block/socialdata.html). (You can also download the schema and data.)

### Exercises

1.  It's time for the seniors to graduate. Remove all 12th graders from Highschooler.

```SQL
WITH TwelveGraders as (
    SELECT Highschooler.ID
    FROM Highschooler
    WHERE Highschooler.grade = 12
)
DELETE FROM Highschooler HS
WHERE HS.ID in (SELECT ID FROM TwelveGraders);
```

2.  If two students A and B are friends, and A likes B but not vice-versa, remove the Likes tuple.

```SQL
WITH Dataset as (
    SELECT HS.ID
    FROM Highschooler HS --student A
    INNER JOIN FRIENDS F1 on HS.ID = F1.ID1 --their friend relationships
    INNER JOIN LIKES L1 on L1.ID1 = HS.ID -- their likes
    INNER JOIN LIKES L2 on L1.ID2 = L2.ID1 -- their likes' likes
    WHERE L2.ID2 <> HS.ID -- make sure their likes' likes don't like em.
)
DELETE FROM Likes
WHERE Likes.ID1 in (SELECT ID FROM Dataset)
```

3.  For all cases where A is friends with B, and B is friends with C, add a new friendship for the pair A and C. Do not add duplicate friendships, friendships that already exist, or friendships with oneself. (This one is a bit challenging; congratulations if you get it right.)

```SQL
WITH Dataset AS (
    SELECT HS.ID AS ID1, F2.ID2 AS ID2
    FROM Highschooler HS  -- A
    INNER JOIN Friend F1 ON HS.ID = F1.ID1  -- A's friends (B)
    INNER JOIN Friend F2 ON F1.ID2 = F2.ID1 AND F2.ID2 <> HS.ID  -- B's friends (C), ensuring A doesn't become friends with themselves
    WHERE F2.ID2 IS NOT NULL
)
INSERT INTO Friend (ID1, ID2)
SELECT D.ID1, D.ID2
FROM Dataset D
-- Avoid duplicates: make sure A and C aren't already friends and A isn't friends with themselves
WHERE NOT EXISTS (
    SELECT 1
    FROM Friend F
    WHERE (F.ID1 = D.ID1 AND F.ID2 = D.ID2) OR (F.ID1 = D.ID2 AND F.ID2 = D.ID1)
)
AND D.ID1 <> D.ID2;  -- Avoid self-friendships
```
