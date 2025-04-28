[Back to Computer Science frontpage](computer-science.md)

# Security

Web security refers to the protective measures taken by the developers to protect the web applications from threats that could affect the business.

## Hashing, Encryption and Encoding

**Hashing** is a one-way function that takes an input and produces a fixed-length output. The output is called a hash. The hash is a unique representation of the input. The hash is deterministic, meaning that the same input will always produce the same hash. The hash is irreversible, meaning that it is impossible to go from the hash back to the original input. The hash is not collision-resistant, meaning that it is possible to find two different inputs that produce the same hash.

**Encryption** is a two-way function that takes an input and produces an output. The output is called ciphertext. The ciphertext is a unique representation of the input. The ciphertext is deterministic, meaning that the same input will always produce the same ciphertext. The ciphertext is reversible, meaning that it is possible to go from the ciphertext back to the original input. The ciphertext is collision-resistant, meaning that it is impossible to find two different inputs that produce the same ciphertext.

**Encoding** is a two-way function that takes an input and produces an output. The output is called encoded text. The encoded text is a unique representation of the input. The encoded text is deterministic, meaning that the same input will always produce the same encoded text. The encoded text is reversible, meaning that it is possible to go from the encoded text back to the original input. The encoded text is collision-resistant, meaning that it is impossible to find two different inputs that produce the same encoded text

[Encoding, Encryption and Hashing -- Whats the Difference?](https://www.youtube.com/watch?v=-bAnBzvMLig)

## Public key cryptography

Public-key cryptography (also known as **asymmetric cryptography**) is a type of cryptographic system that uses pairs of related keys.

Each key pair consists of a **public key** and a corresponding **private key**. These key pairs are generated using cryptographic algorithms based on mathematical problems called **one-way functions**.

Messages are signed using the **private key**, and their authenticity can easily be verified using the **public key**. However, without the private key, it is computationally infeasible to reverse-engineer the process or derive the private key from the public one.

[Public-key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)

## Hashing algorithms

Hashing algorithms are used to generate a unique value for a given input. This value is called a hash. Hashing algorithms are used to verify the integrity of data, to store passwords, and to generate unique identifiers for data.

Most popular algorithms are:
- MD5 - a 128-bit cryptographic hash function that is now considered broken due to vulnerabilities like collision attacks. It’s no longer secure for cryptographic purposes.
- SHA-family - SHA-1 is outdated and insecure, while SHA-2 is widely used for secure hashing. SHA-3 is the latest, offering better security with a different internal structure.
- Bcrypt - Bcrypt is a password hashing algorithm based on Blowfish, designed to be slow to resist brute-force attacks. It uses a salt and adjustable work factor for enhanced security.

[Hashing Algorithms and Security - Computerphile](https://www.youtube.com/watch?v=b4b8ktEV4Bg)


