var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for(const p of prices){
        min = Math.min(min, p);
        profit = Math.max((p-min),profit);
    } 
    return profit;
};

//time: O(n)
//space: O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let sellIdx = prices.length - 1
    let profit = 0
    for(let buyIdx = prices.length-1;buyIdx >= 0; buyIdx--){
        let buyVal = prices[buyIdx]
        let sellVal = prices[sellIdx]
        if(buyVal - sellVal >= 0){
            sellIdx = buyIdx
            
        } else {
            let price = sellVal - buyVal
            profit = Math.max(profit, price)
        }
    }
    return profit 
};

//time O(n) space O(1)