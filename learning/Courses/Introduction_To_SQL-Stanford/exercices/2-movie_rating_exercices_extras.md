[Back to course index](../index.md)

## Movie Rating Exercies

You've started a new movie-rating website, and you've been collecting data on reviewers' ratings of various movies. There's not much data yet, but you can still try out some interesting queries. Here's the schema:

**Movie ( mID, title, year, director )**
English: There is a movie with ID number mID, a title, a release year, and a director.

**Reviewer ( rID, name )**
English: The reviewer with ID number rID has a certain name.

**Rating ( rID, mID, stars, ratingDate )**
English: The reviewer rID gave the movie mID a number of stars rating (1-5) on a certain ratingDate.

Your queries will run over a small data set conforming to the schema. View the database. (You can also download the schema and data.)

**Instructions**: Each problem asks you to write a query in SQL. To run your query against our back-end sample database using SQLite, click the "Submit" button. You will see a display of your query result and the expected result. If the results match, your query will be marked "correct". You may run as many queries as you like for each question.

**Important Notes**:

Your queries are executed using SQLite, so you must conform to the SQL constructs supported by SQLite.
Unless a specific result ordering is asked for, you can return the result rows in any order.
You are to translate the English into a SQL query that computes the desired result over all possible databases. All we actually check is that your query gets the right answer on the small sample database. Thus, even if your solution is marked as correct, it is possible that your query does not correctly reflect the problem at hand. (For example, if we ask for a complex condition that requires accessing all of the tables, but over our small data set in the end the condition is satisfied only by Star Wars, then the query "select title from Movie where title = 'Star Wars'" will be marked correct even though it doesn't reflect the actual question.) Circumventing the system in this fashion will get you a high score on the exercises, but it won't help you learn SQL. On the other hand, an incorrect attempt at a general solution is unlikely to produce the right answer, so you shouldn't be led astray by our checking system.

You may perform these exercises as many times as you like, so we strongly encourage you to keep working with them until you complete the exercises with full credit.

![Movie Rating Exercises Database](../assets/movie-rating-exercise-db.png)

### Exercises

1.  Find the names of all reviewers who rated Gone with the Wind.

```SQL
SELECT DISTINCT RV.name
FROM Rating RT
INNER JOIN Reviewer RV ON RT.rID = RV.rID
INNER JOIN Movie M on RT.mID = M.mID and M.title = 'Gone with the Wind';
```

2.  For any rating where the reviewer is the same as the director of the movie, return the reviewer name, movie title, and number of stars.

```SQL
SELECT M.director, M.title, RT.stars
FROM Movie M
INNER JOIN Rating RT on M.mID = RT.mID
INNER JOIN Reviewer RV on RT.rID = RV.rID
WHERE RV.name = M.director;
```

3.  Return all reviewer names and movie names together in a single list, alphabetized. (Sorting by the first name of the reviewer and first word in the title is fine; no need for special processing on last names or removing "The".)

```SQL
SELECT RV.name
from Reviewer RV
union
SELECT M.title
from Movie M
ORDER BY RV.name, M.title;
```

4.  Find the titles of all movies not reviewed by Chris Jackson.

```SQL
SELECT DISTINCT M.title
FROM Movie M
WHERE NOT EXISTS
(SELECT *
 FROM Rating RT
 INNER JOIN Reviewer RV on RT.rID = RV.rID
 WHERE RV.name = 'Chris Jackson' and RT.mID = M.mID);
```

5.  For all pairs of reviewers such that both reviewers gave a rating to the same movie, return the names of both reviewers. Eliminate duplicates, don't pair reviewers with themselves, and include each pair only once. For each pair, return the names in the pair in alphabetical order.

```SQL
SELECT DISTINCT
    CASE
        WHEN RV1.name < RV2.name THEN RV1.name
        ELSE RV2.name
    END AS Reviewer1,
    CASE
        WHEN RV1.name < RV2.name THEN RV2.name
        ELSE RV1.name
    END AS Reviewer2
FROM Rating RT1
INNER JOIN Rating RT2 ON RT1.mID = RT2.mID -- Same movie
INNER JOIN Reviewer RV1 ON RT1.rID = RV1.rID -- First reviewer
INNER JOIN Reviewer RV2 ON RT2.rID = RV2.rID -- Second reviewer
WHERE RV1.rID < RV2.rID  -- Ensure we only pair each pair once
ORDER BY Reviewer1, Reviewer2;  -- Order pairs alphabetically
```

6. For each rating that is the lowest (fewest stars) currently in the database, return the reviewer name, movie title, and number of stars.

```SQL
SELECT RV.name, M.title, RT.stars
FROM Rating RT
INNER JOIN Reviewer RV on RV.rID = RT.rID
INNER JOIN Movie M on RT.mID = M.mID
WHERE NOT EXISTS (
    SELECT *
    FROM Rating RT1
    WHERE RT.stars < RT1.stars
);
```

7.  List movie titles and average ratings, from highest-rated to lowest-rated. If two or more movies have the same average rating, list them in alphabetical order.

```SQL
SELECT M.title, AVG(RT.stars) as avgRating
FROM Movie M
INNER JOIN Rating RT on M.mID = RT.mID
GROUP BY RT.mID
ORDER BY avgRating DESC, M.title;
```

8.  Find the names of all reviewers who have contributed three or more ratings. (As an extra challenge, try writing the query without HAVING or without COUNT.)

```SQL
SELECT RV.name
FROM REVIEWER RV
INNER JOIN Rating RT on RV.rID = RT.rID
GROUP BY RV.rID
HAVING COUNT(*) >= 3;
```

9.  Some directors directed more than one movie. For all such directors, return the titles of all movies directed by them, along with the director name. Sort by director name, then movie title. (As an extra challenge, try writing the query both with and without COUNT.)

```SQL
SELECT M.title, M.director
FROM Movie M
GROUP BY M.director
HAVING COUNT(*) > 1
ORDER BY M.director, M.title;
```

10. Find the movie(s) with the highest average rating. Return the movie title(s) and average rating. (Hint: This query is more difficult to write in SQLite than other systems; you might think of it as finding the highest average rating and then choosing the movie(s) with that average rating.)

```SQL
SELECT M.title, AVG(RT.stars) as avgRating
FROM Movie M INNER JOIN Rating RT on M.mID = RT.mID
GROUP BY M.mID
HAVING NOT EXISTS (
    SELECT AVG(RT1.stars) as avgRating1
    FROM Movie M1 INNER JOIN Rating RT1 on M1.mID = RT1.mID
    GROUP BY M.mID
    WHERE avgRating < avgRating1
);
```

This will work if there's a single movie with the most average stars.
This one should cover the scenario where there's more than one

```SQL
SELECT M.title, AVG(RT.stars) AS avgRating
FROM Movie M
INNER JOIN Rating RT ON M.mID = RT.mID
GROUP BY M.mID
HAVING AVG(RT.stars) = (
    SELECT MAX(avgRating)
    FROM (
        SELECT AVG(RT1.stars) AS avgRating
        FROM Movie M1
        INNER JOIN Rating RT1 ON M1.mID = RT1.mID
        GROUP BY M1.mID
    )
)
ORDER BY avgRating DESC;
```

11. Find the movie(s) with the lowest average rating. Return the movie title(s) and average rating. (Hint: This query may be more difficult to write in SQLite than other systems; you might think of it as finding the lowest average rating and then choosing the movie(s) with that average rating.)

```SQL
SELECT M.title, AVG(RT.stars) as avgRating
FROM Movie M INNER JOIN Rating RT ON M.mID = RT.mID
GROUP BY M.title
HAVING avgRating = (
    SELECT MIN(avgRating)
    FROM (
        SELECT AVG(RT1.stars) as avgRating
        FROM Movie M1
        INNER JOIN Rating RT1 on M1.mID = RT1.mID
        GROUP BY M1.mID
    )
)
```

12. For each director, return the director's name together with the title(s) of the movie(s) they directed that received the highest rating among all of their movies, and the value of that rating. Ignore movies whose director is NULL.

```SQL
SELECT M.director, M.title, MAX(RT.stars) as maxRating
FROM Movie M INNER JOIN Rating RT on M.mID = RT.mID
GROUP BY M.director, M.title
HAVING maxRating = (
    SELECT MAX(maxRating1)
    FROM (
        SELECT MAX(RT1.stars) as maxRating1
        FROM Movie M1 INNER JOIN Rating RT1 on M1.mID = RT1.mID
        WHERE M1.director = M.director
        GROUP BY M1.mID
    )
)
```
