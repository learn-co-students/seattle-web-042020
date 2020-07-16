// Aidan
var addToArrayForm1 = function(A, K) {
    let carry = 0;
    let value = 0;
    for(let i = A.length - 1; i >= 0; i--) {
        value = A[i] + (K % 10) + carry 
        K = Math.floor(K / 10) 
        if (value >= 10) {
            value = value - 10
            carry = 1
        } else {
            carry = 0
        }
        A[i] = value
    }
    while (K > 0) {
        value = K % 10 + carry
        if (value >= 10) {
            value = value - 10
            carry = 1
        } else {
            carry = 0
        }
        A.unshift(value)
        K = Math.floor(K / 10)
    }
    if (carry) {
        A.unshift(1)
    }
    return A
};

// John

var addToArrayForm = function(A, K) {
    let sum = BigInt(A.join("")) + BigInt(K)
    sum = `${sum}`
    let newArr = sum.split("")
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = parseInt(newArr[i])
    }
    return newArr
};