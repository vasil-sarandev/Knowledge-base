[Back to course frontpage](structured-query-language.md)

## Introduction

### Database Management Systems (DBMS)

Database Management Systems (DBMS) provide efficient, reliable, convenient, and safe multi-user storage of and access to massive amounts of persistent data.

- **Massive** - DBMS handle MASSIVE amounts of data. Typically way more than a single computer can handle. The amount of data needed to be stored and processed is only growing faster. All companies, clinical studies, education, and pretty much everything else processes data.
- **Persistent** - The data outlives the programs that execute on that data. It is there before the program starts and it's there after the program finishes. Very often actually multiple programs run on the same data.
- **Safe** - Database systems, since they run critical applications (such as telecommunications or banking system), need to have guarantees that the data managed by the system will stay consistent. It won't be lost or overwritten when there are failures.
- **Multi-user** - Even if only one program operates on the database, it may allow many users or applications to access the data concurrently. The DBMS must have mechanisms that ensure that the data will stay consistent that make sure data will not be overwritten.
- **Convenient** - High-level query languages and Physical data independence. Even if there is a complete change in how the data is physically stored, programs shouldn't have to change to access the same data.
- **Efficient** - DBMS have to handle thousands of queries/updates per second. Constructing a DBMS that can execute complex queries at that rate over gigantic amounts of data is no simple task and it's provided by DBMS.
- **Reliability** - It's critically important for DBMS to be up all the time. 99.99999% uptime is the type of guarantee that DBMS are making for their applications.

Data-intensive applications may not use DBMS at all. There's a lot of data out there simply sitting in files or Excel spreadsheets.

### Key Concepts

##### 1. Data Model

The data model is a description of how the data is structured.
The most common data models are:

- **Relational dot model** - It is the most popular and in this model the data and the database is thought of as a set of records.
- **XML** - the XML document captures the data instead of a set of records
- **Graph** - all the data is stored in the form of nodes and edges.

##### 2. Schema versus data

One can think of this as kind of like types and variables in a programming lagnuage. The schema sets up the structure of the database. The data is the actual data stored with that schema.
Typically, the schema is set up at the beginning and doesn't very much and the data changes very rapidly.

##### Data definition language (DDL)

To set up the schema, one normally uses what's known as a Data definition language or DDL.

##### Data manipulation or query language (DML)

Once the data schema is set up and there's data, we're ready to query and modify the database. This is done with a Data Manipulation or query language (DML)

### Key people

- **DBMS implementer** - Builds the system
- **Database designer** - Establishes the schema.
- **Database application developer** - Builds the applications & programs that run on the database.
- **Database administrator** - loads the data, tunes the parameters to keep the system running smoothly.
