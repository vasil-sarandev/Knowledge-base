# Redis Cheatsheet

#cheatsheet

Redis is an open-source, in-memory data structure store, primarily used as a database, cache, and message broker. It supports various data structures like strings, hashes, lists, sets, and sorted sets, making it highly versatile. Redis operates with extremely low latency due to its in-memory nature, enabling fast access to data.

---
## Overview of Redis

- **In-memory database**
	An in-memory database is a purpose-built database that relies primarily on internal memory (RAM) for data storage. It enables minimal response times by eliminating the need to access standard disk drives (SSDs)
- **Key-value database**
	Key-value Database is a non-relational (NoSQL) database that stores data as a collection of key-value pairs. In this model, each piece of data is associated with a unique identifier (key) that is used to retrieve the corresponding value.
- **Cache**
	Redis cache is an in-memory key-value store used to cache frequently accessed data to improve application performance. By storing data in memory rather than on disk, Redis significantly reduces data access latency
- **Message Broker**
	Redis can serve as a lightweight message broker using its `PUBLISH` and `SUBSCRIBE` commands for a pub/sub messaging pattern, or through lists and sorted sets for more advanced messaging scenarios like task queues. Redis Streams provide additional features like message persistence, acknowledgment, and consumer groups, making it suitable for both real-time communication and more complex message processing pipelines.

--- 

## Running Redis

Redis, of course, provides a Cloud Solution that hosts the database for you.

You can run Redis locally by installing it and running it a service with Homebrew.

```javascript
# brew install redis
# brew services start redis // default host:port is localhost:6789

// and then connect with it through the redis-cli
# redis-cli // to pass different host/port than default, you can use redis-cli -h MY_HOST -p MY_PORT
```

However, it's recommended to run it in a Docker container using one of the popular images. Make sure to download the image first.

``` javascript
// runs the latest redis version in a Docker Container and names it "redis"
# docker run -d --name redis -p 6379:6379 redis:latest
// connect to it with redis-cli
# redis-cli -h 127.0.0.1 -p 6379
```

---
## Naming Conventions

Naming conventions in Redis are crucial for maintaining organized and understandable data structures, especially in large applications. 

Common practices include using colons (`:`) as separators for hierarchical keys (e.g., `user:1001:settings`), employing prefixes to group related keys (e.g., `session:`, `cache:`), and using concise, descriptive names to indicate the purpose and type of the key.

---
## Key Expiration

```javascript
EXPIRE key seconds [NX | XX | GT | LT]
```

Expired keys are removed during normal operations, such as when accessed or during periodic cleanup. This feature is useful for managing memory efficiently and for scenarios like session management or caching where temporary data storage is needed.

---
## Persistence Options

Redis provides two main persistence options: 

- **RDB (Redis Database Backup)** - RDB creates point-in-time snapshots of the dataset at specified intervals, offering efficient storage with minimal performance impact, making it suitable for periodic backups but with potential data loss between snapshots.
- **AOF (Append-Only File)** - AOF logs every write operation to disk, providing higher data durability by allowing finer-grained recovery, though it can be more resource-intensive.

---
## Replication

At the base of Redis replication there is a _leader follower_ (master-replica) replication that is simple to use and configure. 

It allows replica Redis instances to be exact copies of master instances. The replica will automatically reconnect to the master every time the link breaks, and will attempt to be an exact copy of it _regardless_ of what happens to the master.

---

## Authentication

Authentication in Redis is a security feature used to restrict access to the server by requiring clients to authenticate themselves with a password before performing any commands.

```node.js
const res1 = await client.auth({ password: 'temp_pass' }); // OK
const res2 = await client.auth({ username: 'default', password: 'temp_pass' }); //OK
```

---
## Strings

Redis strings store sequences of bytes, including text, serialized objects, and binary arrays. As such, strings are the simplest type of value you can associate with a Redis key. They're often used for caching, but they support additional functionality that lets you implement counters and perform bitwise operations, too.

### Basic Commands 

- `SET` - Stores a string value.
- `MSET` - Stores multiple string values in a single operation.
- `SETNX` - Stores a string value only if the key doesn't already exist. Useful for implementing locks.
- `GET` -  Retrieves a string value.
- `MGET` - Retrieves multiple string values in a single operation.
- `APPEND` - Appends a string to the value of a key. Creates the key if it doesn't exist.
- `DECR / DECRBY` - Decrements the numeric value of a key. Uses 0 as initial value if the key doesn't exist.
- `INCR / INCRBY` increments the numeric value of a key. Uses 0 as initial value if the key doesn't exist.

[Complete List of String Commands](https://redis.io/docs/latest/commands/?group=string)

---
## Hashes

Redis hashes are record types structured as collections of field-value pairs. You can use hashes to represent basic objects and to store groupings of counters, among other things.
### Basic commands

- `HSET` - sets the value of one or more fields on a hash.
- `HGET`- returns the value at a given field.
- `HGETALL` - Returns all fields and values in a hash.
- `HKEYS` - Returns all fields in a hash.
- `HVALUES` - Returns all values in a hash.
- `HEXISTS` - Determines whether a field exists in a hash.
- `HDEL` - Deletes one or more fields from a hash. Deletes the hash if no fields remain.
- `HINCRBY/HDECRBY` - Increments/Decrements the value at a given field by the integer provided. Uses 0 if the key doesn't exist.

[Complete List of Hash Commands](https://redis.io/docs/latest/commands/?group=hash)

---
## JSONS

The JSON capability of Redis Open Source provides JavaScript Object Notation (JSON) support for Redis. It lets you store, update, and retrieve JSON values in a Redis database, similar to any other Redis data type.

### Example

```node.js
const res1 = await client.json.set("bike", "$", '"Hyperion"');
console.log(res1); // OK

const res2 = await client.json.get("bike", { path: "$" });
console.log(res2); // ['"Hyperion"']

const res3 = await client.json.type("bike", "$");
console.log(res3); //  [ 'string' ]
```

---
## Lists

Redis Lists are linked lists of string values. Redis lists are frequently used to:

- Implement stacks and queues.
- Build queue management for background worker systems.

### Example

```node.js
const res1 = await client.lPush('bikes:repairs', 'bike:1');
```
### Basic Commands

- `LPUSH` - Adds a new element to the head of a list. `RPUSH` does the same but to the tail.
- `LPOP` - Removes and returns an element from the head of a list; `RPOP` does the same but from the tails of a list.
- `LLEN`-  Returns the length of a list.
- `LINSERT` - Inserts an element before or after another element in a list.
- `LSET` - Sets the value of an element in a list by its index.
- `LRANGE` - Returns a range of elements from a list.

[Complete List of Lists Commands](https://redis.io/docs/latest/commands/?group=list)

---
## Sets

A Redis set is an unordered collection of unique strings (members). You can use Redis sets to efficiently:

- Track unique items (e.g., track all unique IP addresses accessing a given blog post).
- Represent relations (e.g., the set of all users with a given role).
- Perform common set operations such as intersection, unions, and differences.

### Example

```node.js
const res3 = await client.sAdd('bikes:racing:france', ['bike:2', 'bike:3'])
```
### Basic Commands

- `SADD` - Adds a new member to a set.
- `SREM` - Removes the specified member from the set.
- `SISMEMBER` -  Tests a string for set membership.
- `SINTER`- Returns the set of members that two or more sets have in common (i.e., the intersection).
- `SCARD` - Returns the size (a.k.a. cardinality) of a set.

[Complete List of Sets Commands](https://redis.io/docs/latest/commands/?group=set)

---
## Sorted Sets

A Redis sorted set is a collection of unique strings (members) ordered by an associated score. When more than one string has the same score, the strings are ordered lexicographically. Some use cases for sorted sets include:

- Leaderboards. For example, you can use sorted sets to easily maintain ordered lists of the highest scores in a massive online game.
- Rate limiters. In particular, you can use a sorted set to build a sliding-window rate limiter to prevent excessive API requests.

You can think of sorted sets as a mix between a Set and a Hash. Like sets, sorted sets are composed of unique, non-repeating string elements, so in some sense a sorted set is a set as well.

### Example

```node.js
const res1 = await client.zAdd('racer_scores', { score: 100, value: 'Henshaw' });
console.log(res1);  // >>> 1

const res2 = await client.zAdd('racer_scores', { score: 150, value: 'Sarandev' });
console.log(res2);  // >>> 1
```

### Basic commands 

- `ZADD` - Adds a new member and associated score to a sorted set. If the member already exists, the score is updated.
- `ZRANGE` - Returns members of a sorted set, sorted within a given range.
- `ZRANK` - Returns the rank of the provided member, assuming the sorted is in ascending order.

[Complete List of Sorted Set Commands](https://redis.io/docs/latest/commands/?group=sorted-set)

---
## Pub/Sub

Pub/Sub in Redis is a powerful messaging paradigm that allows for real-time communication between clients through a publish/subscribe model. 

In this system, publishers send messages to specific channels without knowing who, if anyone, will receive them. 

Subscribers, on the other hand, express interest in particular channels and receive messages published to those channels instantly. 

This decouples the message producers from the consumers, facilitating flexible and scalable communication. Key commands in this model include `PUBLISH` for sending messages, `SUBSCRIBE` for listening to channels, and `UNSUBSCRIBE` for stopping the reception of messages.

---
