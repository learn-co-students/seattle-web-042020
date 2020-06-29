// Justin

function findLeftmost(string) {
    let arr = string.split('')
    let numbers = []
    arr.forEach(i => {
      parseInt(i) ? numbers.push(i) : null
    })
    let final = parseInt(numbers[0])
    return final
};

// Aidan

function findLeftmost(str) {
    var startingNumber = str.match(/\d/) != null ? str.match(/\d/)[0] : null
    return startingNumber
  }

//   Colton

function findLeftmost(str) {
    str = str.match(/\d+/g)
    str = str[0].split('')
    return str[0]
  }

//   Josh

 function findLeftmost(string){
 let regexp = /\d/
 let result = string.match(regexp)
 return result[0]
 }
//  alternatively with search
function findLeftmost(string){
 let regexp = /\d/
 let resultIndex = string.search(regexp)
 return string[resultIndex]
}