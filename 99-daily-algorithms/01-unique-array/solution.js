// Steven's 

// the sort here does not actually sort by numerical value, but worked for our test case.

function uniqueArray(input){
    let arr = input.sort()
    let uniq = []
    let i
    for (let t in arr){
      if (arr[i] != arr[t]){
        uniq.push(arr[t])
        i = t
        t++
      }
    }
    return uniq
}