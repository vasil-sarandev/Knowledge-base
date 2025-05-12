# Computer Science

## Data Structures 

### Arrays

Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index.

- Fixed-size, contiguous memory allocation.
- Fast random access: **O(1)**.
- Slow insertions/deletions (except at end): **O(n)**.
- Use when frequent indexing is required.

### Linked Lists

The `LinkedList` stores its items in "containers". The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.

- Elements (nodes) stored non-contiguously, connected via pointers.
- Types:
  - **Singly**: one pointer to next.
  - **Doubly**: pointers to next and previous.
  - **Circular**: last node points to head.
- Fast insert/delete at head/tail: **O(1)** (with pointers).
- Slow search: **O(n)**.
- Use when frequent insertions/deletions are needed.

### Stack (LIFO)

Stack is a linear collection of items where items are inserted and removed in a particular order (LIFO - Last In, First Out).

- Operations:
  - `push()` → add to top
  - `pop()` → remove from top
  - `peek()` → view top
- Time Complexity: **O(1)** for all operations.
- Use for: expression parsing, undo operations, backtracking.

### Queue (FIFO)

Queue is a linear collection of items where items are inserted and removed in a particular order (FIFO - First in, First Out)

- Operations:
  - `enqueue()` → add to rear
  - `dequeue()` → remove from front
  - `peek()` → view front
- Time Complexity: **O(1)**.
- Variants: Circular Queue, Deque, Priority Queue.
- Use for: task scheduling, BFS traversal.

### Hash Map / Hash Table

`Hash Table`, `Map`, `HashMap`, `Dictionary` or `Associative` are all the names of the same data structure. It is one of the most commonly used data structures.

- Stores data as **(key, value)** pairs.
- Average case: **O(1)** for insert/search/delete.
- Worst case (with collisions): **O(n)**.
- Use for: fast lookups, caching, counting frequencies.

### Trees

A tree is non-linear and a hierarchical data structure consisting of a collection of nodes such that each node of the tree stores a value and a list of references to other nodes (the “children”).

- Types: 
	- **Binary Tree**: max 2 children per node.
	- **Binary Search Tree (BST)**:
	  - Left < Node < Right
	  - Average search/insert/delete: **O(log n)**
	- **Full Binary Tree** - every parent node/internal node has either two or no children. 
	- **Complete Binary Tree** -  all the levels of the tree are filled completely except the lowest level nodes which are filled from as left as possible.
	- **Heap**: Complete binary tree (Min/Max).
	- **Balanced Tree**: Height difference ≤ 1 at all nodes (e.g. AVL, Red-Black).
- Use for: hierarchical data, searching, sorting (Heapsort), priority queues.

### Graphs

Graphs are non-linear data structures made up of a finite number of nodes or vertices and the edges that connect them. 

- Types:
  - **Directed** vs **Undirected**
  - **Weighted** vs **Unweighted**
- Representations:
  - **Adjacency Matrix**: 2D array `V x V`
  - **Adjacency List**: array of lists (space-efficient)
- Use for: pathfinding (Dijkstra, A*), network modeling, dependency resolution.

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

