// Trevor's

// This solution returns a string, not two space-separated integers as the README required.

//let array = [1,2,10,12,5]
//sort s->L
//for loop iterate through
//max: exclude i =[0]
//min: exclude i = array.length

let array = [1,2,10,12,5]

// A comparison sort cannot perform better than O(n log n).

function miniMaxSum(arr){
  arr = [...arr].sort((a,b) => a - b);

  let sum = 0

  for (let i = 0; i < arr.length; i++ ){
    sum += arr[i]
  }
  let max = sum - arr[0]
  let min = sum - arr[arr.length - 1]

  return `${min} ${max}`
  


}
miniMaxSum(array)

