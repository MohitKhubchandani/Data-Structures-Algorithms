function quickSort(arr , low, high) {
if (low < high) {
  let pIndex = f(arr , low ,high);
    quickSort(arr, low , pIndex - 1);
    quickSort(arr , pIndex + 1 , high)
    f(arr ,low, high)
}
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function f(arr, low, high){
  let pivot = arr[low]
  let i = low
  let j = high;
  while(i < j){
   while(arr[i] <= pivot) i++;
   while(arr[j] > pivot) j--;
   if(i < j){
    swap(arr ,i ,j)
   }  
  }
  swap(arr ,j , low)
  return j;
}

const arr = [4,6,2,5,7,9,1,3]
const op = quickSort(arr , 0 , arr.length - 1)
console.log(arr);