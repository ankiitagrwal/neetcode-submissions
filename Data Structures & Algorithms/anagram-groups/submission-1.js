class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen =new Map()
    for (const str of strs){
        const count = new Array(26).fill(0);
        for(const char of str){
            count[char.charCodeAt(0)- "a".charCodeAt(0)] +=1
        }
        const key = count.join(',');
        if(!seen.get(key)){
            seen.set(key,[str])
        }else {
            seen.get(key).push(str)
        }
        
    }
    return Array.from(seen.values())
    }
}
