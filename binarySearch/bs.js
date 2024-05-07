// Binary Search
function bs(arr , target){
  let n = arr.length;
  let low = 0 , high = n - 1
  while(low <= high){
    let mid = Math.floor((low + high)/2)
    if(arr[mid] == target)return mid;
    else if(target > arr[mid]){
      low = mid + 1
    }
    else high = mid - 1
  }
  return -1
}
const arr = [1,2,3,4,5,6,7];
const Output = bs(arr , 5);
console.log(Output);