class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map()
        const arr =[]
        for(const num of nums){
            if(seen.get(num)){
                seen.set(num, seen.get(num) + 1)
                
            }else {
                seen.set(num, 1)
            }

        }
        return Array.from(seen.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => entry[0])
        return [...new Set(arr)]
    }
}
