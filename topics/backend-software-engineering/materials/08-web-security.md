[Back to front page](topics/backend-software-engineering/backend-software-engineering.md)

# Web Security Knowledge

Web security involves protecting web applications from threats and vulnerabilities to ensure data confidentiality, integrity, and availability.

Key practices include strong authentication and authorization mechanisms, using encryption (e.g., SSL/TLS) for secure data transmission, and validating user inputs to prevent attacks like SQL injection and cross-site scripting (XSS).

Secure coding practices, effective session management, and regular updates and patching are crucial for maintaining security. Additionally, ongoing security testing, including penetration testing and vulnerability assessments, helps identify and address potential weaknesses, safeguarding applications and maintaining user trust.

## Linked materials

- [Hashing Algorithms](hashing-algorithms.md)
- [API Security best practices](best-practices.md)

## Why HTTPS matters

### HTTPS protects your website's integrity

HTTPS helps prevent intruders from tampering with communication between your sites and your users' browsers. Intruders include both intentionally malicious attackers and legitimate but intrusive companies, such as ISPs that inject ads into pages

Intruders exploit unprotected communications to trick your users into giving up sensitive information or installing malware, or to insert their own resources. For example, some third parties inject ads that can break your user experience and create security vulnerabilities.
	
Intruders exploit every unprotected resource that travels between your websites and your users. Images, cookies, scripts, and HTML are all exploitable. Intrusions can occur at any point in the network, including a user's machine, a Wi-Fi hotspot, or a compromised ISP, just to name a few. HTTPS makes it harder for intruders to get access to your sites' resources.

### HTTPS protects your users' privacy and security

HTTPS prevents intruders from passively listening to communications between your websites and your users.
	
One common misconception about HTTPS is that the only websites that need HTTPS are those that handle sensitive communications. In fact, every unprotected HTTP request can potentially reveal information about your users' behaviors and identities.
	
A single visit to one of your unprotected websites might seem benign, but some intruders look at your users' aggregate browsing activities to make inferences about their behaviors and intentions, and to de-anonymize their identities. For example, employees might inadvertently disclose sensitive health conditions to their employers just by reading unprotected medical articles.
## Available Resources

- [OWASP Web Application Security Checklist](https://github.com/0xRadi/OWASP-Web-Checklist)
- [Why HTTPS matters](https://roadmap.sh/backend#:~:text=Article,Why%20HTTPS%20Matters)