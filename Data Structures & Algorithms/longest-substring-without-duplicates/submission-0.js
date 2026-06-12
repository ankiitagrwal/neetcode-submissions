class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let left =0, res =0
        for(let r=0; r<s.length; r++){
            while(seen.has(s[r])){
                seen.delete(s[left]);
                left++
            }
            seen.add(s[r]);
        res= Math.max(res, r-left +1);
        }
        return res
    }
}
