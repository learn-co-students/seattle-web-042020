# Aidan

def rotates(arr, num)
    num = num % arr.length
    arr.push(arr.shift(num))
    return arr
end