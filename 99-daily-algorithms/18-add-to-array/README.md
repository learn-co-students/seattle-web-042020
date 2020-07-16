# Add to Array-Form of Integer

For a non-negative integer `X`, the array-form of `X` is an array of its digits in left to right order.  For example, if `X` = 1231, then the array form is [1,2,3,1].

Given the array-form `A` of a non-negative integer `X`, return the array-form of the integer `X+K`.

## Examples:

```javascript
addToArrayForm([1,2,0,0], 34)
  => [1,2,3,4]
addToArrayForm([2,7,4], 181)
  => [4,5,5]
```

## Constraints
- `1 <= A.length <= 10000`
- `0 <= A[i] <= 9`
- `0 <= K <= 10000`
- If `A.length > 1`, then `A[0] != 0`

### Source
[LeetCode](https://leetcode.com/problems/add-to-array-form-of-integer/)