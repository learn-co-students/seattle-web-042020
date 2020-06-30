// Andy

function randomGram(str){
    let arr = str.split("")
    let temp
    for (i in arr) {
      let charIndex = Math.floor(Math.random() * str.length)
      temp = arr[charIndex]
      arr[charIndex] = arr[i]
      arr[i] = temp
    }
    return arr.join("")
  }
console.log(randomGram("pokebowl"))