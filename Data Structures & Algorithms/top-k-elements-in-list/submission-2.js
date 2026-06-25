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
                console.log(seen.get(num))
                if(seen.get(num) >= k){
                  arr.push(num)
                }
            }else {
                seen.set(num, 1)
            }
        }
        return [...new Set(arr)]
    }
}
