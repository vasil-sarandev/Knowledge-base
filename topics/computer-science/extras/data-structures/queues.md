[Back to Data Structures](01-data-structures.md)
## Queues

Queue is a linear collection of items where items are inserted and removed in a particular order. 

The Queue is also called a `FIFO` Data Structure because it follows the “First In, First Out” principle i.e., the item that is inserted in the first is the one that is taken out first.

```JAVA
import java.util.LinkedList;
import java.util.Queue;

public class QueueCreation {
  	public static void main(String args[]) 
    {
        // Create a Queue of Integers using LinkedList
        Queue<Integer> q = new LinkedList<>();
        // Displaying the Queue
        System.out.println("Queue elements: " + q);
    }
}
```

### Queue Basic Operations

- **add(el)**: Adds an element to the rear of the queue. If the queue is full, it throws an exception.
- **offer(el)**: Adds an element to the rear of the queue. If the queue is full, it returns false.
- **remove()**: Removes and returns the element at the front of the queue. If the queue is empty, it throws an exception.
- **poll()**: Removes and returns the element at the front of the queue. If the queue is empty, it returns null.
- **element()**: Returns the element at the front of the queue without removing it. If the queue is empty, it throws an exception.
- **peek()**: Returns the element at the front of the queue without removing it. If the queue is empty, it returns null.

Iterating the queue: the queue has a built in `iterator`. It's also common to convert it to array and then traverse it.
### Available Resources

- [Queue Data Structure | Illustrated Data Structures](https://www.youtube.com/watch?v=mDCi1lXd9hc)
- [Queue in 3 Minutes](https://www.youtube.com/watch?v=D6gu-_tmEpQ)