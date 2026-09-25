class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l=0, 
        r= height.length-1, 
        leftMax= height[l], 
        rightMax= height[r], 
        res=0;
        while (l<r){
            if(leftMax<rightMax){
                l+=1
                leftMax = Math.max(leftMax, height[l])
                res += leftMax- height[l]
            }else {
                r-=1
                rightMax= Math.max(rightMax, height[r])
                res += rightMax - height[r]
            }
        }
        return res
    }
}
