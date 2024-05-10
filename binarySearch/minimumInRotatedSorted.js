
function findMinimum(arr){
  let n = arr.length;
  let low = 0 , high = n - 1;
  let min = Infinity
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[low] <= arr[high]){
        min = Math.min(min , arr[low])
        break;
    }
    if(arr[low] <= arr[mid]){
      min = Math.min(min , arr[low])
      low = mid + 1;
    }else {
         min = Math.min(min , arr[mid])
        high = mid - 1;
  }}
  return min
};

const arr = [5,6,8,1,2,3,4]
const Output = findMinimum(arr);
console.log(Output);