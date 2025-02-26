[Back to Authentication index](./index.md)

#### Basic Authentication

Basic Authentication is a simple HTTP authentication scheme built into the HTTP protocol. It works by sending a user’s credentials (username and password) encoded in base64 format within the HTTP header.

When a client makes a request to a server requiring authentication, the server responds with a 401 status code and a “WWW-Authenticate” header. The client then resends the request with the Authorization header containing the word “Basic” followed by the base64-encoded string of “username:password”.

While easy to implement, Basic Authentication has significant security limitations: credentials are essentially sent in plain text (base64 is easily decoded), and it doesn’t provide any encryption. Therefore, it should only be used over HTTPS connections to ensure the credentials are protected during transmission. Due to its simplicity and lack of advanced security features, Basic Authentication is generally recommended only for simple, low-risk scenarios or as a fallback mechanism.

#### How it works

1. The client sends a request to an endpoint that requires authentication
2. The server responds with a 401 and `WWW-Authenticate` header.
3. The browser prompts the user to enter a username and password and when entered pipes those to base64 and sends them in the authorization header like `Authorization: Basic YWRtaorewkl12Vwxq`
4. The server checks the username and password and responds.

(Of course we don't need the browser to handle this - it's just built in. We can send them before we receive the 401 error).

[Next: Token Authentication](./04-token_authentication.md)
