class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const newArray = Array.from({length :temperatures.length}).fill(0)
        for(let i =0; i< temperatures.length-1; i++){
            for(let j =i+1; j< temperatures.length-1; j++){
                if(temperatures[j] > temperatures[i]){
                    newArray[i]= j-i;
                    break
                }
            }
        }
        return newArray
    }
}
