class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen ={}
    for (let str of strs){
        let count = new Array(26).fill(0);
        for(let char of str){
            count[char.charCodeAt(0)- "a".charCodeAt(0)] +=1
        }
        const key = count.join(',');
        if(!seen[key]){
            seen[key] =[]
        }
        seen[key].push(str)
    }
    return Object.values(seen)
    }
}
