function nextGreaterElement(arr){
    let n = arr.length;
    let ans = new Array(n).fill(-1);
    let stk = [];
    
    
    for (let i = n-1; i >= 0; i--) {
        while (stk.length > 0 && stk[stk.length - 1] <= arr[i]) {
           stk.pop()
        };
        if (!stk.length) {
            ans[i] = -1;
        }else{
            ans[i] = stk[stk.length - 1];
        }
        stk.push(arr[i]);
    }
    return ans;
}

debugger
const arr = [1, 3, 2, 4]
const Output = nextGreaterElement(arr);
console.log(Output) // Output :- [ 3, 4, 4, -1 ]
