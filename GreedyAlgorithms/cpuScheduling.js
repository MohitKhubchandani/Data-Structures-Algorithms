function shortestJobFirst(bt){
    bt.sort((a,b) => a-b);
    let timer = 0, waitingTime = 0;
    let n = bt.length;
    for (let i = 0; i < n; i++) {
        waitingTime += timer;
        timer += bt[i];
    }
    return Math.floor(waitingTime / n); 
};

let arr = [4,3,7,1,2];
let Output = shortestJobFirst(arr);
console.log(Output) // Output :- 4
