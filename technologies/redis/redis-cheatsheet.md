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
