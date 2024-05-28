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
  return arr.indexOf(min)
};

const arr = [4, 5, 6, 7, 0, 1, 2, 3];
const Output = findMinimum(arr);
console.log(`The array is rotated ${Output} times`); // Output :- The array is rotated 4 times