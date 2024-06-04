function split(arr , mid){
  let count = 1 , sub = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if(sub + arr[i] < mid){
      sub += arr[i];
    }else{
      count++
      sub = arr[i]
    }
  }
  return count;
}

function main(arr,k){
  let low = Math.max(...arr) , high = arr.reduce((a,b) => a+b);
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    let x = split(arr , mid);
    if(x > k) low = mid + 1;
    else{
      high = mid - 1
    }
  }
  return low;
}

const arr = [1,4,4]
const Output = main(arr , 3);
console.log(Output);