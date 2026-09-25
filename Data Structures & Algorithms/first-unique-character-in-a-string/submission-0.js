class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const hasSet = new Map()
        for(let i=0; i< s.length; i++){
            if(!hasSet.has(s[i])){
                hasSet.set(s[i], i)
            }else {
                hasSet.set(s[i],s.length)
            }
        }
        let res = s.length
        for(const index of hasSet.values()){
            res = Math.min(res,index)
        }
        return res === s.length ? -1: res 
    }
}
