[Back to Data Structures](01-data-structures.md)
## Stacks

Stack is a linear collection of items where items are inserted and removed in a particular order. 

Stack is also called a `LIFO` Data Structure because it follows the “Last In First Out” principle i.e. the item that is inserted in the last is the one that is taken out first.

Stacks can be implemented using `Arrays` or `LinkedLists`.

```JAVA
import java.util.Stack;

public class StackExample 
{
    public static void main(String[] args) 
    {
        // Create a new stack
        Stack<Integer> s = new Stack<>();
        // Push elements onto the stack
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        // Pop elements from the stack
        while(!s.isEmpty()) {
            System.out.println(s.pop());
        }
    }
}
```

### Basic Operations on Stacks

- **Push:** Adds a new element on the stack.
- **Pop:** Removes and returns the top element from the stack.
- **Peek:** Returns the top element on the stack.
- **isEmpty:** Checks if the stack is empty.
- **Size:** Finds the number of elements in the stack.

### Available Resources

- [Stack Data Structure](https://www.coursera.org/lecture/data-structures/stacks-UdKzQ)
- [Stack Data Structure | Illustrated Data Structures](https://www.youtube.com/watch?v=I5lq6sCuABE)
- [Stack in 3 minutes](https://www.youtube.com/watch?v=KcT3aVgrrpU)