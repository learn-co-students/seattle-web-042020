# Calculate Unique Products From Array of Integers

- Given an array *arr*, calculate the product of each element's digits. Return the number of unique products. For example, given the array [2,24,12], the product of 2 and no other digit is considered to be just 2. The product of 2 and 4 is 8, and the product of 1 and 2 is also 2. Therefore, since our resulting products are [2,8,2], the return value should be *2*.

# Further examples

```javascript

uniqueProducts([2, 8, 121, 42, 222,23])
    => 3
uniqueProducts([9, 9, 99, 19191919191, 999, 111111111119])
    => 4
uniqueProducts([2,24,12])
    => 2
```

## Constraints
- The array will only contain positive integers 
- The array have more than 1 integer