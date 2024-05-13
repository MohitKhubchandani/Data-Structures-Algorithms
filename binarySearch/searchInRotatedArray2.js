var search = function(arr, target) {
  let n = arr.length;
  let low = 0 , high = n - 1;
  while(low <= high){
      let mid = Math.floor((low + high)/2);
      if(arr[mid] == target) return true;
      if(arr[low] == arr[mid] && arr[mid] == arr[high]){
         low++ , high--
          continue;
      }
      if(arr[low] <= arr[mid]){
          if(arr[low] <= target && target <= arr[mid]){
              high = mid - 1;
          }else low = mid + 1
      }else{
          if(arr[mid] <= target && target <= arr[high]){
              low = mid + 1;
          }else high = mid - 1;
      }
  }
  return false;
  }

  const arr = [1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1]
  const Output = search(arr , 13);
  console.log(Output);// Output :- true