[Back to course index](structured-query-language.md)

## Movie Rating Modification Exercises

You've started a new movie-rating website, and you've been collecting data on reviewers' ratings of various movies. There's not much data yet, but you can still try out some data modifications. Here's the schema:

Movie ( mID, title, year, director )
English: There is a movie with ID number mID, a title, a release year, and a director.

Reviewer ( rID, name )
English: The reviewer with ID number rID has a certain name.

Rating ( rID, mID, stars, ratingDate )
English: The reviewer rID gave the movie mID a number of stars rating (1-5) on a certain ratingDate.

Your modifications will run over a small data set conforming to the schema. [View the database](https://courses.edx.org/asset-v1:StanfordOnline+SOE.YDB-SQL0001+2T2020+type@asset+block/moviedata.html). (You can also download the schema and data.)

Instructions: You are to write each of the following data modification commands using SQL. Our back-end runs each modification using SQLite on the original state of the sample database. It then performs a query over the modified database to check whether your command made the correct modification, and restores the database to its original state.

You may perform these exercises as many times as you like, so we strongly encourage you to keep working with them until you complete the exercises with full credit.

### Exercises

1.  Add the reviewer Roger Ebert to your database, with an rID of 209.

```SQL
INSERT INTO Reviewer VALUES(209, 'Roger Ebert');
```

2.  For all movies that have an average rating of 4 stars or higher, add 25 to the release year. (Update the existing tuples; don't insert new tuples.)

```SQL
UPDATE MOVIE M
SET M.year = M.year + 25
WHERE M.MID in (
    SELECT M.MID
    FROM MOVIE M INNER JOIN RATING R ON M.MID = R.MID
    GROUP BY M.MID
    HAVING AVG(M.STARS) >= 4
)
```

3.  Remove all ratings where the movie's year is before 1970 or after 2000, and the rating is fewer than 4 stars.

```SQL
WITH LowRatedMovies as (
    SELECT M.MID
    FROM MOVIE M
    WHERE M.YEAR < 1970 OR M.YEAR > 2000
    INNER JOIN RATING R ON M.MID = R.MID
    GROUP BY M.MID
    HAVING AVG(R.STARS) < 4
)
DELETE FROM MOVIE M
WHERE M.MID in LowRatedMovies;
```
