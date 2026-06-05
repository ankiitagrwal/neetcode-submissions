class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0 , last = numbers.length-1
        while(start< last){
            if(numbers[start] + numbers[last] > target) {
                last--
            }
            else if(numbers[start] + numbers[last] < target) {
                start++
            }
            else {
                return [start +1, last +1]
            }   
        }
    }
}
