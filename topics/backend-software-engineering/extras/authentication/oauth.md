[Back to Authentication index](06-authentication.md)

#### Open Authentication (OAuth)

OAuth is an open standard for authorization that allows third-party applications to access a user’s resources without exposing their credentials.

It works by issuing access tokens after users grant permission, which applications then use to interact with resource servers on behalf of the user.This process involves a resource owner (the user), a resource server (which holds the data), and an authorization server (which issues tokens).

OAuth enables secure, token-based access management, commonly used for granting applications permissions to interact with services like social media accounts or cloud storage.

##### How OAuth works and why it exists.

Developers build a lot of APIs. The API Economy is a common buzzword you might hear in boardrooms today. Companies need to protect their REST APIs in a way that allows many devices to access them. In the old days, you’d enter your username/password directory and the app would login directly as you. This gave rise to the delegated authorization problem.

“How can I allow an app to access my data without necessarily giving it my password?”

If you’ve ever seen one of the dialogs below, that’s what we’re talking about. This is an application asking if it can access data on your behalf.

![OAuth example](oauth.png)

This is OAuth.

OAuth is a delegated authorization framework for REST/APIs. It enables apps to obtain limited access (scopes) to a user’s data without giving away a user’s password. It decouples authentication from authorization and supports multiple use cases addressing different device capabilities. It supports server-to-server apps, browser-based apps, mobile/native apps, and consoles/TVs.

You can think of this like hotel key cards, but for apps. If you have a hotel key card, you can get access to your room. How do you get a hotel key card? You have to do an authentication process at the front desk to get it. After authenticating and obtaining the key card, you can access resources across the hotel.

To break it down simply, OAuth is where:

1. App requests authorization from User
2. User authorizes App and delivers proof
3. App presents proof of authorization to server to get a Token
4. Token is restricted to only access what the User authorized for the specific App

##### OAuth tokens

- Access token
  The token that the client uses to access the Resource Server (API). They're short lived - think in hours and minutes.
- Refresh token
  This is much longer-lived; days, months, years. This can be used to get new tokens. To get a refresh token, applications typically require confidential clients with authentication. Refresh tokens can be revoked.
  When revoking an application’s access in a dashboard, you’re killing its refresh token. This gives you the ability to force the clients to rotate secrets. What you’re doing is you’re using your refresh token to get new access tokens and the access tokens are going over the wire to hit all the API resources. Each time you refresh your access token you get a new cryptographically signed token. Key rotation is built into the system.

**Token formats**

The _OAuth_ spec doesn’t define what a token is. It can be in whatever format you want. Usually though, you want these tokens to be _JSON Web Tokens_ (a standard). In a nutshell, a `JWT` (pronounced “jot”) is a secure and trustworthy standard for token authentication. JWTs allow you to digitally sign information (referred to as claims) with a signature and can be verified at a later time with a secret signing key.

[Next: Basic Authentication](basic-auth.md)
