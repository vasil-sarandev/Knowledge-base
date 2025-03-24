[Back to front page](topics/backend-software-engineering/backend-software-engineering.md)

# Real-Time Data

Real-time data refers to information that is processed and made available immediately or with minimal delay, allowing users or systems to react promptly to current conditions. 

This type of data is essential in applications requiring immediate updates and responses, such as financial trading platforms, online gaming, real-time analytics, and monitoring systems. 

Real-time data processing involves capturing, analyzing, and delivering information as it is generated, often using technologies like stream processing frameworks (e.g., Apache Kafka, Apache Flink) and low-latency databases.

Effective real-time data systems can handle high-speed data flows, ensuring timely and accurate decision-making.

## Server-Sent Events (SSE)

Server-Sent Events (SSE) is a technology for sending real-time updates from a server to a web client over a single, persistent HTTP connection. It enables servers to push updates to clients efficiently and automatically reconnects if the connection is lost. 

SSE is ideal for applications needing one-way communication, such as live notifications or real-time data feeds, and uses a simple text-based format for transmitting event data, which can be easily handled by clients using the `EventSource` API in JavaScript.

[Server Sent Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

## WebSockets

WebSockets provide a protocol for full-duplex, real-time communication between a client (usually a web browser) and a server over a single, long-lived connection. 

Unlike traditional HTTP, which requires multiple request-response cycles to exchange data, WebSockets establish a persistent connection that allows for continuous data exchange in both directions. This enables efficient real-time interactions, such as live chat, online gaming, and real-time updates on web pages. 

WebSocket connections start with an HTTP handshake, then upgrade to a WebSocket protocol, facilitating low-latency communication and reducing overhead compared to HTTP polling or long polling.

[Introduction to WebSockets](https://www.tutorialspoint.com/websockets/index.htm)

## Long Polling

Long polling is a technique where the client polls the server for new data. However, if the server does not have any data available for the client, instead of sending an empty response, the server holds the request and waits for some specified period of time for new data to be available. If new data becomes available during that time, the server immediately sends a response to the client, completing the open request. If no new data becomes available and the timeout period specified by the client expires, the server sends a response indicating that fact. The client will then immediately re-request data from the server, creating a new request-response cycle.

[Long Polling](https://javascript.info/long-polling)

## Short Polling

Short polling is a technique where a client periodically sends requests to a server at regular intervals to check for updates or new data. 

The server responds with the current state or any changes since the last request. While simple to implement and compatible with most HTTP infrastructures, short polling can be inefficient due to the frequent network requests and potential for increased latency in delivering updates. 

It contrasts with long polling and WebSockets, which offer more efficient mechanisms for real-time communication. Short polling is often used when real-time requirements are less stringent and ease of implementation is a priority.

[Amazon SQS Short and Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html)
## Available Resources

- [Real-time Data - Wikipedia](https://en.wikipedia.org/wiki/Real-time_data)
- [What is Real-time Data?](https://www.qlik.com/us/streaming-data/real-time-data)