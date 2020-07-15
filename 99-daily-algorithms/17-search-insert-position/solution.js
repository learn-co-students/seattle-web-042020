// Colton
function searchInsert(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= val) return i
    }
    return arr.length
}
// Justin

// iterate through array
// compare target to each element
// - check to see if ===
//     - if so, return that index #
// - verify that target is greater than element
//     - if so, continue iteration
//     - if not, return current index #
// var searchInsert = function(nums, target) {
//     for (i=0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i
//         } 
//     }
//     return nums.length
// };
const searchInsert = function(nums, target) {
    for (const [i, v] of nums.entries()) {
        if (target <= v) {
            return i
        }
    }
    return nums.length
}