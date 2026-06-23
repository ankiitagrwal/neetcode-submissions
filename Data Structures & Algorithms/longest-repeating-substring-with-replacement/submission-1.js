class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0, res=0
        const seen = new Map()
        for(let r=0; r<s.length; r++){
           seen.set(s[r], (seen.get(s[r]) || 0) +1)
            while((r-l+1)- Math.max(...seen.values()) > k){
                seen.set(s[l],seen.get(s[l]) -1)
                l++
            }
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
