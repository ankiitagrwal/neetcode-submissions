class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()
        let count =0
        if(s.length !== t.length) return false
        for (let char of s){
            if(map.get(char)){
                map.set(char, map.get(char) + 1)
            }else {
                map.set(char, count + 1)
            }
        }
        console.log(map)
        for(let char of t){
            if(map.get(char)){
                map.set(char, map.get(char)-1)
                continue
            }else {
                return false
            }
        }
        return true
    }
}
