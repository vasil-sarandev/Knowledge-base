[Back to Common Algorithms](03-common-algorithms.md)

## Cache Algorithms

Cache algorithms manage limited storage by deciding which items to evict when space is needed. They optimize data retrieval performance based on usage patterns like frequency or recency, playing a key role in systems where memory and access speed are critical.

### LRU Cache

LRU cache is a cache that evicts the least recently used item first. It is a very common cache algorithm. It is used in many places, such as in the browser cache, the database cache, and the cache of the operating system.

**Available Resources**

- [The Magic of LRU Cache (100 Days of Google Dev)](https://www.youtube.com/watch?v=R5ON3iwx78M)
- [Implementing LRU - Udacity](https://www.youtube.com/watch?v=bq6N7Ym81iI)

### LFU Cache

LFU Cache is a data structure that stores key-value pairs. It has a fixed size and when it is full, it removes the least frequently used key-value pair. It is a variation of the LRU Cache and is used in many applications such as caching web pages, caching database queries, and caching images.

### MRU Cache

MRU Cache is another cache algorithm. The difference is that instead of deleting the least recently used entry, the MFU Cache deletes the most recently used entry.

