function peakElement(arr){
  let n = arr.length;
  let low = 1 , high = n - 2;
  if(n == 1) return 0;
  if(arr[0] > arr[1]) return 0;
  if(arr[n - 1 ] > arr[n - 2])return n - 1;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if(arr[mid] < arr[mid + 1] && arr[mid] > arr[mid - 1] ){
      low = mid + 1
    }else high = mid - 1
  }
  return -1;
}

const arr = [1,2,1,3,5,6,4]
const Output = peakElement(arr);
console.log(Output); // Output :- 5