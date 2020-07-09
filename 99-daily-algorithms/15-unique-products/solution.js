// Matt S


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