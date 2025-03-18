function removeGroups(str) {
    let stack = new Array(str.length); 
    let top = -1; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        
        if (top >= 0 && stack[top] === char) {
            
            while (top >= 0 && stack[top] === char) {
                top--; 
            }
        } else {
            top++; 
            stack[top] = char; 
        }
    }

    
    let result = "";
    for (let i = 0; i <= top; i++) {
        result += stack[i]; 
    }

    return result;
}


console.log(removeGroups("remove")); 
console.log(removeGroups("abbcdddeffgghhiiijj"));
console.log(removeGroups("aabbccdd")); 
console.log(removeGroups("kikfsfa")); 




