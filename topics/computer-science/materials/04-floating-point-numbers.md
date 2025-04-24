[Back to Computer Science frontpage](computer-science.md)

# Floating-point numbers

Floating-point numbers are numbers that have a decimal point in them. They are used to represent real numbers. For example, *3.14* is a floating point number. *3* is not a floating point number because it does not have a decimal point in it.

## Floating-point math

Floating-point numbers are how computers **approximate real numbers** using binary. They follow the **IEEE 754 standard**, which defines how numbers like `0.1`, `2.5`, or `3.14159` are stored in memory.

```JAVASCRIPT
// how the computer stores the floating number in memory
0.1 ≈ 0.0001100110011... (repeating)
0.2 ≈ 0.001100110011... (repeating)

// so when added the result is a tiny bit off
0.1 + 0.2 === 0.30000000000000004
```

This behavior can be seen in languages like Python, Java, C++, and JavaScript.
## Available Resources

- https://roadmap.sh/computer-science#:~:text=Point%20Numbers%20%2D%201-,Video,Why%200.1%20%2B%200.2%20!%3D%200.3%3F%20%7C%20Floating%20Point%20Math,-Find%20more%20resources
