[Back to front page](../readme.md)

# Internet

**Available resources:**

- [How does the Internet Work?](<https://roadmap.sh/backend#:~:text=Article,work%3F%20(Full%20Course)>)
- [The Internet Explained](<https://roadmap.sh/backend#:~:text=Article,work%3F%20(Full%20Course)>)
- [How Does the Internet Work?](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)

## 1. How does the Internet work?

The internet is a global network of interconnected computers that communicate using standardized protocols, primarily TCP/IP. When you request a webpage, your device sends a data packet through your internet service provider (ISP) to a DNS server, which translates the website's domain name into an IP address. The packet is then routed across various networks (using routers and switches) to the destination server, which processes the request and sends back the response. This back-and-forth exchange enables the transfer of data like web pages, emails, and files, making the internet a dynamic, decentralized system for global communication.

## 2. What is HTTP?

HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext via the World Wide Web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. HTTP operates on a request-response model: a client (usually a web browser) sends an HTTP request to a server for resources, such as web pages or files, and the server responds with the requested content and an HTTP status code indicating the result of the request. HTTP is stateless, meaning each request from a client to a server is independent and does not retain information about previous interactions. It forms the foundation of data communication on the web and is typically used with secure HTTP (HTTPS) for encrypted communication.

**What does an HTTP request contain?**

1. HTTP Version type
2. URL
3. an HTTP method
4. HTTP request headers
5. (Optional) HTTP Request body

**HTTP Methods**

The most common HTTP methods are:

- **GET** - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content.
- **POST** - The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
- **PUT** - The PUT method replaces all current representations of the target resource with the request content.
- **PATCH** - The PATCH method applies partial modifications to a resource.
- **DELETE** - The DELETE method deletes the specified resource.

Other methods are: **HEAD**, **CONNECT**, **OPTIONS**, **TRACE**

[Mozilla's Develepor Guide to HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

**What’s an HTTP status code?**

HTTP status codes are 3-digit codes most often used to indicate whether an HTTP request has been successfully completed. Status codes are broken into the following 5 blocks:

1. 1xx Informational
2. 2xx Success
3. 3xx Redirection
4. 4xx Client Error
5. 5xx Server Error

The “xx” refers to different numbers between 00 and 99.

Status codes starting with the number ‘2’ indicate a success. For example, after a client requests a webpage, the most commonly seen responses have a status code of ‘200 OK’, indicating that the request was properly completed.

If the response starts with a ‘4’ or a ‘5’ that means there was an error and the webpage will not be displayed. A status code that begins with a ‘4’ indicates a client-side error (it is very common to encounter a ‘404 NOT FOUND’ status code when making a typo in a URL). A status code beginning in ‘5’ means something went wrong on the server side. Status codes can also begin with a ‘1’ or a ‘3’, which indicate an informational response and a redirect, respectively.

**Available Resources:**

- [What is HTTP](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/)
- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [HTTP/3 From A To Z: Core Concepts](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)

## 3. What is a Domain name?

A domain name is a human-readable address used to identify a specific location on the internet, making it easier to access websites and online services. It translates to an IP address, which is a numerical identifier used by computers to locate and connect to servers. A domain name consists of two main parts: the second-level domain (e.g., “example” in “example.com”) and the top-level domain (e.g., “.com”). Domain names are managed by domain name registrars and are essential for establishing a web presence, providing a user-friendly way to navigate to websites instead of using numeric IP addresses.

[What is a Domain Name? | Domain name vs URL](https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/)

## 4. What is Hosting?

Hosting refers to the service of providing server space and resources for storing and delivering website files and applications to users over the internet. Hosting providers offer the infrastructure, such as servers, storage, and network connectivity, required to make websites and applications accessible online. There are various types of hosting, including shared hosting (where multiple websites share a single server), virtual private servers (VPS), dedicated hosting (where a single server is dedicated to one user), and cloud hosting (which uses a network of servers to provide scalable resources). Hosting services often include domain registration, security features, and technical support to ensure websites are reliably available and perform well.

### What types of hosting exist?

There are various types of hosting, including:

- **Shared Hosting** - multiple websites share a single server.
- **Dedicated Hosting** - A single server is dedicated to one user.
- **Cloud Hosting** - A network of servers is used to provide scalable resources to the end-users.
- **Virtual Private Server(VPS)**

### What types of servers exist?

1. **Static web servers** - A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.
2. **Dynamic web servers** - A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

Sites like MDN or Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver the content.

**Available resources:**

- [What is the difference between Webpage, Website, Web server, and search engine?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)

## 5. What is DNS and how does it work?

DNS (Domain Name System) is a hierarchical, decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other. DNS servers distributed worldwide work together to resolve these queries, forming a global directory service. The system uses a tree-like structure with root servers at the top, followed by top-level domain servers (.com, .org, etc.), authoritative name servers for specific domains, and local DNS servers. DNS is crucial for the functioning of the Internet, enabling users to access websites and services using memorable names instead of numerical IP addresses. It also supports email routing, service discovery, and other network protocols.

**Available resources:**

- [How DNS works(comic)](https://howdns.works/)
- [What is DNS?](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)

## 6. What are Browsers and how do they work?

Web browsers are software applications that enable users to access, retrieve, and navigate information on the World Wide Web. They interpret and display HTML, CSS, and JavaScript to render web pages. Modern browsers like Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge offer features such as tabbed browsing, bookmarks, extensions, and synchronization across devices. They incorporate rendering engines (e.g., Blink, Gecko, WebKit) to process web content, and JavaScript engines for executing code. Browsers also manage security through features like sandboxing, HTTPS enforcement, and pop-up blocking. They support various web standards and technologies, including HTML5, CSS3, and Web APIs, enabling rich, interactive web experiences. With the increasing complexity of web applications, browsers have evolved to become powerful platforms, balancing performance, security, and user experience in the ever-changing landscape of the internet.

**What happens when you access an URL on the browser?**

1. DNS Lookup (translates `google.com` into an IP address like `192.168.1.1`)
2. TCP Handshakes - A Transmission Control Protocol handshake is done between the server and the browser so the actual request can reach the server.
3. TLS Negotiation - For secure connections established over HTTPS, another "handshake" is required. This handshake, or rather the TLS negotiation, determines which cipher will be used to encrypt the communication, verifies the server, and establishes that a secure connection is in place before beginning the actual transfer of data.
4. Request - The browser is finally able to make the **HTTP GET** request now on behalf of the user
5. Response - Once the server receives the request, it will respond with the relevant response headers and the contents of the HTML.
6. Parsing - Once the browser receives the first chunk of data, it can begin parsing the information received. Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, which is used by the renderer to paint a page to the screen.
   The DOM is the internal representation of the markup for the browser. The DOM is also exposed and can be manipulated through various APIs in JavaScript.

**Available resources:**

- [How Browsers work](https://www.ramotion.com/blog/what-is-web-browser/)
- [Populating the Page: How Browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
