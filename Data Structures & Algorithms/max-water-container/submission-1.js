class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxHeighth =0, left= 0, right= heights.length-1, total = heights.length-1
        while(left<right){
            const value = Math.min(heights[left] , heights[right])
            maxHeighth = Math.max(maxHeighth, value * (right-left))
            if(heights[left] < heights[right]){
                left++
                total--
            }
            else if (heights[left] > heights[right]){
                right--
                total--
            }
            else{
                left++
                right--
            }
        }
        return maxHeighth
    }
}
