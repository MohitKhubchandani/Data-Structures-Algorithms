let tempArray = [];
function mergeSort(arr , low , high){
  if (low < high) {
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr , low , mid);
  mergeSort(arr, mid + 1 , high);
  merge(arr , low , mid , high)
  }
}

function merge(arr , left , mid , right){
  let i = left;
  let j = mid + 1;
  let k = left;
  while(i <= mid && j <= right){
    if(arr[i] < arr[j]){
      tempArray[k] = arr[i]
      i++
    }
    else{
      tempArray[k] = arr[j]
      j++
    }
    k++
  }
  while (i <= mid) {
    tempArray[k] = arr[i];
    i++;
    k++;
  }

  while (j <= right) {
    tempArray[k] = arr[j];
    j++;
    k++;
  }
  
for (let i = left ; i <= right ;  i++) {
  arr[i] = tempArray[i]
  
}
}

const arr = [3,2,4,1,2];
const output = mergeSort(arr , 0 , arr.length - 1); 
console.log(arr);