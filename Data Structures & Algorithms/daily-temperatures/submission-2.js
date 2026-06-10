class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const newArray = Array.from({length :temperatures.length}).fill(0)
        // for(let i =0; i< temperatures.length-1; i++){
        //     for(let j =i+1; j< temperatures.length; j++){
        //         if(temperatures[j] > temperatures[i]){
        //             newArray[i]= j-i;
        //             break
        //         }
        //     }
        // }
        const stack =[] /*  [temp, index]*/
        for(let i =0; i< temperatures.length; i++){
            const temp = temperatures[i];
            while(stack.length > 0 && temp > stack[stack.length-1][0]){
                const [stackT, stackInd] = stack.pop();
                newArray[stackInd] = i- stackInd
            }
            stack.push([temp, i])
        }
        return newArray
    }
}
