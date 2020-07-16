// Josh

var removeElement = function(nums, val) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] === val){
            // console.log(val)
            // console.log(i)
            nums.splice(i, 1)
            i--
        }
    }
    console.log(nums)
return nums.length
};