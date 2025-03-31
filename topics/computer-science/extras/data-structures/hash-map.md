[Back to Data Structures](01-data-structures.md)
## Hash Map

`Hash Table`, `Map`, `HashMap`, `Dictionary` or `Associative` are all the names of the same data structure. It is one of the most commonly used data structures.
 
 `HashMap` stores data in **(key, value)** pairs. Each key is associated with a value, and you can access the value by using the corresponding key.

```JAVA 
HashMap<K, V> hm = new HashMap();
```

### HashMap Basic Operations

```JAVA
import java.util.HashMap;

public class ExampleHashMap {
      public static void main(String[] args) {
      // Create a HashMap
      HashMap<String, Integer> hashMap = new HashMap<>();
      // Add elements to the HashMap
      hashMap.put("John", 25);
      hashMap.put("Jane", 30);
      hashMap.put("Jim", 35);
      // Basic Operations
      hashMap.get("John"); // get by key
      hashMap.remove("Jim"); // remove by key
	  hashMap.containsKey("Jim"); // check if key exists
      hashMap.size(); // get size of HashMap
   }
}
```



### Available Resources

- [Hash Table | Illustrated Data Structures](https://www.youtube.com/watch?v=jalSiaIi8j4)
- [Hash Table in 4 Minutes](https://youtu.be/knV86FlSXJ8)
- [Hashing with Chaining](https://www.youtube.com/watch?v=0M_kIqhwbFo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=9)