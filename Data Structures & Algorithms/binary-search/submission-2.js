class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0, n = nums.length, mid = Math.floor(n/2)
        if(target<nums[mid]){
            for(let i = left; i < mid; i++){
                if(nums[i] === target){
                    return i
                }else {
                    continue
                }
            }
        } else {
            for(let i = mid; i<n; i++){
                if(nums[i] === target){
                    return i
                }else {
                    continue
                }
            }
        }
        return -1
    }
}
