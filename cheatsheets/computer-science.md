# Computer Science

## Data Structures 

### Arrays

Store elements in contiguous memory locations.

- Fast random access: **O(1)**. 
- Slow insertions/deletions (except at end): **O(n)**.
- Use when frequent indexing is required.

### LinkedLists

Stores its items in "containers". The list has a link to the first container and each container has a link to the next container in the list.

- **Types**:
	- **Singly**: one pointer to next.
	- **Doubly**: pointers to next and previous.
	- **Circular**: last node points to head.
- Fast insert/delete at head/tail: **O(1)** (with pointers).
- Slow search: **O(n)**.
- Use when frequent insertions/deletions are needed.

### Stack

 A linear collection of items where items are inserted and removed in a particular order (LIFO - Last In, First Out).
 
 - Operations:
	- `push()` → add to top
	- `pop()` → remove from top
	- `peek()` → view top
- Time Complexity: **O(1)** for all operations.
- Use for: expression parsing, undo operations, backtracking.

### Queue

A linear collection of items where items are inserted and removed in a particular order (FIFO - First in, First Out).

- Operations:
	- `enqueue()` → add to rear
	- `dequeue()` → remove from front
	- `peek()` → view front
- Time Complexity: **O(1)**.
- Variants: Circular Queue, Dequeue, Priority Queue.
- Use for: task scheduling, BFS traversal.

### Hash Map / Hash Table

`Hash Table`, `Map`, `HashMap`, `Dictionary` or `Associative` are all the names of the same data structure.

- Stores data as **(key, value)** pairs.
- Average case: **O(1)** for insert/search/delete.
- Worst case (with collisions): **O(n)**.
- Use for: fast lookups, caching, counting frequencies.

### Trees

A hierarchical data structure consisting of a collection of nodes such that each node of the tree stores a value and a list of references to other nodes (the “children”).

#### Binary Search Tree (BST)

- Left < Node < Right  
- Avg search/insert/delete: **O(log n)**

#### Heap

- Complete binary tree with heap property.
	- **Min Heap**: every node is smaller than its children with root being the smallest.
	- **Max Heap**: every node is bigger than its children with root being the biggest.

#### Special Tree Types
| Type                 | Notes                                                  |
| -------------------- | ------------------------------------------------------ |
| Full Binary Tree     | Each node has 0 or 2 children                          |
| Complete Binary Tree | All levels filled except possibly last (left to right) |
| Balanced Tree        | Height balanced (e.g. AVL, Red-Black Trees)            |
|                      |                                                        |
#### Balanced Search Trees (Self-Balancing)

| Type      | Characteristics                                                 |
| --------- | --------------------------------------------------------------- |
| AVL       | Strict balancing → faster lookups, slower inserts/deletes       |
| Red-Black | Looser balancing → better for inserts/deletes, used in Java/Map |
| 2-3 Tree  | Variable node size → faster inserts, rare in practice           |
| B-Tree    | Used in databases and filesystems for disk-optimized access     |
| K-D Tree  | Fast nearest neighbor in high-dimensional space (used in ML/CV) |
#### Tries

A tree-like data structure that can be used to store strings. The idea is to store the characters of the string in such a way that each node of the tree represents a single character and each vertex represent a single word or a prefix.

### Graphs

Non-linear data structures made up of a finite number of nodes or vertices and the edges that connect them. 

- **Directed** graphs - edges have direction
- **Undirected** graphs - edges are bidirectional
- **Weighted** graphs - edges have weights - (costs, distance, ...)
- **Representations**
	- **Adjacency Matrix** - 2D array `V x V`
	- **Adjacency List** - array of lists (space-efficient)
- Use for: pathfinding (Dijkstra, A*), network modeling, dependency resolution

### Time Complexity Summary

| Data Structure | Access   | Search   | Insertion | Deletion |
| -------------- | -------- | -------- | --------- | -------- |
| Array          | O(1)     | O(n)     | O(n)      | O(n)     |
| Linked List    | O(n)     | O(n)     | O(1)*     | O(1)*    |
| Stack          | O(n)     | O(n)     | O(1)      | O(1)     |
| Queue          | O(n)     | O(n)     | O(1)      | O(1)     |
| Hash Table     | N/A      | O(1)     | O(1)      | O(1)     |
| BST (avg)      | O(log n) | O(log n) | O(log n)  | O(log n) |
| BST (worst)    | O(n)     | O(n)     | O(n)      | O(n)     |

--- 
## Asymptotic Notation

Asymptotic notation is used to describe the efficiency of an algorithm as the input size grows. It helps compare algorithms based on their **growth rate**, abstracting away constants and lower-order terms.

### **Notations** 

- **Big O Notation (`O`)**  - describes the **upper bound** of an algorithm's running time. It tells us the **worst-case** scenario as input size `n` grows.
- **Big Omega Notation (`Ω`)** - describes the **lower bound**, i.e., the **best-case** performance of an algorithm.
- **Big Theta Notation (`Θ`)**  - describes the **tight bound**. It means the algorithm’s runtime is both **upper and lower bounded** by the same function — i.e., it always runs in Θ(f(n)) time.

### Common Time Complexities

| Name             | Complexity | Description                                                                                                                                               |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Constant Time    | `O(1)`     | Always takes the same amount of time regardless of input size. Example: array access.                                                                     |
| Logarithmic Time | `O(log n)` | Cuts the problem size by a factor each step. Example: binary search. <br>Base is usually 2, meaning ~10 steps for `n = 1024`, ~5 steps for `n = 32`, etc. |
| Linear Time      | `O(n)`     | Runtime grows proportionally with input size. Example: iterating over an array.                                                                           |
| Polynomial Time  | `O(n^k)`   | General polynomial growth. Example: bubble sort is `O(n^2)`, matrix multiplication is `O(n^3)`.                                                           |
| Exponential Time | `O(2^n)`   | Runtime doubles with each additional input. Example: solving subsets recursively.                                                                         |
| Factorial Time   | `O(n!)`    | Extremely inefficient and should be avoided. Example: brute-force traveling salesman problem.                                                             |

---
## Common Algorithms

- **Sorting Algorithms**
	- **Bubble Sort** - `O(n²)` - Repeatedly swaps adjacent elements if they're in the wrong order.
	- **Selection Sort** - `O(n²)` - Selects the minimum element and swaps it with the front.
	- **Insertion Sort** - `O(n²)` - Builds sorted array one element at a time by comparison and insertion.
	- **Heap Sort** - `O(n logn)` - Builds a heap and repeatedly removes the root to sort the array.
	- **Quick Sort** - `avg case - O(n logn)` - Picks a pivot, partitions around it, and sorts partitions recursively.
	- **Merge Sort** - `O(n logn)` - Divides array in halves, sorts and merges them.
- **Recursion** 
	- **Tail Recursion**: Recursive call is the last operation. Can be optimized in some languages (e.g., Scheme, Scala).
	- **Non-tail Recursion**: Additional operations are performed after recursion.
- **Tree Algorithms** 
	- **Pre-Order Traversal**: Root → Left → Right
	- **In-Order Traversal**: Left → Root → Right (yields sorted order for BSTs)
	- **Post-Order Traversal**: Left → Right → Root
	- **Breadth-First Search (BFS)** – Explores neighbors level-by-level using a queue.
	- **Depth-First Search (DFS)** – Explores as deep as possible using a stack or recursion.
- **Graph Algorithms** 
	- **Breadth-First Search (BFS)** 
	- **Depth-First Search** 
	- **Dijkstra’s Algorithm** – Finds the shortest path from a source to all nodes using a priority queue. No negative weights.
	- **A\*** – Similar to Dijkstra but uses a heuristic function to guide search toward the goal.
	- **Bellman-Ford** – Handles negative weights; slower than Dijkstra.
	- **Kruskal’s Algorithm** – Greedy algorithm for finding the minimum spanning tree (MST) using Union-Find.
	- **Prim’s Algorithm** – Grows MST from a chosen starting vertex.
	- **Ford-Fulkerson** – Solves the maximum flow problem in flow networks.
- **Search Algorithms**
	- **Binary Search** – Works on sorted arrays by dividing search space in half at each step.
		  - Time Complexity: `O(log n)`. ex: for n=1024, takes 10 steps.
- **Cache Algorithms** - Cache algorithms help decide which data to evict when memory is full.
	- **LRU (Least Recently Used)** – Removes the least recently accessed item.
	- **LFU (Least Frequently Used)** – Removes the least frequently used item. Uses a key-value pair structure.
	- **MRU (Most Recently Used)** – Removes the most recently accessed item (used in some caching strategies).
- **Backtracking algorithms** - Backtracking algorithms recursively explore all possible options and backtrack on failure.
	- **N-Queens** – Place N queens on a chessboard such that no two queens attack each other.
	- **Maze Solver** – Explore paths in a maze and backtrack on dead ends.
	- **Knight's Tour** – Visit all squares of a chessboard using valid knight moves.
	- **Hamiltonian Path** – Visit every node in a graph exactly once.
- **Greedy Algorithms** - greedy algorithms make the best local choice at each step, hoping to find the global optimum.
	- **Dijkstra’s Algorithm** – Chooses the nearest unvisited node.
	- **Huffman Coding** – Builds optimal prefix codes for data compression.
	- **Kruskal’s Algorithm** – Adds the next lightest edge that doesn't form a cycle.
	- **Prim’s Algorithm** – Adds the cheapest edge connected to the MST.
	- **Ford-Fulkerson** – Finds max flow using augmenting paths (often with greedy BFS/DFS).

---
## Floating-point numbers

Floating-point numbers are numbers that have a decimal point in them. They are used to represent real numbers. For example, *3.14* is a floating point number. They follow the **IEEE 754 standard**, which defines how numbers like `0.1`, `2.5`, or `3.14159` are stored in memory.

```JAVASCRIPT
// how the computer stores the floating number in memory
0.1 ≈ 0.0001100110011... (repeating)
0.2 ≈ 0.001100110011... (repeating)

// so when added the result is a tiny bit off
0.1 + 0.2 === 0.30000000000000004
```

---
## Endianness

**Endian** and **endianness** (or "byte-order") describe how computers organize the bytes that make up numbers.

Let's use the number `0x12345678` (i.e., 305 419 896 in decimal) for an example:

- **Little-Endian**: the least significant byte is stored first. ex: `0x78 0x56 0x34 0x12`.  It is the most common ordering of multiple bytes.
- **Big-Endian**: the most significant byte is stored first. ex: `0x12 0x34 0x56 0x78`. It is the opposite of Little-Endian

---
## Character Encodings

Character encodings are a way of representing characters as numbers. They are used to store and transmit text. 

- **ASCII** - The most common character encoding is ASCII, which is a 7-bit encoding. This means that each character is represented by a number between 0 and 127.
- **Unicode** - The ASCII character set is a subset of the Unicode character set, which is a 16-bit encoding. It is the most common character encoding used on the web and contains 2^16 characters.

---
## Bitwise Operators

Bitwise operators are used to perform operations on individual bits of a number. They are used in cryptography, image processing, and other applications.

[Algorithms: Bit Manipulation](https://www.youtube.com/watch?v=NLKQEOgBAnw)

---
## Complexity Classes

In complexity theory, a Complexity Class is a set of problems with related complexity. These classes help scientists to groups problems based on how much time and space they require to solve problems and verify the solutions.

#### **Deterministic vs Non-Deterministic** 

- **Deterministic** - at each step there's only one choice of what to do next. This is how real-world computers work.
-  **Non-deterministic** - at some steps when there's multiple options the machine magically picks the *right path* - the one that leads to the "yes" answer - if such a path exists.

#### **Complexity Classes** 

- **P** - The P in the *P* class stands for Polynomial Time. It is the collection of decision problems that can be solved by a deterministic machine in polynomial time - `O(n^k)`
- **NP** - The NP in NP class stands for Non-deterministic Polynomial Time. It is the collection of decision problems that can be solved by a non-deterministic machine in polynomial time. Technically covers problems that can easily be verified in polynomial time but finding the solution for them might take a lot longer.
- **Co-NP** - NP is about problems where we can verify a "Yes" answer quickly, Co-NP is the opposite - we can verify a "No" answer quickly (in polynomial time).
- **NP-complete** - NP-Complete is a subset of *NP* that represents the hardest problems in the complexity class.
- **NP-hard** - At least as hard as the hardest problems in NP (could not be in NP itself i.e not verifiable in polynomial time).

### **P = NP ?** 

The P = NP is a very famous problem in CS that asks whether a problem that can be solved in polynomial time on a non-deterministic machine(i.e the problem is in *NP*) can also be solved in polynomial time on a deterministic machine (i.e the problem is in *P*). 
	If it was proven that P=NP, it would revolutionize computing because cryptography and hashing would be easily crackable

--- 
## Databases

- **Locking** - Locks are used to prevent data from being modified by multiple processes at the same time. 
- **ACID Model** - ACID is an acronym representing four key properties that guarantee reliable processing of database transactions. 
	- **Atomicity** - ensures that a transaction is treated as a single, indivisible unit that either completes entirely or fails completely.
	- **Consistency** - maintains the database in a valid state before and after the transaction.
	- **Isolation** - ensures that concurrent transactions do not interfere with each other, appearing to execute sequentially.
	- **Durability** - guarantees that once a transaction is committed, it remains so, even in the event of system failures.
- **BASE Model** - emerged as a result of the rise in popularity of NoSQL databases. The *BASE Model* is often used in distributed systems where availability and partition tolerance are prioritized over strict consistency. It stands for:
	- **B**asically **A**vailable — The system guarantees availability, even if not all data is consistent at all times.
	- **S**oft state — The system's state can change over time, even without input, due to eventual consistency.
	- **E**ventual consistency — The system will become consistent over time, but it does not guarantee immediate consistency after updates.
- **CAP Theorem** -  It states that a distributed system can only guarantee two of the three:
	- **Consistency:** All nodes show the same data.    
	- **Availability:** Every request gets a response.
	- **Partition Tolerance:** Operates despite network failures.
- **Indexes** - Indexes create a separate structure that holds a reference to the actual data, allowing the database engine to find information without scanning the entire table which results in faster retrievals.
- **Transactions** - a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. Transactions adhere to ACID properties.
- **Stored Procedures** - a group of SQL statements that accepts some input in the form of parameters and performs some task and may or may not returns a value. Think of them as reusable blocks of code.
- **Database Replication** - the process of creating and maintaining multiple copies of the same data across different locations or nodes in a distributed system. It enhances data availability, reliability, and performance by ensuring that data remains accessible even if one or more nodes fail.
- **Database Sharding** - a method where a database is split into smaller, more manageable parts (shards), which are distributed across multiple servers, enhancing search efficiency and overall performance.
- **Database Federation** - database federation makes several distinct physical databases appear as one logical database to end-users. As a result different databases (even with different schemas or engines) are queried as if they are one.

---

