class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0, buy = 0, sell= 1;
       while (sell< prices.length){
        if(prices[buy]< prices[sell]){
           profit= Math.max(profit,prices[sell]-prices[buy])
        }else{
            buy++
        }
        sell ++
       }
       return profit
    }
}
