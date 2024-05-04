function leadersInAnArray(arr){
  let n = arr.length;
  let max = arr[n-1]
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    max = Math.max(max , arr[i])
    if(arr[i] >= max){
      ans.push(arr[i]);
    }
  }
  ans.sort((a,b) => a + b)
  return ans;
}

const arr = [10,22,12,3,0,6];
const Output = leadersInAnArray(arr);
console.log(Output); // Output :- [ 6, 12, 22 ]
