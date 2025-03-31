[Back to Data Structures](01-data-structures.md)
## Linked Lists

The `LinkedList` class is a collection which can contain many objects of the same type, just like the `ArrayList`.

The `LinkedList` class has all of the same methods as the `ArrayList` class because they both implement the `List` interface. This means that you can add items, change items, remove items and clear the list in the same way.

```JAVA
    LinkedList<String> cars = new LinkedList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
```

### LinkedList vs ArrayList

The `ArrayList` class has a regular array inside it. When an element is added, it is placed into the array. If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.

The `LinkedList` stores its items in "containers." The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.

We should generally be using `ArrayList` most of the time because it consumes less memory. 
`LinkedList` is only better when we have many operations that shift the array around.

### Types of Linked Lists

- **Singly Linked Lists** - each node holds a reference to the next node. The last one's *next* reference is *null* which indicates the end of the list.
- **Doubly Linked Lists** - each node holds a reference to the *next* and *prev* node. This allows us to traverse the list in both directions - forwards and backwards.
- **Circular Linked Lists** - can be both Single/Doubly. In Circular LinkedLists the *next* and *prev* apply to the tail and head as well (tail's *next* is head; head's *prev* is tail).
### Available Resources

- [In the Real World: Linked Lists vs Arrays](https://www.coursera.org/lecture/data-structures-optimizing-performance/in-the-real-world-lists-vs-arrays-QUaUd)
- [Linked List Data Structure | Illustrated Data Structures](https://www.youtube.com/watch?v=odW9FU8jPRQ)
- [Linked Lists in 4 minutes](https://www.youtube.com/watch?v=F8AbOfQwl1c)
- [CS 61B Lecture 7: Linked Lists I](https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0)
- [CS 61B Lecture 7: Linked Lists II](https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w)