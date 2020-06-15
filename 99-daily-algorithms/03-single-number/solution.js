// As we've seen before, any solution which uses a comparison sort function cannot perform better than O(n log n). To avoid this and achieve O(n) complexity, we can use a hashmap, or a "dictionary". 

var singleNumber = function(nums){
    // if there's only 1 thing in the array, return it
    if(nums.length >2 ){return nums[i]}

    // otherwise create dictionary which counts the number of appearances each element makes in the array
    let dictionary = {}

    for(let i=0;i<nums.length;i++){
        let currentNum = nums[i]
        // if the element already exists in the dictionary, increase its value (appearances) by one
        if(dictionary[currentNum]){
            dictionary[currentNum] += 1
        }
        // if we haven't come across the element, add a key of it to the dictionary with a value of 1 appearance
        else {
            dictionary[currentNum] = 1
        }
    }

    // now we have a dictionary with keys for each unique item and the count of its appearances as the value. 
    
    // iterate using for/in, and return the entry whose value is 1. 
    for(let key in dictionary){
        if(dictionary[key] === 1){
            return key
        }
    }
    // if we make it to the end of the function, none of the values were 1. 
    return "No single element found"
}
