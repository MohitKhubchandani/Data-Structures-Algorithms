function smallestDivisors(arr , threshold){
  let n = arr.length;
  let low = 1 , high = Math.max(...arr);
  let total = 0;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    for (let i = 0; i < n; i++) {
      total += Math.ceil((arr[i])/mid)
    }
    if(total <= threshold){
      total = 0;
      high = mid - 1;
    }else{
      total = 0
      low = mid + 1
    }
  }
  return low;
}

const arr = [44,22,33,11,1]
const Output = smallestDivisors(arr , 5);
console.log(Output);