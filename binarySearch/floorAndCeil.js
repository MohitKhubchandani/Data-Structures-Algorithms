// find the floor and ceil of given sorted array.

function floorAndCeil(arr,target){
  let n = arr.length;
  let low = 0 , high = n - 1;
  let floor = -1 , ceil = -1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    if(arr[mid] <= target){
      floor = arr[mid]
      low = mid + 1
    }else{
      high = mid - 1
    }

    if(arr[mid] >= target){
      ceil = arr[mid];
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  } 
  return [floor , ceil]
}


const arr = [10,20,30,40,50];
const Output = floorAndCeil(arr , 25);
console.log(Output); // Output :- [ 20, 30 ]