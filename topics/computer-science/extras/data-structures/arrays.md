[Back to Data Structures](01-data-structures.md)
## Arrays

Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index.

```JAVA
int[] myArray; //only declares it, doesn't initialize it.
int[] myArray = new int[4]; // [0,0,0,0]
int[] myArray = new int[]{0,1,2,3}; // [0,1,2,3]
int[] myArray = {0, 1, 2, 3}; // shorthand for the previous one.
int myArray[] = {0,1,2,3}; // we can place [] on both the type or variable.
```

### Key features of Arrays

- **Contiguous Memory Allocation (for Primitives):** Java array elements are stored in continuous memory locations, which means that the elements are placed next to each other in memory.
- **Zero-based Indexing:** The first element of the array is at index 0.
- **Fixed Length:** Once an array is created, its size is fixed and cannot be changed.
- **Can Store Primitives & Objects:** Java arrays can hold both primitive types (like int, char, boolean, etc.) and objects (like String, Integer, etc.)

### ArrayLists

The `ArrayList` class is a resizable Array, which can be found in the `java.util` package.

The difference between a built-in array and an `ArrayList` in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an `ArrayList` whenever you want. The syntax is also slightly different:

```JAVA

    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");

    cars.add(0, "Mazda"); // Insert element at the beginning of the list (0)
    cars.get(0); // Access an element at index(0)
    cars.set(0, "Mercedes"); // Modify an element at index(0)
    cars.remove(0); // Remove an element at index(0)
    cars.size(); // Get the size of the ArrayList
    cars.clear(); // Remove all elements in the ArrayList
    
```

### Available Resources

- [Array Data Structure - Coursera](https://www.coursera.org/lecture/data-structures/arrays-OsBSF)
- [Dynamic Arrays - Coursera](https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV)
- [Array Data Structure | Illustrated Data Structures](https://www.youtube.com/watch?v=QJNwK2uJyGs)
- [UC Berkeley CS61B - Linear and Multi-Dim Arrays (Start watching from 15m 32s)](https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE)
- [Dynamic and Static Arrays](https://www.youtube.com/watch?v=PEnFFiQe1pM&list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu&index=6)
- [Dynamic Array Code](https://www.youtube.com/watch?v=tvw4v7FEF1w&list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu&index=5)
- [Jagged Arrays](https://www.youtube.com/watch?v=1jtrQqYpt7g)