debugger
function kthMissing(arr, k){
  let n = arr.length;
  let low = 0 , high = n - 1;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    let missng = arr[mid] - (mid + 1);
    if(missng < k )low = mid + 1;
    else high = mid - 1;
  } 
  return (high + 1) + k
}

const arr = [1,2,3,4]
const Output = kthMissing(arr , 2);
console.log(Output);