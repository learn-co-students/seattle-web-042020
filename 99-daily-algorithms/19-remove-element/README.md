# Remove Element

Given an array `nums` and a value `val`, remove all instances of that value *in-place* and return the new length.

Do not allocate extra space for another array, you must do this by *modifying the input array in-place* with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

## Examples:

```javascript
removeElement([3,2,2,3], 3)
  => 2
removeElement([0,1,2,2,3,0,4,2], 2)
  => 5
```

## Hints
- Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Source
[LeetCode](https://leetcode.com/problems/remove-element/)