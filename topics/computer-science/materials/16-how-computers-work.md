[Back to Computer Science frontpage](topics/computer-science/computer-science.md)

# How Computers Work

## How CPU Executes Programs

The CPU executes programs by repeatedly fetching instructions from memory, decoding them to understand the operation, and then executing those operations. 

This cycle, called the *fetch-decode-execute* cycle, continues for each instruction in the program, with the CPU using registers for temporary storage and a program counter to keep track of the next instruction. 

Modern CPUs use techniques like pipelining and caches to speed up this process, enabling them to execute complex programs efficiently.

[How CPU Executes a Program](https://www.youtube.com/watch?v=XM4lGflQFvA)

## Registers and RAM

**_Registers_** are the smallest data-holding elements built into the processor itself. Registers are the memory locations that are directly accessible by the processor. The registers hold the instruction or operands currently accessed by the CPU.

**_Memory_** is a hardware device that stores computer programs, instructions, and data. The memory that is internal to the processor is primary memory (RAM), and the memory that is external to the processor is secondary (**Hard Drive**).

[RAM vs. Registers - What's the Difference?](https://thisvsthat.io/ram-vs-registers)

## Instructions and Programs

Instructions are the most basic commands a CPU can understand, directing it to perform specific actions like adding numbers or moving data. 

A program, on the other hand, is a collection of these instructions, organized in a sequence to accomplish a particular task. 

Think of instructions as individual words and a program as a complete sentence or story; the CPU executes these instructions one by one, following the program's logic, to achieve the desired outcome.

## CPU Cache

A CPU cache is a hardware cache used by the central processing unit of a computer to reduce the average cost to access data from the main memory. A cache is a smaller, faster memory, located closer to a processor core, which stores copies of the data from frequently used main memory locations.

[What is CPU Cache](https://www.howtogeek.com/854138/what-is-cpu-cache/)

## How Computers Calculate

Computers calculate using the binary system, where all data is represented as 0s and 1s. 

These binary states correspond to the ON/OFF positions of transistors, which are the building blocks of logic gates (AND, OR, NOT). Numbers, characters, and instructions are broken into binary sequences (bits), and grouped into bytes (8 bits). Arithmetic operations like addition are performed through logic gates, which combine binary values. The CPU executes these calculations by following a fetch-decode-execute cycle. Complex calculations, such as handling decimals, use floating-point representation. 

Programs written in high-level languages are compiled into machine code for the CPU to execute.

[How Does A Computer Calculate Numbers?](https://www.sciencing.com/computer-calculate-numbers-4705975/)