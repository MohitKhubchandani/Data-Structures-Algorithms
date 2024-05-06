function binarySearch(arr ,x){
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      return mid;
    }
    else if(arr[mid] < x){
      low = mid + 1
    }
    else{
      high = mid - 1
    }
  }
  return -1
}

const arr = [1,2,3,4,5,6];
const Output = binarySearch(arr , 5);
console.log(Output);