[Back to Authentication index](./index.md)

#### Cookie or Session Based Authentication

Cookie-based authentication is a method of maintaining user sessions in web applications.

When a user logs in, the server creates a session and sends a unique identifier (session ID) to the client as a cookie. This cookie is then sent with every subsequent request, allowing the server to identify and authenticate the user.

The actual session data is typically stored on the server, with the cookie merely serving as a key to access this data. This approach is stateful on the server side and works well for traditional web applications. It’s relatively simple to implement and is natively supported by browsers. However, cookie-based authentication faces challenges with cross-origin requests, can be vulnerable to CSRF attacks if not properly secured, and may not be ideal for modern single-page applications or mobile apps.

Despite these limitations, it remains a common authentication method, especially for server-rendered web applications.

##### Cookie for Session Based Auth example

```mathematica
Set-Cookie: sessionId=abc123xyz456; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`
```

[Next: OpenID](./06-openid.md)
