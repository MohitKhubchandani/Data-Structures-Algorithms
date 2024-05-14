 function searchInsert(arr, target) {
  let n = arr.length;
  let low = 0 , high = n - 1;
  let ans = n;
  while(low <= high){
      let mid = Math.floor((low + high)/2);
      if(arr[mid] >= target){
          ans = mid;
          high = mid - 1
      }
      else{
          low = mid + 1
      }
  }
  return ans
};

const arr = [1,2,4,7];
const Output = searchInsert(arr , 6);
console.log(Output);