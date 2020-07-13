// Andy
function candyDistrubition(n,m){
    const divided = Math.floor(m/n)
    const result = divided * n
    return result
}
  //Don's solution
function candyDistrubition1(n,m){
const divided = ~~(m/n)
const result = divided * n
return result
}
  //John R's solution
function candyDistrubition2(n,m){
const divided = m%n
const result = m - divided
return result
}



// Jennifer