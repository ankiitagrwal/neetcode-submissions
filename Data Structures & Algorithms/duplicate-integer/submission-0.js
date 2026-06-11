class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newNums = new Set();
        for(let num of nums){
            if(newNums.has(num)){
                return true
            } 
            else {
                newNums.add(num)
            }   
        }
        return false
    }
}
