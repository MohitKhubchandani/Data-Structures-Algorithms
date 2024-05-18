// 1 2 3 4 5 6 7 8 9 10 days = 5;
debugger
function sum(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

function findDays(arr, cap) {
  let days = 1; 
  let load = 0;
  let n = arr.length; 
  for (let i = 0; i < n; i++) {
      if (load + arr[i] > cap) {
          days += 1; 
          load = arr[i]; 
      } else {
          load += arr[i];
      }
  }
  return days;
}

function capicityOfShip(arr , days){
  let n = arr.length;
  let low = Math.max(...arr) , high = sum(arr)
  let total = 0;
  let count = 0;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    let numberOfDays = findDays(arr , mid)
    if(numberOfDays <= days){
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }
  return low;
}


const arr = [1,2,3,4,5,6,7,8,9,10];
const Output = capicityOfShip(arr, 5);
console.log(Output);