function singleNonDuplicate(arr){
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let single = 0;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(arr[low] == arr[high]) return arr[low]
    if(arr[low] == arr[low + 1]) low = low + 2;
    if(arr[high] == arr[high - 1]) high = high - 2;
    
  }
  return -1
}


const arr = [3,3,7,7,10,11,11]
const Output = singleNonDuplicate(arr);
console.log(Output);