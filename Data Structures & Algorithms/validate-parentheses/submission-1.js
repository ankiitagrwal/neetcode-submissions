class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const seenObj = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        const stack =[]
        for(const char of s){
            if(char === '(' 
            || char ===  '{'
            || char === '['
            ){
                stack.push(char)
            }
            else if(char === ')' 
                || char === ']'
                || char === '}'){
                    const popValue = stack.pop()
                    if(seenObj[popValue] !== char) {
                        return false
                    }
                }
        }
        return stack.length === 0 
    }
}
