function sqrt(s){
    let low = 0;
    let high = s;
    let ans = 0;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let sqr = mid*mid;

        if (sqr > s) high = high - 1;
        else{
            ans = mid;
            low = low + 1;
        }
    }
    return ans;
}

debugger
const s = 8;
const Output = sqrt(s);
console.log(Output) // Output :- 2
