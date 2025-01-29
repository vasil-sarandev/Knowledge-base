# Big O

<a id="top"></a>

### Definition

Big O notation is a formal expression of an algorithm’s complexity in relation to the growth of the input size. Hence, it is used to rank algorithms based on their performance with large inputs.

### Worst Case

Big O should always reflects the worst case.

```javascript
// Lets imagine we had to iterate through an array to find a value.

const arr = [1, 2, 3, 4, 5, 6, 7]

// Our best case(Ω - Omega) is that we're searching for 1 (the first value)
// Our average case(θ - Theta) is that we're searching for 4 (the middle value)
// Our worst case (Ο - Omicron (Big O)) is that we're searching for 7 (the last value)
```

## Big O: notations

### Big O: `O(n)`

The `O(n)` notation means that the amount of operations in the algorithm is equal to the input size. For example:

```javascript
const logNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}
logNumbers(n)
```

<p align="center" style="margin-top:24px">
  <img src="./assets/O(n).png" />
</p>

### Big O: `O(n^2)`

The `O(n^2)` notation means that the amount of operations in the algorithm is equal to n\*n or n^2.

```javascript
const logNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
logNumbers(n)
```

<p align="center" style="margin-top:24px">
  <img src="./assets/O(n^2).png" />
</p>

### Big O: `O(1)`

The `O(1)` notation means that the amount of operations in the algorithm is a constant.

```javascript
// the following function has 3 operations but we "Drop Constants" so it's simplified to O(1).
const addItems = (n) => {
  return n + n + n
}

logNumbers(n)
```

<p align="center" style="margin-top:24px">
  <img src="./assets/O(1).png" />
</p>

### Big O: `O(log n)`

Simply put, `O(logN)` describes an algorithm that its number of operations increases by one each time the data is doubled.

A prime example for that is Binary Search(Dictionary Lookup)

```javascript
// 1) Open the dictionary in the middle and check the first word.
// 2) If our word is alphabetically more significant, look in the right half, else look in the left half.
// 3) Divide the remainder in half again, and repeat steps 2 and 3 until we find our word.

const sortedArray = ['bash', 'c', 'go', 'java', 'javascript', 'python', 'ruby', 'sql']

binarySearch(sortedArray, 'python')
```

<p align="center" style="margin-top:24px">
  <img src="./assets/O(log n).png" />
</p>

## Big O: concepts

### Simplifying notations

#### Drop(Remove) Constants

In Big O notations, we drop constants to simplify the notation.
Lets imagine we had a function that runs `2*n` operations. That very same function is described as `O(n)` to simplify its notation.

```javascript
const logNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

logNumbers(3)

// there 2n (2*3=6) operations in the function but it's
// described with the O(n) notation because we drop the constant.
```

#### Drop(Remove) Non-Dominants

In Big O notations, we drop non-dominants to simplify the notation.
Lets imagine we had a function that runs `n^2 + n` operations. That very same function is described as `O(n^2)` to simplify its notation.

```javascript
const logNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }

  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

logNumbers(3)

// there 12 (3^2 + 3) operations in the function but it's
// described with the O(n^2) notation
// because we drop the non-dominant notation.
```

### Different terms for input

If we had a function

```javascript
const logItems = (a, b) => {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }
  for (let i = 0; i < b; i++) {
    console.log(i)
  }
}
```

The complexity of the function is O(a + b).

## Big O: Arrays

If we had an array

```javascript
const arr = [1, 2, 3, 4, 5]
```

### `arr.push(6)` and `arr.pop()`

Both have a complexity of `O(1)` because only do one operation (adding or removing an element), without needing to reindex the items.

### `arr.shift()` and `arr.unshift(6)`

Both have a complexity of `O(n)` because not only do they modify the array, but need to reindex all the items. `n` is the number of items in the array!

### Searching by value in array.

Searching by value is an `O(n)` operation.

### Searching by index in array.

Searching by index in an array is an `O(1)` operation.
