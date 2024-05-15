function canWePlace(arr , distance , cows){
  let n =  arr.length;
  let count = 1 , last = arr[0];
  for (let i = 1; i < n; i++) {
    if(arr[i] - last >= distance){
      count++;
      last = arr[i];
    } 
    if(count >= cows)return true;
  }
  return false;
}

function main(arr , cows){
  let n = arr.length , ans = 0;
  arr.sort((a,b) => a - b)
let low = 0 ,   high = arr[n - 1] - arr[0];
while(low <= high){
  let mid = Math.floor((low + high)/2);
  let call = canWePlace(arr , mid , cows);
  if(call === true){
    ans = mid
    low = mid + 1
  }else{
    high = mid - 1
  }
}
return high
}
const arr = [0,3,4,7,10,9]
const Output = main(arr , 4);
console.log(Output);