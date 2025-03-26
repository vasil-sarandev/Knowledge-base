[Back to front page](topics/backend-software-engineering/backend-software-engineering.md)

# Web Security Knowledge

Web security involves protecting web applications from threats and vulnerabilities to ensure data confidentiality, integrity, and availability.

Key practices include strong authentication and authorization mechanisms, using encryption (e.g., SSL/TLS) for secure data transmission, and validating user inputs to prevent attacks like SQL injection and cross-site scripting (XSS).

Secure coding practices, effective session management, and regular updates and patching are crucial for maintaining security. Additionally, ongoing security testing, including penetration testing and vulnerability assessments, helps identify and address potential weaknesses, safeguarding applications and maintaining user trust.

## Linked materials

- [Hashing Algorithms](hashing-algorithms.md)
- [API Security best practices](best-practices.md)

## Hashing vs Encryption vs Encoding

- **Hashing** - Cannot be reversed. Converts data into a fixed-length value to verify integrity. Used for password storage, digital signatures, checksums.
- **Encryption** - Can be reversed with the correct key. Converts data into a secure format that can only be decrypted with a key. Used for secure communication (TLS/SSL), file encryption, protecting sensitive data.
- **Encoding** - Easily reversible without a key. Converts data into a different format for compatibility and transmission. Used for Base64 encoding (e.g - images in emails), URL encoding, data serialization

## Available Resources

- [OWASP Web Application Security Checklist](https://github.com/0xRadi/OWASP-Web-Checklist)
- [Why HTTPS matters](https://roadmap.sh/backend#:~:text=Article,Why%20HTTPS%20Matters)