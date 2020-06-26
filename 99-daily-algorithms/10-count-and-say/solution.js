// Wheatley


// Aidan

function countAndSay(num) {
    i = 1
    let value = "1"
    while (i < num) {
      let temp = ""
      let current = null
      let count = null
      for (j of value) {
        if (current == j) {
          count += 1
        } else {
          if (count) {
            temp = temp + count + current
          }
          current = j
          count = 1
        }
      }
      value = temp + count + current
      i++
    }
    return value
}