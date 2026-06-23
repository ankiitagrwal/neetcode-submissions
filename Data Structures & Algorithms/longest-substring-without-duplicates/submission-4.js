class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let l=0, res =0;
    //    const seen = new Set()
    //    for(let r=0; r<s.length; r++){
    //     while(seen.has(s[r])){
    //         seen.delete(s[l])
    //         l++
    //     }
    //     seen.add(s[r])
    //     res = Math.max(res, r-l+1 )
    //    }
    const seen = new Map()
    for(let r =0; r<s.length; r++){
        if(seen.has(s[r])){
            l = Math.max(seen.get(s[r])+1, l)
        }
        seen.set(s[r], r)
        res = Math.max(res, r-l+1)
    }
       return res
    }
}
