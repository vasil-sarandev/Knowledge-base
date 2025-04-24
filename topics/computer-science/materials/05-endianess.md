[Back to Computer Science frontpage](computer-science.md)

# Endianness

**Endian** and **endianness** (or "byte-order") describe how computers organize the bytes that make up numbers.

Let's use the number `0x12345678` (i.e., 305 419 896 in decimal) for an example:

- _little-endian_: `0x78 0x56 0x34 0x12`
- _big-endian_: `0x12 0x34 0x56 0x78`

### Big-Endian

In this type, the most significant byte is stored at the lowest memory address. This means that the most significant byte is stored first and the least significant byte is stored last.

Big-endian is also often called "network byte order", because Internet standards usually require data to be stored big-endian, starting at the standard UNIX socket level and going all the way up to standardized Web binary data structures.

### Little-Endian

It is the opposite of Big-Endian. In Little-Endian, the least significant byte is stored first. 

By far the most common _ordering_ of multiple bytes in one number is the **little-endian**, which is used on all Intel processors.

## Available Resources

- [Endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness)
- [Big-Endian vs Little-Endian Explained with Examples](https://www.freecodecamp.org/news/what-is-endianness-big-endian-vs-little-endian/)
- [Lecture 22. Big Endian and Little Endian](https://www.youtube.com/watch?v=T1C9Kj_78ek)
