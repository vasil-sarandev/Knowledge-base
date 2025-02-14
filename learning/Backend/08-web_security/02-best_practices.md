[Back to Web Security front-page](./index.md)

##### Table of contents

1. [API Security Checklist](#api-security-checklist)
2. [HTTPS](#https)
3. [SSL/TLS](#ssltls)
4. [CORS](#cors)
5. [CSP (Content Security Policy)](#csp-content-security-policy)
6. [Server Security](#server-security)

## API Security best practices

#### API Security checklist

[API Security checklist](https://roadmap.sh/best-practices/api-security)

#### HTTPS

HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP designed to secure data transmission between a client (e.g., browser) and a server. It uses encryption through SSL/TLS protocols to ensure data confidentiality, integrity, and authenticity. This prevents sensitive information, like login credentials or payment details, from being intercepted or tampered with by attackers.

HTTPS is essential for securing web applications and has become a standard for most websites, especially those handling user data, as it helps protect against man-in-the-middle attacks and eavesdropping.

[HTTPS explained with carrier pigeons](https://baida.dev/articles/https-explained-with-carrier-pigeons)

#### SSL/TLS

Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are cryptographic protocols used to provide security in internet communications.

These protocols encrypt the data that is transmitted over the web, so anyone who tries to intercept packets will not be able to interpret the data. One difference that is important to know is that SSL is now deprecated due to security flaws, and most modern web browsers no longer support it. But TLS is still secure and widely supported, so preferably use TLS.

#### CORS

Cross-Origin Resource Sharing (CORS) is a security mechanism implemented by web browsers to control access to resources (like APIs or fonts) on a web page from a different domain than the one serving the web page. It extends and adds flexibility to the Same-Origin Policy, allowing servers to specify who can access their resources.

CORS works through a system of HTTP headers, where browsers send a preflight request to the server hosting the cross-origin resource, and the server responds with headers indicating whether the actual request is allowed. This mechanism helps prevent unauthorized access to sensitive data while enabling legitimate cross-origin requests. CORS is crucial for modern web applications that often integrate services and resources from multiple domains, balancing security needs with the functionality requirements of complex, distributed web systems.

#### CSP (Content Security Policy)

Content Security Policy (CSP) is a security standard implemented by web browsers to prevent cross-site scripting (XSS), clickjacking, and other code injection attacks. It works by allowing web developers to specify which sources of content are trusted and can be loaded on a web page.

CSP is typically implemented through HTTP headers or meta tags, defining rules for various types of resources like scripts, stylesheets, images, and fonts. By restricting the origins from which content can be loaded, CSP significantly reduces the risk of malicious code execution.

It also provides features like reporting violations to help developers identify and fix potential security issues. While powerful, implementing CSP requires careful configuration to balance security with functionality, especially for sites using third-party resources or inline scripts.

```HTML
<html>
  <head>
    ...
    <meta http-equiv="Content-Security-Policy"
          content="...policy definition here..." />
  </head>
  <body>
     ...
     <div id="app-root"></div>
     ...
  </body>
</html>
```

#### Server Security

Server security involves protecting servers from threats and vulnerabilities to ensure the confidentiality, integrity, and availability of the data and services they manage.

Key practices include:

- Patch Management: Regularly updating software and operating systems to fix vulnerabilities.
- Access Control: Implementing strong authentication mechanisms and restricting access to authorized users only.
- Firewalls and Intrusion Detection: Using firewalls to block unauthorized access and intrusion detection systems to monitor and respond to suspicious activities.
- Encryption: Encrypting data both in transit and at rest to protect sensitive information from unauthorized access.
- Security Hardening: Configuring servers with minimal services and features, applying security best practices to reduce the attack surface.
- Regular Backups: Performing regular backups to ensure data can be restored in case of loss or corruption.
- Monitoring and Logging: Continuously monitoring server activity and maintaining logs for auditing and detecting potential security incidents.
