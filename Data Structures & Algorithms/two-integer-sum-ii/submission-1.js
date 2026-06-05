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
            if(numbers[start] + numbers[last] < target) {
                start++
            }
            if(numbers[start] + numbers[last] === target){
                return [start +1, last +1]
            }
            
        }
        return [start +1, last +1]
    }
}
