# Queue

### Definition
A Queue is a linear structure which follows a particular order in which the operations are performed.
The insertion and removal happen on different ends.

### What you need to know
 - Queues are a **First in, first out**(FIFO) data structure.
 - Can be implemented with a `Linked List` or `Array`.

### Implementation

```javascript
class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }
 
 class Queue {
     constructor(value) {
         const newNode = new Node(value)
         this.first = newNode
         this.last = newNode
         this.length = 1
     }
 
     enqueue(value) {
         const newNode = new Node(value)
         if (this.length === 0) {
             this.first = newNode
             this.last = newNode
         } else {
             this.last.next = newNode
             this.last = newNode
         }
         this.length++
         return this
     }
 
      dequeue() {
         if(this.length === 0) return undefined
         let temp = this.first
         if(this.length === 1) {
             this.first = null
             this.last = null
         } else {
             this.first = this.first.next
             temp.next = null
         } 
         this.length--
         return temp
     }   
 }
 

```