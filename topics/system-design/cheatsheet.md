# System Design

In software engineering, system design is a phase in the software development process that focuses on the high-level design of a software system, including the architecture and components, and how they interact with each other.

---
## General Terminology

### Performance vs Scalability

- If you have a **performance** problem, your system is slow for a single user.
- If you have a **scalability** problem, your system is fast for a single user but slow under heavy load.

### Latency vs Throughput

- **Latency** refers to the amount of time it takes for a system to respond to a request.
- **Throughput** refers to the number of requests that a system can handle at the same time.

### Availability vs Consistency

- **Availability** refers to the ability of a system to provide its services to clients even in the presence of failures.
- **Consistency** refers to the property that all clients see the same data at the same time.

### Reliability

Resiliency is the ability of a system to gracefully handle and recover from failures, both inadvertent and malicious.

---

## CAP Theorem

According to the CAP theorem, in a distributed system, you can only support two of the following guarantees:

- **Consistency** - Every read receives the most recent write or an error
- **Availability** - Every request receives a response, without guarantee that it contains the most recent version of the information
- **Partition Tolerance** - The system continues to operate despite arbitrary partitioning due to network failures

---

## Consistency Patterns

Consistency patterns refer to the ways in which data is stored and managed in a distributed system, and how that data is made available to users and applications. There are three main types of consistency patterns:

 - **Strong Consistency** - After an update is made to the data, it will be immediately visible to any subsequent read operations. The data is replicated in a synchronous manner, ensuring that all copies of the data are updated at the same time.
 - **Eventual Consistency** - After an update is made to the data, it will be eventually visible to any subsequent read operations. The data is replicated in an asynchronous manner, ensuring that all copies of the data are eventually updated.
 - **Weak Consistency** - After an update is made to the data, it is not guaranteed that any subsequent read operation will immediately reflect the changes made. The read may or may not see the recent write.

---

## Availability Patterns

Availability is measured as a percentage of uptime, and defines the proportion of time that a system is functional and working. Availability is affected by system errors, infrastructure problems, malicious attacks, and system load

### Replication

Replication is an availability pattern that involves having multiple copies of the same data stored in different locations. In the event of a failure, the data can be retrieved from a different location. There are 2 main types of replication:

- **Master-Slave Replication** - In this type of replication, one server is designated as the "master" and handles all write operations, while multiple "slave" servers handle read operations. If the master fails, one of the slaves can be promoted to take its place.
- **Master-Master Replication** - In this type of replication, multiple servers are configured as "masters," and each one can accept read and write operations. This allows for high availability and allows any of the servers to take over if one of them fails. However, this type of replication can lead to conflicts if multiple servers update the same data at the same time, so some conflict resolution mechanism is needed to handle this.

### Fail-Over

Failover is an availability pattern that is used to ensure that a system can continue to function in the event of a failure. It involves having a backup component or system that can take over in the event of a failure.

- **Active-Passive Fail-Over** - Heartbeats are sent between the active and the passive server on standby. If the heartbeat is interrupted, the passive server takes over the active's IP address and resumes service.
- **Active-Active Fail-Over** - In active-active, both servers are managing traffic, spreading the load between them.

---

## Background Jobs

Background jobs in system design refer to tasks that are executed in the background, independently of the main execution flow of the system. These tasks are typically initiated by the system itself, rather than by a user or another external agent. 

They can be *Event* or *Schedule Driven*. Use cases include: 

- Performing maintenance tasks: such as cleaning up old data or generating reports.
- Processing large volumes of data: such as data import, data export, or data transformation.
- Sending notifications or messages: sending email notifications or push notifications to users.
- Performing long-running computations: such as machine learning or data analysis.

---

## Content Delivery Networks

A content delivery network (CDN) is a globally distributed network of proxy servers, serving content from locations closer to the user.

- **Push CDNs** - Push CDNs receive new content whenever changes occur on your server. You take full responsibility for providing content, uploading directly to the CDN and rewriting URLs to point to the CDN. Push CDNs are good for small websites or ones where content doesn't update often.
- **Pull CDNs** - Pull CDNs grab new content from your server when the first user requests the content. You leave the content on your server and rewrite URLs to point to the CDN. Pull CDNs work well with traffic-heavy websites.

---
## Load Balancer & Reverse Proxy

### Load Balancer

Load balancers distribute incoming client requests to computing resources such as application servers and databases. In each case, the load balancer returns the response from the computing resource to the appropriate client. Load balancers are effective at:

- Preventing requests from going to unhealthy servers
- Preventing overloading resources
- Helping to eliminate a single point of failure

### Reverse Proxy

A reverse proxy server sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. The requested resources are then returned to the client, appearing as if they originated from the proxy server itself.

Some of the benefits a Reverse Proxy provides are:

- **Increased security** -no information about your backend servers is visible outside your internal network, so malicious clients cannot access them directly to exploit any vulnerabilities. 
- **Increased scalability and flexibility** - because clients see only the reverse proxy’s IP address, you are free to change the configuration of your backend infrastructure. 
- **Web acceleration** - through *Intelligent Compression*, *Caching*, or *SSL acceleration*.

### Load Balancers vs Reverse Proxies

While they serve similar purposes, Load Balancers are most commonly deployed when a site needs multiple servers because the volume of requests is too much for a single server to handle efficiently. Reverse Proxies often make sense be deployed even with a single server so they can serve as the application's "public face".

---

## Service Discovery and Service Mesh

### Service Discovery

_Service discovery_ helps you discover, track, and monitor the health of services within a network. Service discovery registers and maintains a record of all your services in a _service catalog_. This service catalog acts as a single source of truth that allows your services to query and communicate with each other.

A service consumer communicates with the "Web" service via a unique DNS entry provided by the service catalog (such as Consul, Etcd, Apache Zookeper).

### Service Mesh

*Service Discovery* is great for small systems, but large complex systems often use a dedicated infrastructure layer that facilitates communication and discovery between services called a Service Mesh.

The service mesh serves as a powerful design pattern that abstracts the underlying network infrastructure, providing a standardized solution by deploying sidecar proxies alongside your services. These proxies, often leveraging technologies like the Envoy proxy, handle critical networking tasks, security enforcement, and observability.

---

## Databases

