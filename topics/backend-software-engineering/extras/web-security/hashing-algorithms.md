[Back to Web Security front-page](08-web-security.md)

## Hashing Algorithms

Hashing algorithms are functions that generate a fixed-length result (the hash, or hash value) from a given input. The hash value is a summary of the original data.

Hashing is irreversible but can technically be brute-forced with enough resources because a given input always produces the same hash.

#### 1. MD5 (Message-Digest Algorithm 5)

MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit hash value, typically represented as a 32-character hexadecimal number. It was designed to provide a unique identifier for data by generating a fixed-size output (the hash) for any input.

While MD5 was once popular for verifying data integrity and storing passwords, it is now considered cryptographically broken and unsuitable for security-sensitive applications due to vulnerabilities that allow for collision attacks (where two different inputs produce the same hash). As a result, MD5 has largely been replaced by more secure hash functions like SHA-256.

#### 2. SHA Family

SHA (Secure Hash Algorithm) is a family of cryptographic hash functions designed to generate a fixed-size hash value from variable-sized input data, ensuring data integrity and security. SHA functions are used for tasks such as verifying data integrity, storing passwords securely, and creating digital signatures.

The SHA family includes several versions, such as SHA-1, SHA-2, and SHA-3. SHA-1 produces a 160-bit hash value but is now considered weak due to vulnerabilities, while SHA-2, with hash sizes of 224, 256, 384, and 512 bits, offers stronger security. SHA-3 is the latest member, providing additional security features and flexibility.

[What is SHA?](https://www.encryptionconsulting.com/education-center/what-is-sha/)
[SHA: Secure Hashing Algorithm](https://www.youtube.com/watch?v=DMtFhACPnTY)

#### Scrypt

Scrypt is a key derivation function designed to be computationally intensive and memory-hard to resist brute-force attacks and hardware-based attacks, such as those using GPUs or ASICs.

It was developed to provide secure password hashing by making it difficult and costly for attackers to perform large-scale attacks. Scrypt combines a hash function with a large amount of memory usage and a CPU-intensive computation process, which ensures that even if an attacker can perform many computations in parallel, the memory requirements make such attacks impractical. It is commonly used in cryptographic applications, including secure password storage and cryptocurrency mining.

#### Bcrypt

Bcrypt is a password-hashing function designed to securely hash passwords for storage in databases. Created by Niels Provos and David Mazières, it’s based on the Blowfish cipher and incorporates a salt to protect against rainbow table attacks.

Bcrypt’s key feature is its adaptive nature, allowing for the adjustment of its cost factor to make it slower as computational power increases, thus maintaining resistance against brute-force attacks over time. It produces a fixed-size hash output, typically 60 characters long, which includes the salt and cost factor.

Bcrypt is widely used in many programming languages and frameworks due to its security strength and relative ease of implementation. Its deliberate slowness in processing makes it particularly effective for password storage, where speed is not a priority but security is paramount.
