// Colton, O(n) -ish complexity

//create a function 'rotate' that takes in an array and an integer
//rotate each element to the left x number of times, x being the number provided in the second argument
function rotate(arr, num) {
    let i = 0;
    while (i < num) {
      arr.push(arr.shift())
      i++
    }
    return arr
  }
  console.log(rotate([1,2,3,4,5], 2))


  // O(1) complexity

  function rotate(arr, num) {
    num = num % arr.length
    arr = arr.concat(arr.splice(0 , num))
    return arr
  }
  arr = [1,2,3,4,5]
  num = 2
  console.log(rotate(arr,num))