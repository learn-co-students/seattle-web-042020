var palindrome = function(word){
    // input will be a string, return will be boolean

    // if there is no word, just return false
    if(!word.length){return false}
  
    // set a counter to the beginning and the end of the word
    let leftCounter = 0
    let rightCounter = word.length-1
  
    // use a for-loop to iterate through half the length of the word (since we are moving from both left and right)
    for(let i=0; i<(rightCounter/2);i++){

      // if at any given moment, the right letter does NOT match the left letter, return false, because we know it's not a palindrome
      if(word[rightCounter] != word[leftCounter]){
        return false
      }
      
      // on each step, move the counters towards each other
      leftCounter++
      rightCounter--
    }
  
    // if we reach the end of the loop, we never ran into a letter that didn't match on the left and right side, so we can return true. 
    return true
}

palindrome("noon")
palindrome("five")
palindrome("radar")
palindrome("learnlovecode")