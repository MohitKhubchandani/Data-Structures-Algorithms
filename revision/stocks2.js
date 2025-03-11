var maxProfit = function(prices) {
    let profit = 0;
    let n = prices.length - 1;
    let i = 0;

    while(i <= n){
        if(prices[i] < prices[i + 1]){
            profit += prices[i + 1] - prices[i];
        }
        i++;
    }

    return profit;
};

debugger
const prices = [7,1,5,3,6,4];
const Output = maxProfit(prices);
console.log(Output); // Output :- 7