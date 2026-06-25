class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0, buy = 0, sell= 1;
        for(let i =0; i<prices.length-1; i++){
            if(prices[buy] >= prices[sell]){
                buy++
                sell++
            }
            else if (prices[buy] < prices[sell]){
                profit = Math.max(prices[sell]-prices[buy], profit);
                sell++
            }
        }
        return profit
    }
}
