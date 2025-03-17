[Back to Authentication index](06-authentication.md)

#### Token Authentication

Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token. Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated. Token-based authentication is different from traditional password-based or server-based authentication techniques. Tokens offer a second layer of security, and administrators have detailed control over each action and transaction.

##### JSON Web Tokens

JWT is a popular implementation of Token Authentication.

[Next: Cookie Authentication](token-authentication.md)
