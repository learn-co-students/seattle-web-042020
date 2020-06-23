// Aidan

function nextGreatest(arr) {
    let returnHash = {}
    let check = false
    const arrlength = arr.length
    let i = 0
    while (i < arrlength) {
      let j = i;
      while (j < arrlength && !check) {
        if (arr[i] < arr[j]) {
          returnHash[arr[i]] = arr[j]
          check = true
        } else {
          returnHash[arr[i]] = -1
        }
        j++
      }
      check = false
      i++
    }
    return returnHash;
}

//   Faster, from the internet

function nextGreatestFast(arr) {
    let checkHash = {}
    let popArr = []
    for (n of arr) {
      while (popArr != [] && popArr[popArr.length - 1] < n) {
        checkHash[popArr.pop()] = n
      }
      popArr.push(n)
    }
    return arr.map(x => checkHash[x] ? checkHash[x] : -1)
}