# Stacks

### Definition

A `Stack` is a linear data structure in which insertion and removal only happens at one end.
Commonly implemented with `Linked Lists` but can be made from arrays too.

### What you need to know

 - **Last in, first out** (LIFO) data structure
 - Easiest way to implement is with a linked list and making the head the only place for insertion/removal

### Implementation

```javascript
class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }
 
 class Stack {
     constructor(value) {
         const newNode = new Node(value)
         this.top = newNode
         this.length = 1
     }
 
     push(value) {
         const newNode = new Node(value)
         if(this.length === 0) {
             this.top = newNode
         } else {
             newNode.next = this.top
             this.top = newNode
         }
         this.length++
         return this 
     }
 
     pop() {
         if(this.length === 0) return undefined
         
         let temp = this.top
         this.top = this.top.next
         temp.next = null
 
         this.length--
         return temp
     }
 }


```