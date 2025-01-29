[Back to course index](./index.md)

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

![Movie Rating Exercises Database](./assets/movie-rating-exercise-db.png)

### Exercises

1. Find the titles of all movies directed by Steven Spielberg.

```SQL
SELECT title
FROM MOVIE
WHERE director = 'Steven Spielberg';
```

2. Find all years that have a movie that received a rating of 4 or 5, and sort them in increasing order.

```SQL
SELECT distinct year
FROM Movie M INNER JOIN Rating R using (mId)
WHERE R.stars >= 4
ORDER BY year ASC;
```

3.  Find the titles of all movies that have no ratings.

```SQL
SELECT title
FROM Movie M
WHERE M.mId not in (SELECT DISTINCT mID from Rating);
```

... or

```SQL
SELECT title
FROM (Movie M OUTER LEFT JOIN Rating R using (sID)) as X
WHERE X.rId is NULL;
```

4. Some reviewers didn't provide a date with their rating. Find the names of all reviewers who have ratings with a NULL value for the date.

```SQL
SELECT name
FROM Reviewer R INNER JOIN Rating Rt using(rId)
WHERE Rt.ratingDate is null;
```

5.  Write a query to return the ratings data in a more readable format: reviewer name, movie title, stars, and ratingDate. Also, sort the data, first by reviewer name, then by movie title, and lastly by number of stars.

```SQL
SELECT R.name, M.title, RT.stars, RT.ratingDate
FROM (Rating Rt INNER JOIN Reviewer R using (rId)) INNER JOIN Movie M using (mId)
ORDER BY R.name, M.title, Rt.stars;
```

6.  For all cases where the same reviewer rated the same movie twice and gave it a higher rating the second time, return the reviewer's name and the title of the movie.

```SQL
SELECT R.name, M.title
FROM (SELECT * FROM Rating RT1 INNER JOIN Rating RT2 using(rID) WHERE RT1.mID = RT2.mID and RT2.stars > RT1.stars and RT2.ratingDate > RT1.ratingDate) INNER JOIN Reviewer R using (rID) INNER JOIN Movie M using(mID);
```

or...

```SQL
SELECT R.name, M.title
FROM Rating RT1 INNER JOIN Rating RT2
    ON RT1.mID = RT2.mID AND RT2.stars > RT1.stars
INNER JOIN Reviewer R
    ON RT2.rID = R.rID
INNER JOIN Movie M
    ON RT1.mID = M.mID;
```

7.  For each movie that has at least one rating, find the highest number of stars that movie received. Return the movie title and number of stars. Sort by movie title.

```SQL
SELECT M.title, MAX(R.stars)
FROM Movie M
INNER JOIN Rating R
ON M.mID = R.mID
GROUP BY M.mID
ORDER BY M.title;
```

8. For each movie, return the title and the 'rating spread', that is, the difference between highest and lowest ratings given to that movie. Sort by rating spread from highest to lowest, then by movie title.

```SQL
SELECT M.title, MAX(R.stars) - MIN(R.stars) as diff
FROM Movie M
INNER JOIN Rating R
on M.mID = R.mID
GROUP BY M.title
ORDER BY diff DESC, M.title;
```

9. Find the difference between the average rating of movies released before 1980 and the average rating of movies released after 1980. (Make sure to calculate the average rating for each movie, then the average of those averages for movies before 1980 and movies after. Don't just calculate the overall average rating before and after 1980.)

```SQL
SELECT AVG(old.avg) - AVG(new.avg)
FROM
(SELECT M.mID, year, AVG(R.stars) as avg
FROM Movie M INNER JOIN Rating R
ON M.mID = R.mID
WHERE year >= 1980
GROUP BY M.title) as new
,
(SELECT M.mID, year, AVG(R.stars) as avg
FROM Movie M INNER JOIN Rating R
ON M.mID = R.mID
WHERE year < 1980
GROUP BY M.title) as old
```
