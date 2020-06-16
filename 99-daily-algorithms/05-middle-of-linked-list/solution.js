// Solution 1:

// iterate through the whole list, to determine how long it is
// cut the length in half, iterate through it again using that counter until we reach the halfway point
var middleNode = function(head) {
    let count = 0;
     
     let currentNode = head
     while(currentNode.next !== null){
       currentNode = currentNode.next
       count++
     }
  
  
     count = Math.floor(count/2)
     
     currentNode = head
     for(let i=0; i<count;i++){
         currentNode = currentNode.next
     }
     return currentNode
  };

// Solution 2: 

// establish fast & slow pointers, one moves at a pace of 1 step per iteration, the other moves 2 steps per iteration
// iterate until the fast point reaches the end of the list, and return the slow one.
// because the fast pointer is moving at double the speed, we know that the slow one will be halfway to wherever the fast one ends. 
var middleNode = function(head) {
    let slowPointer = head
    let fastPointer = head
    
    while(fastPointer && fastPointer.next !== null){
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }
    
    return slowPointer
};
