# Hash Tables

### Definition
- Stores data with key value pairs.

They are built-in in JavaScript (Objects).

### What you need to know

- Designed to optimize searching, insertion, and deletion.
**Hash functions** accept a key and return an output unique only to that specific key.
  - This is known as **hashing**, which is the concept that an input and an output have a one-to-one correspondence to map information.
  - Hash functions return a unique address in memory for that data.

### Implementation

```javascript
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
   
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
             }
         }
         return undefined
     }

    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}


```

#### Time Complexity
- Indexing:         Hash Tables: `O(1)`
- Search:           Hash Tables: `O(1)`
- Insertion:        Hash Tables: `O(1)`
