function minimumCoins(coins, x){
    let n = coins.length;
    let ans = 0;
    coins.sort((a,b) => a-b)
    for (let i = n - 1 ;i >= 0; i--) {
        
        while(coins[i] <= x) {
            x -= coins[i];
            ans++;
        }
    }
    return ans
}

const coins = [1,2,5,10,20,50,100,200,500,2000];
const x = 979;
const Output = minimumCoins(coins, x);
console.log(Output) // Output :- 8
