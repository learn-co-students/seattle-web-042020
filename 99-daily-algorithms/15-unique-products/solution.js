// Matt S
function uniqueProducts(arr) {
  let newArray = []
    for (let i = 0; i < arr.length; i++) {
          stringNumber = (`${arr[i]}`)
          splitNumber = stringNumber.split('')
          let product = 1
          for (let k = 0; k < splitNumber.length; k++) {
            product = product * parseInt(splitNumber[k])
          }
        if (newArray.includes(product)) {
        } else {
          newArray.push(product)
        }
    }
    return newArray.length
  }
  uniqueProducts([9, 9, 99, 19191919191, 999, 111111111119])

// Aidan

function uniqueProducts2(arr) {
    let uniqueSet = new Set()
    for (i of arr) {
      i = `${i}`
      let value = 1
      for (j = 0; j < i.length; j++) {
        console.log(i[j])
        value = value * parseInt(i[j])
      }
      uniqueSet.add(value)
    }
    return uniqueSet.size
  }