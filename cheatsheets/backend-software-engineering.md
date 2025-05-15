## Backend Software Engineering Reference

### Internet & HTTP

The Internet is a global network that uses TCP/IP protocols for communication.

**HTTP:** A request-response protocol that defines how messages are formatted and transmitted, and how web servers and browsers should respond.

- **Methods:** `GET` (retrieve), `POST` (submit), `PUT` (replace), `PATCH` (modify), `DELETE` (remove)
- **Status Codes:** `1xx` (Informational), `2xx` (Success), `3xx` (Redirection), `4xx` (Client Error), `5xx` (Server Error)

---

### Hosting & DNS

**Hosting** provides server resources to store and deliver applications over the internet:

- **Shared Hosting:** Multiple websites on one server
- **Dedicated Hosting:** One server per user
- **Cloud Hosting:** Scalable, distributed resources
- **VPS (Virtual Private Server):** Isolated environments on a shared server

**DNS (Domain Name System):** Translates domain names into IP addresses.

---

### Databases

#### Relational Databases

Organize data in structured tables with schemas, using:

- **Primary & Foreign Keys** for integrity
- **ACID compliance** for reliable transactions

#### ACID Properties

- **Atomicity** - ensures that a transaction is treated as a single, indivisible unit that either completes entirely or fails completely. 
- **Consistency** - maintains the database in a valid state before and after the transaction. 
- **Isolation** - ensures that concurrent transactions do not interfere with each other, appearing to execute sequentially. 
- **Durability** - guarantees that once a transaction is committed, it remains so, even in the event of system failures.

#### Database Normalization

Improves integrity and reduces redundancy:

- **1NF:** Atomic values, unique rows    
- **2NF:** No partial dependencies
- **3NF:** No transitive dependencies
- **4NF+:** Advanced refinements

#### NoSQL Databases

NoSQL databases are a category of database management systems designed for handling unstructured, semi-structured, or rapidly changing data.

- **Document:** JSON/BSON/XML (e.g., MongoDB)
- **Key-Value:** Fast lookups (e.g., Redis)
- **Column:** Columnar storage (e.g., Cassandra)
- **Graph:** Relationship-focused (e.g., Neo4j)

#### Scaling Databases

- **Vertical Scaling** - Adding more resources (CPU, RAM, etc.) to a single server to handle increased load. 
- **Horizontal Scaling** - Adding more servers to handle the load. This can be done through: 
	- **Sharding**: A method where a database is split into smaller, more manageable parts (shards), which are distributed across multiple servers, enhancing search efficiency and overall performance. 
	- **Read Replicas**: A form of horizontal scaling where copies of a primary database are made. These replicas handle read traffic, distributing the load, and increasing the system’s capacity to handle read requests. 
	
#### Eventual Consistency 

In distributed databases, achieving **strong consistency** (where all nodes have the same data at any point in time) can be challenging, especially with horizontal scaling. Instead, many NoSQL databases (and even some relational systems in distributed environments) follow the principle of **eventual consistency**. 

**Eventual Consistency** means that while updates to the database may not be immediately reflected across all nodes, the system will eventually converge to a consistent state. This trade-off allows for higher availability and partition tolerance, especially in large-scale distributed systems.

#### CAP Theorem

The CAP Theorem is a fundamental principle in distributed database systems. It states that a distributed system can only guarantee two of the three: 

- **Consistency:** All nodes show the same data. 
- **Availability:** Every request gets a response. 
- **Partition Tolerance:** Operates despite network failures.

#### ORM (Object-Relational Mapping)

Maps DB tables to classes (e.g., Sequelize, Hibernate, TypeORM) for easier data manipulation.

#### Migrations

Version-controlled schema changes using tools like TypeORM, Flyway, or Liquibase.

---

### APIs

APIs allow software components to communicate:

- **REST:** Stateless, resource-based APIs. 
- **GraphQL:** Flexible querying with a single endpoint. 
- **gRPC:** Efficient, binary-based communication. 
- **OpenAPI (Swagger):** Standardized API documentation.

---

### Authentication & Authorization

**Authentication**: Proves identity (e.g., JWT, sessions)

**Authorization**: Grants access to resources (e.g., OAuth)

- **JWT** - Open standard for securely transmitting information between parties as a JSON object. A common way to use JWTs is OAuth Bearer Tokens. 
- **OAuth** - Open standard for authorization that allows third-party applications to access a user’s resources without exposing their credentials. 
- **Basic Authentication** - Simple HTTP authentication scheme built into the HTTP protocol. It works by sending a user’s credentials (username and password) encoded in base64 format within the HTTP header. 
- **Token-based authentication** - Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. JWT is the most popular implementation of token-based authentication nowadays. 
- **Cookies / Session-based Authentication** - Server-managed authentication. When a user logs in, the server creates a session and sends a unique identifier (session ID) to the client as a cookie. This cookie is then sent with every subsequent request, allowing the server to identify and authenticate the user.

---

### Web Security

**Principles:** Data confidentiality, integrity, availability

- **Encryption:** TLS/SSL
- **Input Validation:** Prevent SQLi, XSS, CSRF

#### Hashing, Encryption, Encoding

- **Hashing:** One-way (e.g., bcrypt)
- **Encryption:** Two-way (e.g., AES)
- **Encoding:** Format conversion (e.g., Base64)

---

### Caching

Stores frequently accessed data for speed:

- **Client-side:** Browser cache
- **Server-side:** In-memory cache
- **CDNs:** Edge delivery and protection

---

### CI/CD & Testing

Automates build and deployment:

- **CI/CD:** Automated testing, builds, deployment
- **Tests:** Unit, Integration, Functional

---

### Containers & Virtualization

- **Virtualization:** Creates separate virtual machines (VMs), each with its own operating system, running on a hypervisor. This provides strong isolation but consumes more resources. 
- **Containers (Docker):** Uses a shared operating system kernel to create isolated environments (containers) for applications. Containers are lighter, start faster, and use fewer resources than VMs. They’re ideal for microservices architectures and rapid deployment.
- **Orchestration (Kubernetes):** Manages containerized applications.
---

### Web Servers

Serve and process HTTP content:

- **Static web servers** - A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser. 
- **Dynamic web servers** - A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

**Popular Servers:** Nginx, Apache, IIS

---

### Real-Time Data

Deliver low-latency data to clients:

- **WebSockets:** Bi-directional, persistent
- **SSE:** Server-push over HTTP
- **Long Polling:** Hold open until data
- **Short Polling:** Periodic checks

---

### Message Brokers

Message brokers are intermediaries that facilitate communication between distributed systems or components by receiving, routing, and delivering messages. 

They enable asynchronous message passing, decoupling producers (senders) from consumers (receivers), which improves scalability and flexibility. - 

**Message Brokers:** Kafka, RabbitMQ, Azure Service Bus.

---

### Observability

Ability to infer internal system state from outputs:

- **Metrics:** Numeric time-series
- **Logs:** Text-based events
- **Traces:** End-to-end request path

**Tools:** Prometheus, Grafana, ELK Stack, OpenTelemetry