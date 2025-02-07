[Back to course index](../index.md)

## SQL Introduction

"S.Q.L" or "sequel" has been around for decades and supports a many billion dollar markets.

- Supported by all major commercial database systems
- Standardized - many new features over time
- Interactive via GUI or prompt, or embedded in programs
- Declarative, based on relational algebra

There's 2 parts to the language.

1. Data Definition Language (**DDL**)
   -CREATE table, DROP table, etc..
2. Data Manipulation Language (DML)
   -SELECT, INSERT, DELETE, UPDATE, etc..

**The basic SELECT statement**
It's the bread and butter of the SQL and what we use to query the database. It consists of 3 basic clauses - SELECT, FROM and WHERE.

1. Select (A1, A2, ..., A100) - basically tells you what to return
2. From (R1, R2, ..., R100) - defines the relations we want to carry over
3. Where (condition) - it's used to combine and filter the relations
