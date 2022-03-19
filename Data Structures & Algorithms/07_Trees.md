# Trees

### Definition
A `Tree` is a widely used abstract data type that simulates a hierarchical tree structure where every node has at most two children.
There is one left and one right node.

### What you need to know
- Designed to optimize searching and sorting.
- They are comparably simple to implement than other data structures.

### `Binary Search Tree`

Binary Search Tree is a node-based binary tree data structure which has the following properties:

The left subtree of a node contains only nodes with keys lesser than the node’s key.
The right subtree of a node contains only nodes with keys greater than the node’s key.
The left and right subtree each must also be a binary search tree.

<p align="center" style="margin-top:24px">
  <img src="../assets/BST.png" />
</p>

#### `BST` Implementation

```javascript
class Node {
     constructor(value) {
         this.value = value
         this.left = null
         this.right = null
     }
 }
 
 class BST {
     constructor() {
         this.root = null
     }

     insert(value) {
          const newNode = new Node(value)
          if (this.root === null) {
              this.root = newNode
              return this
          }
          let temp = this.root
          while(true) {
              if (newNode.value === temp.value) return undefined
              if (newNode.value < temp.value) {
                  if (temp.left === null) {
                      temp.left = newNode
                      return this
                  }
                  temp = temp.left
              } else {
                  if (temp.right === null) {
                      temp.right = newNode
                      return this
                  } 
                  temp = temp.right
              }
          }
      }

      contains(value) {
          if (this.root === null) return false
          let temp = this.root
          while(temp) {
              if (value < temp.value) {
                  temp = temp.left
              } else if (value > temp.value) {
                  temp = temp.right
              } else {
                  return true
              }
          }
          return false
      }
 }




```

#### Time Complexity
- Indexing:  Binary Search Tree: `O(log n)`
- Search:    Binary Search Tree: `O(log n)`
- Insertion: Binary Search Tree: `O(log n)`