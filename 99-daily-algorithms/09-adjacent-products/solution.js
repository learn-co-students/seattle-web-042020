// Klarissa

function greatestProduct(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
      product = array[i] * array[i + 1]
      newArray.push(product)
    }
    newArray.pop()
    console.log(newArray)
    return Math.max(...newArray)
}