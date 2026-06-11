class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0, buy = 0, sell= 1;
        while(sell<prices.length){
            if (prices[buy] < prices[sell]){
                profit = Math.max(prices[sell]-prices[buy], profit); 
            }
            else {
                buy = sell
            }
            sell++
        }
        return profit
    }
}
