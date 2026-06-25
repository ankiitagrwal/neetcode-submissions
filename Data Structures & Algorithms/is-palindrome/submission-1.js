class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length -1
        while (l<r){
            if (l < r && !this.alphaNumeric(s[l])){
                l++
            }
            if (r > l && !this.alphaNumeric(s[r])){
                r--
            }
            if (s[l].toLowerCase() != s[r].toLowerCase()){
                return false
            }
        l++;
        r--;
        }
       
       return true
    }
    /**
     * @param {char} c
     * @return {boolean}
     */
     alphaNumeric(c){
        return (
            (c >= "A" && c<= "Z") || 
            (c >= "a" && c<= "z") ||
            (c >= "0" && c<= "9")
        )
    }
}
