var isValid = function(s) {
    let dictionary = {"(":")", "{":"}", "[":"]"};
    let stack = [")", "}"];
//     str = "({)}"
    
    for(let i=0;i<s.length;i++){
        let current = s[i]
        if(dictionary[current]){
            stack.push(dictionary[current])
        }
        else {
            let match = stack.pop()
            if(match != current){
                return false
            }
        }
    }
    
    return stack.length === 0
};