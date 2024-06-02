
function multiply(n , mid){
  let ans = mid ** n
  return ans
}

function nthRoot(n , m){
  let low = 1 , high = m;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    let mul = multiply(n , mid)
    if(mul == m) return mid;
    else if(mul < m) low = mid + 1;
    else high = mid - 1
  }
  return -1;
}

const Output = nthRoot(3,27)
console.log(Output); // Output :- 3

