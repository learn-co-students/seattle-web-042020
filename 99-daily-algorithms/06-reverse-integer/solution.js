// Joshua

var reverse = function(x) {
    let stringNum = `${x}`
    //split the string into array
    let arr1 = stringNum.split("")
    let arr2 = []
    let i = 0
    let arrayLength = arr1.length
   while (i < arrayLength){
        let num = arr1.pop()
        arr2.push(num)
       i++
        //push the element onto the begginning of arr2
        //join arr2
    }
    arr2.join()
   let result =  parseInt(arr2.join(""), 10)
   return result
};

// aidan

var reverse = function(num) {
    let new_num = 0
      while (num != 0){
        let pop = num % 10
        new_num = new_num * 10 + pop
        num = (num - pop) / 10
        if (new_num > 2**31 - 1 || new_num < -1 * 2**31) {
            return 0
        }
      }
    return new_num
};
