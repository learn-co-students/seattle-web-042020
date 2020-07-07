var isValid = function(s) {
    let dictionary = {"(":")", "{":"}", "[":"]"};
    let stack = [];
    // s = "{]"
    
    for(let i=0;i<s.length;i++){
        let current = s[i]
        if(dictionary[current]){
            // put matching closure bracket into stack
            stack.push(dictionary[current])
            // stack now looks like this: ["}"]
        }
        else {
            // we have found a closing bracket
            let match = stack.pop()
            // match will be "}"
            if(match != current){
                return false
            }
        }
    }
    
    return stack.length === 0
};