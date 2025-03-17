[Back to front page](backend-software-engineering.md)

# APIs

##### Available Resources

- [Amazon AWS - What is an API](https://aws.amazon.com/what-is/api/)

## Introduction

An API (Application Programming Interface) is a set of defined rules and protocols that allow different software applications to communicate and interact with each other. It provides a standardized way for developers to access and manipulate the functionalities or data of a service, application, or platform without needing to understand its internal workings. APIs can be public or private and are commonly used to integrate disparate systems, facilitate third-party development, and enable interoperability between applications. They typically include endpoints, request methods (like GET, POST, PUT), and data formats (like JSON or XML) to interact with.

## REST APIs

**REST** API standards are the common language for our digital world. They not only provide a consistent way for developers to produce and consume APIs, but also improve the health and performance of applications that rely on them.

To make an API service **RESTful**, six guiding constraints must be satisfied:

1. Use of a uniform interface (UI) 
	To have a uniform interface, multiple architectural constraints are required to guide the behavior of components. Additionally, resources should be unique so they are identifiable through a single URL.
2. Client-server based
	The uniform interface separates user concerns from data storage concerns. The client’s domain concerns UI and request-gathering, while the server’s domain concerns focus on data access, workload management, and security. The separation of client and server enables each to be developed and enhanced independently of the other.
3. Stateless operations
	Request from client to server must contain all of the information necessary so that the server can understand and process it accordingly. The server can’t hold any information about the client state.
4. RESTful resource caching
	Data within a response to a request must be labeled as cacheable or non-cacheable.
5. Layered system
	REST allows for an architecture composed of hierarchical layers. In doing so, each component cannot see beyond the immediate layer with which they are interacting.
6. Code on demand
	Because REST APIs download and execute code in the form of applets or scripts, there’s more client functionality. Oftentimes, a server will send back a static representation of resources in the form of XML or JSON. Servers can also send executable codes to the client when necessary.
## JSON APIs

`JSON` or JavaScript Object Notation is an encoding scheme that is designed to eliminate the need for an ad-hoc code for each application to communicate with servers that communicate in a defined way. JSON API module exposes an implementation for data stores and data structures, such as entity types, bundles, and fields.

Example

```JSON
{
  "links": {
    "self": "http://example.com/articles",
    "next": "http://example.com/articles?page[offset]=2",
    "last": "http://example.com/articles?page[offset]=10"
  },
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
    ...
}
```

## SOAP APIs

Simple Object Access Protocol (SOAP) is a message protocol for exchanging information between systems and applications. When it comes to application programming interfaces (APIs), a SOAP API is developed in a more structured and formalized way. SOAP messages can be carried over a variety of lower-level protocols, including the web-related Hypertext Transfer Protocol (HTTP).

SOAP Messages are encoded in the XML format.

**Skeleton SOAP Message**

```XML
<?xml version="1.0"?>

<soap:Envelope
xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">

<soap:Header>
...
</soap:Header>

<soap:Body>
...
  <soap:Fault>
  ...
  </soap:Fault>
</soap:Body>

</soap:Envelope>
```

## gPRC

gRPC is a high-performance, open source universal RPC framework, RPC stands for Remote Procedure Call, there’s an ongoing debate on what the g stands for. RPC is a protocol that allows a program to execute a procedure of another program located on another computer. The great advantage is that the developer doesn’t need to code the details of the remote interaction. The remote procedure is called like any other function. But the client and the server can be coded in different languages.

It's basically a more efficient protocal than HTTP but can't be used directly in the browser. It's used to communicate between servers or microservices. It also has bi-directional streaming capabilities.

## GraphQL

GraphQL is a query language for APIs and a runtime for executing those queries, developed by Facebook. Unlike REST, where fixed endpoints return predefined data, GraphQL allows clients to request exactly the data they need, making API interactions more flexible and efficient. It uses a single endpoint and relies on a schema that defines the types and structure of the available data. This approach reduces over-fetching and under-fetching of data, making it ideal for complex applications with diverse data needs across multiple platforms (e.g., web, mobile).

## Open API Specs

The _OpenAPI Specification_ (OAS), formerly known as `Swagger`, is a standard for defining and documenting _RESTful APIs_. It provides a structured format in YAML or JSON to describe API endpoints, request and response formats, authentication methods, and other metadata.

By using OAS, developers can create a comprehensive and machine-readable API description that facilitates client generation, automated documentation, and testing. This specification promotes consistency and clarity in API design, enhances interoperability between different systems, and enables tools to generate client libraries, server stubs, and interactive API documentation.

## HATEOAS

`HATEOAS` (Hypermedia As The Engine Of Application State) is a constraint of RESTful architecture that allows clients to navigate an API dynamically through hypermedia links provided in responses. Instead of hard-coding URLs or endpoints, the client discovers available actions through these links, much like a web browser following links on a webpage. This enables greater flexibility and decouples clients from server-side changes, making the system more adaptable and scalable without breaking existing clients. It’s a key element of REST’s principle of statelessness and self-descriptive messages.
