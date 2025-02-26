[Back to Caching front-page](./index.md)

## Server-side caching

### Introduction

Server-side caching is a technique used to improve application performance by storing frequently accessed data in memory on the server, reducing the need for repeated data retrieval or computation. This approach helps to speed up response times and reduce the load on databases and other backend services.

Common methods include caching database query results, HTML fragments, and API responses. Popular server-side caching tools and technologies include Redis, Memcached, and built-in caching mechanisms in web frameworks.

By efficiently managing and serving cached content, server-side caching enhances scalability and responsiveness of applications.

### Redis

Redis is an open-source, in-memory data structure store known for its speed and versatility. It supports various data types, including strings, lists, sets, hashes, and sorted sets, and provides functionalities such as caching, session management, real-time analytics, and message brokering.

Redis operates as a key-value store, allowing for rapid read and write operations, and is often used to enhance performance and scalability in applications. It supports persistence options to save data to disk, replication for high availability, and clustering for horizontal scaling.

Redis is widely used for scenarios requiring low-latency access to data and high-throughput performance.

### Memcached

Memcached (pronounced variously mem-cash-dee or mem-cashed) is a general-purpose distributed memory-caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD license.

##### Available resources

- [Redis - Roadmap.sh](https://roadmap.sh/redis)
- [Local vs distributed](https://redis.io/glossary/distributed-caching//)
- [Caching strategies](https://medium.com/@genchilu/cache-strategy-in-backend-d0baaacd2d79)
- [Server-side casching and client-side caching](https://www.codingninjas.com/codestudio/library/server-side-caching-and-client-side-caching)
