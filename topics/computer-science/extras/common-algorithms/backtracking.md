[Back to Common Algorithms](03-common-algorithms.md)

## Backtracking Algorithms

Backtracking is a recursive problem-solving technique used to explore all potential solutions by building candidates incrementally and abandoning paths that violate constraints. It’s commonly used in constraint satisfaction problems like permutations, combinations, and puzzles.

### Finding Hamiltonian Paths

Hamiltonian paths are paths that visit every node in a graph exactly once. They are named after the famous mathematician Hamilton. Hamiltonian paths are a special case of Hamiltonian cycles, which are cycles that visit every node in a graph exactly once.

**Available Resources**

- [Hamiltonian Cycles](https://en.wikipedia.org/wiki/Hamiltonian_cycle)
- [Hamiltonian Path](https://www.hackerearth.com/practice/algorithms/graphs/hamiltonian-path/tutorial/)

### Solving N-Queen Problem

N-Queen Problem is a famous problem in Computer Science. It is a problem of placing *N* queens on an *n* x *n* chessboard such that no two queens attack each other. The problem is to find all possible solutions to the problem.

[Solving N-Queen Problem with backtracking in Java](https://www.digitalocean.com/community/tutorials/n-queens-problem-java-c-plus-plus)

### Maze Solving Problem

Maze solving problem is a classic problem in computer science. It is a problem where we have to find a path from a starting point to an end point in a maze. 

The maze is represented as a grid of cells. Each cell can be either a wall or a path. The path cells are connected to each other. The starting point and the end point are also given. 

The goal is to find a path from the starting point to the end point. The path can only be made up of path cells. The path cannot go through the wall cells.

[Maze Solving Algorithms](https://github.com/john-science/mazelib/blob/main/docs/MAZE_SOLVE_ALGOS.md)

### Knight's Tour Problem

Knight's Tour Problem is a problem where we have to find a path for a knight to visit all the cells of a chessboard without visiting any cell twice.

[Knights Tour](https://bradfieldcs.com/algos/graphs/knights-tour/)

### Rabin-Karp Algorithm

Rabin-Karp algorithm is a string searching algorithm that uses hashing to find any one of a set of pattern strings in a text. For strings of average length `n`, it performs in `O(n+m)` time with `O(m)` space, where `m` is the length of the pattern. It is often used in bioinformatics to search for DNA patterns.

[Rabin Karps Algorithm](https://www.coursera.org/lecture/data-structures/rabin-karps-algorithm-c0Qkw)