# Backend Software Engineering Reference

## Internet & HTTP

The Internet is a global network that uses TCP/IP protocols for communication.

**HTTP**
A protocol that defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. HTTP operates on a request-response model.

-  **Methods:** `GET` (retrieve), `POST` (submit), `PUT` (replace), `PATCH` (modify), `DELETE` (remove).
- **Status Codes:** `1xx` (info), `2xx` (success), `3xx` (redirect), `4xx` (client error), `5xx` (server error).

## Hosting & DNS

Hosting refers to the service of providing server space and resources for storing and delivering website files and applications to users over the internet. Hosting providers offer the infrastructure, such as servers, storage, and network connectivity, required to make websites and applications accessible online.

- **Shared Hosting** - multiple websites share a single server.
- **Dedicated Hosting** - A single server is dedicated to one user.
- **Cloud Hosting** - A network of servers is used to provide scalable resources to the end-users.
- **Virtual Private Server(VPS)**

**Domain Name System(DNS)**

Translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other. 

## Databases

### Relational Databases 

Databases the organize data into structured tables with rows and columns, using a schema to define data relationships and constraints. 

Relational databases enforce data integrity through keys (primary and foreign) and constraints (such as unique and not-null), and they are designed to handle complex queries, transactions, and data relationships efficiently. 

Transactions in Relational Databases comply with ACID.

### ACID (Atomicity Consistency Isolation Durability)

ACID is an acronym representing four key properties that guarantee reliable processing of database transactions. 

- **Atomicity** - ensures that a transaction is treated as a single, indivisible unit that either completes entirely or fails completely.
- **Consistency** - maintains the database in a valid state before and after the transaction.
- **Isolation** - ensures that concurrent transactions do not interfere with each other, appearing to execute sequentially.
- **Durability** - guarantees that once a transaction is committed, it remains so, even in the event of system failures.

### Database Normalization

Database Normalization is the process of making sure our database and tables comply with the so called Normal Forms. This reduces data redundancy and improves data integrity.

- **1NF:** Atomic values, unique records.
- **2NF:** No partial dependencies.
- **3NF:** No transitive dependencies.
- **4NF:** No multi-valued dependencies.
- **5NF & 6NF:** Advanced optimizations.

### NoSQL Databases

NoSQL databases are a category of database management systems designed for handling unstructured, semi-structured, or rapidly changing data. 

- **Document Databases** - Store data in JSON, BSON, or XML formats, allowing for flexible and hierarchical data structures (e.g., MongoDB, CouchDB).
- **Key-Value Stores** - Store data as key-value pairs, suitable for high-speed read and write operations (e.g. Redis).
- **Column Databases** - Store data in columns rather than rows, which is useful for handling large volumes of data and wide columnar tables (e.g. - Apache Cassandra).
- **Graph Databases** - Optimize the storage and querying of data with complex relationships using graph structures (e.g. - Neo4j).

### Scaling Databases

- **Vertical Scaling** - Adding more resources (CPU, RAM, etc.) to a single server to handle increased load.
- **Horizontal Scaling** - Adding more servers to handle the load. This can be done through:
    - **Sharding**: A method where a database is split into smaller, more manageable parts (shards), which are distributed across multiple servers, enhancing search efficiency and overall performance.
    - **Read Replicas**: A form of horizontal scaling where copies of a primary database are made. These replicas handle read traffic, distributing the load, and increasing the system’s capacity to handle read requests.

#### Eventual Consistency

In distributed databases, achieving **strong consistency** (where all nodes have the same data at any point in time) can be challenging, especially with horizontal scaling. Instead, many NoSQL databases (and even some relational systems in distributed environments) follow the principle of **eventual consistency**.

**Eventual Consistency** means that while updates to the database may not be immediately reflected across all nodes, the system will eventually converge to a consistent state. This trade-off allows for higher availability and partition tolerance, especially in large-scale distributed systems.

### CAP Theorem

The CAP Theorem is a fundamental principle in distributed database systems. It states that a distributed system can only guarantee two of the three:

- **Consistency:** All nodes show the same data.    
- **Availability:** Every request gets a response.
- **Partition Tolerance:** Operates despite network failures.

### ORM (Object-Relational Mapping)

ORM frameworks map database tables to classes and rows to objects, enabling developers to perform database operations through objects rather than writing raw SQL queries. This abstraction simplifies data manipulation and improves code maintainability by aligning database interactions with the application’s object model. 

Common implementations for ORMs are: TypeORM, Sequelize, Hibernate, Entity Framework.

### Migrations

Database migrations are a version-controlled way to manage and apply incremental changes to a database schema over time, allowing developers to modify the database structure (e.g., adding tables, altering columns) without affecting existing data.

Migrations are typically written in SQL or a database-agnostic language, and are executed using migration tools like Liquibase, Flyway, or built-in ORM features such as TypeORM migrations.

## APIs

An API (Application Programming Interface) is a set of defined rules and protocols that allow different software applications to communicate and interact with each other. 

- **REST:** Stateless, resource-based APIs.
- **GraphQL:** Flexible querying with a single endpoint.
- **gRPC:** Efficient, binary-based communication.
- **OpenAPI (Swagger):** Standardized API documentation.

## Authentication

Authentication is the process of verifying the identity of clients attempting to access an API, ensuring that only authorized users or applications can interact with the API.

- **JWT** - Open standard for securely transmitting information between parties as a JSON object. A common way to use JWTs is OAuth Bearer Tokens.
- **OAuth** - Open standard for authorization that allows third-party applications to access a user’s resources without exposing their credentials. 
- **Basic Authentication** - Simple HTTP authentication scheme built into the HTTP protocol. It works by sending a user’s credentials (username and password) encoded in base64 format within the HTTP header.
- **Token-based authentication** - Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. JWT is the most popular implementation of token-based authentication nowadays.
- **Cookies / Session-based Authentication** - Server-managed authentication. When a user logs in, the server creates a session and sends a unique identifier (session ID) to the client as a cookie. This cookie is then sent with every subsequent request, allowing the server to identify and authenticate the user.

## Web Security

Web security involves protecting web applications from threats and vulnerabilities to ensure data confidentiality, integrity, and availability.

Key practices include strong authentication and authorization mechanisms, using encryption (e.g., SSL/TLS) for secure data transmission, and validating user inputs to prevent attacks like SQL injection and cross-site scripting (XSS).

### Hashing, Encryption, and Encoding

- **Hashing:** One-way transformation for integrity (bcrypt, SHA, scrypt).    
- **Encryption:** Two-way transformation for security (AES, RSA, TLS/SSL).
- **Encoding:** Reversible for format compatibility (Base64, URL encoding).

### OWASP Best Practices

Prevent XSS, SQL Injection, CSRF.

## Caching

Caching is a technique used in computing to store and retrieve frequently accessed data quickly, reducing the need to fetch it from the original, slower source repeatedly.

It involves keeping a copy of data in a location that’s faster to access than its primary storage. Caching can occur at various levels, including browser caching, application-level caching, and database caching.

- **Client-side caching** - Store data locally on the user’s device to improve performance and reduce server load
- **Server-side caching** - Storing frequently accessed data in memory on the server, reducing the need for repeated data retrieval or computation
- **CDN** - Serving assets and contents via a CDN reduces bandwidth on website hosting, provides an extra layer of caching to reduce potential outages and can improve website security as well.

## CI/CD & Testing

CI/CD (Continuous Integration/Continuous Delivery) is a set of practices and tools in software development that automate the process of building, testing, and deploying code changes.

Continuous Integration involves frequently merging code changes into a central repository, where automated builds and tests are run. Continuous Delivery extends this by automatically deploying all code changes to a testing or staging environment after the build stage.

- **CI/CD:** Automate build, test, deployment.    
- **Testing Types:** Unit, Integration, Functional.

## Containers & Virtualization

- **Virtualization:** Creates separate virtual machines (VMs), each with its own operating system, running on a hypervisor. This provides strong isolation but consumes more resources. 
- **Containers (Docker):**  Uses a shared operating system kernel to create isolated environments (containers) for applications. Containers are lighter, start faster, and use fewer resources than VMs. They’re ideal for microservices architectures and rapid deployment.
- **Orchestration (Kubernetes):** Manages containerized applications.

## Web Servers

Handles HTTP requests and serves content.

 - **Static web servers** - A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.
- **Dynamic web servers** - A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

**Popular Servers:** Apache, Nginx, IIS

## Real-Time Data

Real-time data refers to information that is processed and made available immediately or with minimal delay, allowing users or systems to react promptly to current conditions. 

- **WebSockets:** They provide a protocol for two-directional, real-time communication between a client (usually a web browser) and a server over a single, long-lived connection. 
- **Server-Sent Events (SSE):** A technology for sending real-time updates from a server to a web client over a single, persistent HTTP connection. It enables servers to push updates to clients efficiently and automatically reconnects if the connection is lost.
- **Long Polling** - The client polls the server for new data but if none is available, the server holds the request for a specified time and waits for new data to be available.
- **Short polling** - A technique where a client periodically sends requests to a server at regular intervals to check for updates or new data. The server responds with the current state or any changes since the last request. 

## Message Brokers

Message brokers are intermediaries that facilitate communication between distributed systems or components by receiving, routing, and delivering messages. They enable asynchronous message passing, decoupling producers (senders) from consumers (receivers), which improves scalability and flexibility. 

- **Message Brokers:** Kafka, RabbitMQ, Azure Service Bus.

## Scalability & Observability

### Observability

Observability refers to the ability to understand and monitor the internal state of a system based on its external outputs, such as metrics, logs, and traces. It encompasses collecting, analyzing, and visualizing data to gain insights into system performance, detect anomalies, and troubleshoot issues. Common tools for Observability are Datadog, AWS CloudWatch and Sentry.

### Mitigation Strategies

Mitigation strategies in Software Engineering are techniques and practices designed to reduce risks, improve system resilience, and ensure reliability. 

- **Circuit Breaker** - A way to protect a system from failures or excessive load by temporarily stopping certain operations if the system is deemed to be in a failed or overloaded state. It is commonly used in cloud computing environments to prevent cascading failures and to improve the resilience and availability of a system. 
- **Load Shifting** - A strategy used to manage and distribute computing or system workloads more efficiently by moving or redistributing the load from peak times to off-peak periods. 
- **Backpressure** - A flow control mechanism in systems processing asynchronous data streams, where the receiving component signals its capacity to handle incoming data to the sending component. This feedback loop prevents overwhelming the receiver with more data than it can process, ensuring system stability and optimal performance. 
- **Throttling** - A technique used to control the rate at which requests or operations are processed, typically to prevent overloading a system or service. It involves setting limits on the number of requests a user or application can make within a specific time period. 

### Migration Strategies

Migration strategies involve planning and executing the transition of applications, data, or infrastructure from one environment to another, such as from on-premises systems to the cloud or between different cloud providers.

- **Rehost (Lift and Shift)**: Moving applications as-is to the new environment with minimal changes, which is often the quickest but may not fully leverage new platform benefits.
- **Replatform**: Making some optimizations or changes to adapt applications for the new environment, enhancing performance or scalability while retaining most of the existing architecture.
- **Refactor**: Redesigning and modifying applications to optimize for the new environment, often taking advantage of new features and improving functionality or performance.
- **Repurchase**: Replacing existing applications with new, often cloud-based, solutions that better meet current needs.
- **Retain**: Keeping certain applications or systems in their current environment due to specific constraints or requirements.
- **Retire**: Decommissioning applications that are no longer needed or are redundant.