[Back to course frontpage](structured-query-language.md)

Table of Contents:

## Conditional Expressions and Operators

#### 1. CASE

The PostgreSQL `CASE` expression is the same as IF/ELSE statement in other programming languages. It allows you to add if-else logic to the query to form a powerful query.

Since `CASE` is an expression, you can use it in any place where you would use an expression such as SELECT, WHERE, GROUP BY, and HAVING clauses.

The `CASE` expression has two forms:

- General
- Simple

The following illustrates the general form of the CASE statement:

```SQL
CASE
      WHEN condition_1  THEN result_1
      WHEN condition_2  THEN result_2
      [WHEN ...]
      [ELSE else_result]
END
```

PostgreSQL provides another form of the CASE expression called simple form as follows:

```SQL
CASE expression
   WHEN value_1 THEN result_1
   WHEN value_2 THEN result_2
   [WHEN ...]
ELSE
   else_result
END
```

Simple CASE example:

```SQL
SELECT title,
       rating,
       CASE rating
           WHEN 'G' THEN 'General Audiences'
           WHEN 'PG' THEN 'Parental Guidance Suggested'
           WHEN 'PG-13' THEN 'Parents Strongly Cautioned'
           WHEN 'R' THEN 'Restricted'
           WHEN 'NC-17' THEN 'Adults Only'
       END rating_description
FROM film
ORDER BY title;
```

General CASE example:

```SQL
SELECT
  title,
  length,
  CASE WHEN length > 0
  AND length <= 50 THEN 'Short' WHEN length > 50
  AND length <= 120 THEN 'Medium' WHEN length > 120 THEN 'Long' END duration
FROM
  film
ORDER BY
  title;
```

#### 2. COALESCE

The `COALESCE()` function accepts a list of arguments and returns the first non-null argument.

Here’s the basic syntax of the `COALESCE()` function:

```SQL
COALESCE (argument_1, argument_2, …);
```

In practice, you often use the `COALESCE()` function to substitute a default value for null when querying data from nullable columns.

For example, if you want to display the excerpt from a blog post and the excerpt is not provided, you can use the first 150 characters of the content of the post.

To achieve this, you can use the COALESCE function as follows:

````SQL
SELECT
  COALESCE (
    excerpt,
    LEFT(content, 150)
  )
FROM
  posts;```
````

#### 3. NULLIF

The `NULLIF()` function is one of the most common conditional expressions provided by PostgreSQL.

Here’s the basic syntax of the NULLIF function:

```SQL
NULLIF(argument_1,argument_2);
```

The `NULLIF` function returns a null value if argument_1 equals to argument_2, otherwise, it returns argument_1.

**Sample usecase**
Let's imagine there is a mix between NULL value and ” (empty) in the excerpt column. To address this issue, you can use the NULLIF function:

```SQL
SELECT
  id,
  title,
  COALESCE (
    NULLIF (excerpt, ''),
    LEFT (body, 40)
  )
FROM
  posts;
```

#### 4. CAST

There are many cases in which you want to convert a value of one type into another. PostgreSQL offers the `CAST()` function and cast operator `(::)` to do this.

Here’s the basic syntax of the type CAST() function:

```SQL
CAST(<code>value</code> AS target_type );
```

**Examples**

The following statement uses the `CAST()` operator to convert a string to an integer:

```SQL
SELECT CAST ('100' AS INTEGER)
```

This example uses the `CAST()` function to convert a string to a date:

```SQL
SELECT
    CAST ('2015-01-01' AS DATE),
    CAST ('01-OCT-2015' AS DATE);
```

This example uses the `CAST()` to convert the string ‘true’, ‘T’ to true and ‘false’, ‘F’ to false:

```SQL
SELECT
   CAST('true' AS BOOLEAN),
   CAST('false' as BOOLEAN),
   CAST('T' as BOOLEAN),
   CAST('F' as BOOLEAN);
```

This example uses the cast operator (::) to convert a string to a timestamp:

```SQL
SELECT '2019-06-15 14:30:20'::timestamp;
```

The following example uses the CAST() to convert a timestamp to a date:

```SQL
SELECT CAST('2024-02-01 12:34:56' AS DATE);
```
