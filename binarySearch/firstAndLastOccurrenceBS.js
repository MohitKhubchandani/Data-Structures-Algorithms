
function first(arr , target){
  let n = arr.length;
  let low = 0 , high = n - 1;
  let f = -1;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid] == target){
      f = mid;
      high = mid - 1;
    } else if(arr[mid] < target){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return f;
}

function last(arr , target){
  let n = arr.length;
  let low = 0 , high = n - 1;
  let l = -1;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid] == target){
      l = mid;
      low = mid + 1;
    } else if(arr[mid] < target){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return l;
}

function searchRange(arr , target){
  let f = first(arr , target);
  let l = last(arr , target);
  return [f, l];
}

const arr = [1,2,8,8,8,8,8,11,13];
const Output = searchRange(arr , 8);
console.log(Output); // Output :- [ 2, 6 ]
