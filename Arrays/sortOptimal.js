debugger
function sort012(arr){
  let low = 0 , mid = 0, high = arr.length - 1;
while(mid <= high) {
   if(arr[mid] == 0){
    swap(arr, low , mid)
    low++ 
    mid++
   }
   else if(arr[mid] == 1) mid++
   else{
    swap(arr , mid ,high)
    high--
   }
  }
  return arr;
}

function swap(arr,num1,num2){
  let temp = arr[num1];
  arr[num1] = arr[num2]
  arr[num2] = temp
}

console.log(sort012([2,0,2,1,1,0]));