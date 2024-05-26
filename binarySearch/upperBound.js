debugger
function upperBound(arr , target){
  let n = arr.length
  let ans = n
  let low = 0;
  let high = n - 1;
  while(low <= high){
    mid = Math.floor((low + high) / 2);
    if(arr[mid] > target) {
      ans = mid;
      high = mid - 1
    }else{
      low = mid + 1
    }
  }
 return ans;
}

const arr = [1,2,4,5];
const Output = upperBound(arr , 2);
console.log(Output);