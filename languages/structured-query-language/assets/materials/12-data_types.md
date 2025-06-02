[Back to course frontpage](structured-query-language.md)

## DATA TYPES

#### BOOLEAN

PostgreSQL supports a single Boolean data type: BOOLEAN that can have three values: true, false and NULL.

PostgreSQL uses one byte for storing a boolean value in the database. The BOOLEAN can be abbreviated as BOOL.

In standard SQL, a Boolean value can be TRUE, FALSE, or NULL. However, PostgreSQL is quite flexible when dealing with TRUE and FALSE values.

The following table shows the valid literal values for TRUE and FALSE in PostgreSQL

![Boolean type](boolean.png)

#### CHAR, VARCHAR, AND TEXT

PostgreSQL provides three primary character types:

- CHARACTER(n) or CHAR(n)
- CHARACTER VARYING(n) or VARCHAR(n)
- TEXT

In this syntax, n is a positive integer that specifies the number of characters.

```
VARCHAR(n) - variable length with length limit
CHAR(n) - fixed length, padded with spaces
TEXT, VARCHAR - variable unlimited length
```

#### NUMERIC

The NUMERIC type can store numbers with a lot of digits. Typically, you use the NUMERIC type for storing numbers that require exactness such as monetary amounts or quantities.

Here’s the syntax for declaring a column with the NUMERIC type:

```
column_name NUMERIC(precision, scale)
```

In this syntax:

The `precision` is the total number of digits
The `scale` is the number of digits in the fraction part.

The following declares the price column with the numeric type that can store total numbers with 7 digits, 5 before the decimal points and 2 digits after the decimal point:

```SQL
price NUMERIC(7,2) --12345.993553243 -> 12345.99
```

#### DOUBLE PRECISION

In PostgreSQL, the `DOUBLE PRECISION` is an inexact, variable-precision numeric type.

Inexact means that PostgreSQL cannot exactly convert some values into an internal format and can only store them as approximations. Consequently, storing and querying a value might show a slight difference.

If your application requires exact storage and calculation, it’s recommended to use the `NUMERIC` type instead.

#### REAL

The REAL data type allows you to store single-precision floating-point numbers in the database.

A value of the real type takes 4 bytes of storage space. Its valid range is from -3.40282347 × 1038 and 3.40282347 × 1038.

Typically, you use the REAL data type to store floating-point numbers with relatively large ranges and precision is not critical, or when you are concerned about the storage space.

However, you can use the double precision data type if you need higher precision.

```SQL
CREATE TABLE weather (
    ...
    temperature_celsius REAL NOT NULL, --15.3, 18.2, 5.9, ...etc
)
```

#### INTEGER, SMALLINT, BIGINT

To store the whole numbers in PostgreSQL, you can use one of the following integer types:

- SMALLINT
- INTEGER
- BIGINT

The following table illustrates the limitations of each type:

![Limitations-integers](int-bigint-smallint.png)

#### DATE

PostgreSQL offers the `DATE` data type that allows you to store date data.

PostgreSQL uses 4 bytes to store a date value. The lowest and highest values of the `DATE` data type are 4713 BC and 5874897 AD, respectively.

When storing a date value, PostgreSQL uses the `yyyy-mm-dd` format such as 2000-12-31. It also uses the same format for inserting data into a DATE column.

If you create a table that has a DATE column and want to use the current date of the PostgreSQL server as the default value, you can use the `CURRENT_DATE` as the default value of the column using a `DEFAULT` constraint

For example, the following statement creates the documents table that has the posting_date column with the DATE data type.

```SQL
CREATE TABLE documents (
document_id SERIAL PRIMARY KEY,
header_text VARCHAR (255) NOT NULL,
posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);
```

**DATE functions**

1. Get the current date

To get the current date and time, you use the built-in NOW() function:

```SQL
SELECT NOW();
--output: 2024-02-01 08:48:09.599933+07
```

To get the date part only (without the time part), you use the cast operator (::) to cast a DATETIME value to a DATE value:

```SQL
SELECT NOW()::date;
--output: 2024-02-01
```

A quick way to get the current date is to use the CURRENT_DATE function:

SELECT CURRENT_DATE;

2. Output a date in a specific format

To output a date value in a specific format, you use the `TO_CHAR()` function.

The `TO_CHAR()` function accepts two parameters. The first parameter is the value you want to format, and the second is the template that defines the output format.

For example, to display the current date in dd/mm/yyyy format, you use the following statement:

```SQL
SELECT TO_CHAR(CURRENT_DATE, 'dd/mm/yyyy');
--output: 01/02/2024
```

3. Get the interval between two dates

The following example retrieves the service days of employees by subtracting the values in the hire_date column from today’s date:

```SQL
SELECT first_name, last_name, now() - hire_date as diff
FROM employees;

---output:  Shannon    | Freeman   | 6970 days 08:51:20.824847
```

4. Calculate ages in years, months, and days

To calculate age at the current date in years, months, and days, you use the AGE() function.

The following statement uses the AGE() function to calculate the ages of employees in the employees table.

```SQL
SELECT
	employee_id,
	first_name,
	last_name,
	AGE(birth_date)
FROM
	employees;

--output:     1 | Shannon    | Freeman   | 44 years 1 mon
```

5. Extract year, quarter, month, week, and day from a date value
   To get the year, quarter, month, week, and day from a date value, you use the EXTRACT() function.

The following statement extracts the year, month, and day from the birth dates of employees:

```SQL
SELECT
	employee_id,
	first_name,
	last_name,
	EXTRACT (YEAR FROM birth_date) AS YEAR,
	EXTRACT (MONTH FROM birth_date) AS MONTH,
	EXTRACT (DAY FROM birth_date) AS DAY
FROM
	employees;

--output:
-- employee_id | first_name | last_name | year | month | day
-------------+------------+-----------+------+-------+-----
--           1 | Shannon    | Freeman   | 1980 |     1 |   1
--           2 | Sheila     | Wells     | 1978 |     2 |   5
--           3 | Ethel      | Webb      | 1975 |     1 |   1
```

#### TIMESTAMP(s)

PostgreSQL provides you with two temporal data types for handling timestamps:

`timestamp`: a timestamp without a timezone one.
`timestamptz`: timestamp with a timezone.

**Timestamp functions**

To get the current timestamp you use the `NOW()` function as follows:

```SQL
SELECT NOW();
--output: 2024-01-31 21:01:58.985943-05
```

To get the current time without a date, you use the `CURRENT_TIME` function:

```SQL
SELECT CURRENT_TIME;
--output: 21:02:13.648512-05
```

To get the time of day in the string format, you use the `TIMEOFDAY()` function.

```SQL
SELECT TIMEOFDAY();
--output: Wed Jan 31 21:02:20.840159 2024 EST
```

To convert `2016-06-01 00:00` to America/Los_Angeles timezone, you use the `TIMEZONE()` function as follows:

```SQL
SELECT timezone('America/Los_Angeles','2016-06-01 00:00');
-- output: 2016-05-31 21:00:00
```

**Using default values for timestamp columns**

```SQL
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

**Updating the timestamps with a trigger**
To update the `updated_at` column whenever a value in the department table is updated, we can use the following:

```SQL
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = current_timestamp;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER department_updated_at_trigger
BEFORE UPDATE ON department
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
```

#### INTERVAL

The interval values are very useful when doing date or time arithmetic. For example, if you want to know the time of 3 hours 2 minutes ago at the current time of last year, you can use the following statement:

```SQL

SELECT
	now(),
	now() - INTERVAL '1 year 3 hours 20 minutes'
             AS "3 hours 20 minutes ago of last year";

--output
-- now | 3 hours 20 minutes ago of last year
---------------------------------+-------------------------------------
-- 2024-01-31 21:34:52.242914-05 | 2023-01-31 18:14:52.242914-05
```

#### TIME

PostgreSQL provides the `TIME` data type that allows you to store the time data in the database.

Here’s the syntax for declaring a column with the `TIME` data type:

```SQL
column_name TIME(precision);
```

In this syntax, the precision specifies the fractional seconds precision for the time value, which ranges from 1 to 6.

The `TIME` data type requires 8 bytes and its allowed range is from `00:00:00` to `24:00:00.`

#### UUID

`UUID` stands for Universal Unique Identifier defined by RFC 4122 and other related standards.

A UUID value is a 128-bit quantity generated by an algorithm that makes it unique in the known universe using the same algorithm.

The following shows some examples of UUID values:

```
40e6215d-b5c6-4896-987c-f30f3678f608
6ecd8c99-4036-403d-bf84-cf8400f67836
3f333df6-90a4-4fda-8dd3-9485d27cee36
```

```SQL
CREATE TABLE contacts (
    contact_id uuid DEFAULT gen_random_uuid(),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    PRIMARY KEY (contact_id)
);
```

#### ARRAY

In PostgreSQL, an array of a collection of elements that have the same data type.

Arrays can be one-dimensional, multidimensional, or even nested arrays.

Every data type has its companion array type e.g., `integer` has an `integer[]` array type, `character` has `character[]` array type.

If you define a user-defined data type, PostgreSQL also creates a corresponding array type automatically for you.

To define a column with an array type, you use the following syntax:

```SQL
column_name datatype []
```

**Example**

```SQL
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (100),
  phones TEXT []
);

INSERT INTO contacts (name, phones)
VALUES('John Doe',ARRAY [ '(408)-589-5846','(408)-589-5555' ]);
```

#### hstore

The `hstore` module implements the `hstore` data type for storing key-value pairs in a single value. The keys and values are text strings only.

In practice, you can find the hstore data type useful in some cases, such as semi-structured data or rows with many attributes that are rarely queried.

Before working with the hstore data type, you need to enable the hstore extension which loads the contrib module to your PostgreSQL instance.

The following statement creates the hstore extension:

```SQL
CREATE EXTENSION hstore;
...
CREATE TABLE books (
	id serial primary key,
	title VARCHAR (255),
	attr hstore
);
...

INSERT INTO books (title, attr)
VALUES
  (
    'PostgreSQL Tutorial', '"paperback" => "243",
     "publisher" => "postgresqltutorial.com",
     "language"  => "English",
     "ISBN-13"   => "978-1449370000",
     "weight"    => "11.2 ounces"'
  );
...

SELECT
	attr -> 'ISBN-13' AS isbn
FROM
	books;
--output: 978-1449370000
```

#### JSON

`JSON` stands for JavaScript Object Notation. `JSON` is a lightweight data interchange format that is readable for humans and simple for computers to parse.

`JSON` is based on two main data structures objects and arrays:

1. Objects

An object is defined as an unordered collection of key-value pairs enclosed in curly braces {}.

```JSON
{"title": "Chamber Italian", "release_year": 2006, "length": 117}
```

2. Arrays

An array is an ordered list of values enclosed in square brackets []. The values do not have to be the same type. Additionally, an array may contain values of any valid JSON data type including objects and arrays.

```JSON
["Chamber Italian", "Grosse Wonderful", " Airport Pollock"]
```

**PostgreSQL JSON data types**

PostgreSQL offers two data types for storing JSON:

- `JSON` – store an exact copy of the JSON text.
- `JSONB` – store the JSON data in binary format.

`JSONB` is typically smaller and faster but harder for manipulation. It is also only parsed once and then stored in binary.

In practice, you should use `JSONB` to store JSON data unless you have specialized requirements such as retaining the ordering of keys in the JSON documents.

#### ENUM

In PostgreSQL, an `enum` type is a custom data type that allows you to define a list of possible values for a column.

Here’s the syntax for creating a new `enum` type:

```SQL
CREATE TYPE enum_name
AS
ENUM('value1', 'value2', 'value3', ...);
```

#### BYTEA

In PostgreSQL, `BYTEA` is a binary data type that you can use to store binary strings or byte sequences. `BYTEA` stands for the binary array.

The following shows how to define a table column with the BYTEA data type:

```SQL
column_name BYTEA
```

The maximum size of a `BYTEA` column is 1GB. It means you can only store binary data up to 1GB in a single `BYTEA` column. However, storing a large amount of binary data in a `BYTEA` column is not efficient.

If files are larger than a few megabytes, you can store them externally and save the paths to the files in the database.
