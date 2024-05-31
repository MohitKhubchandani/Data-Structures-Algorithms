debugger
function kokoEatingBananas(arr , h){
  let n = arr.length
  let low = 1 , high = Math.max(...arr);
  let total = 0;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    for (let i = 0; i < n; i++) {
      total += Math.ceil((arr[i])/mid)
    }
    if(total <= h){ 
      total = 0
      high = mid - 1;}
    else {
      total = 0;
      low = mid + 1}
  }
return low
}

const arr = [30,11,23,4,20];
const Output = kokoEatingBananas(arr , 6);
console.log(Output); // Output :- 23