class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const resp =[];
        nums.sort((a,b) => a -b)
        for(let i =0; i <nums.length; i++){
            if(i >0 && nums[i] === nums[i-1]) continue
            let left = i +1, right = nums.length -1 
            while(left< right){
                const val = nums[i] + nums[left] + nums[right];
                if (val > 0) {
                    right --;
                }
                else if (val <0) {
                    left ++
                }
                else {
                    resp.push([nums[i], nums[left], nums[right]])
                    left++
                    // right--
                    while (left < right && nums[left] === nums[left-1]){
                        left++
                    }
                    // while (left < right && nums[right] === nums[right+1]){
                    //     right--
                    // }
                }
            }
        }
        return resp
    }
}
