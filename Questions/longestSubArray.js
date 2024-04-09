function longestSubArray(arr , k){
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if(sum == k){
        len = Math.max(len, j - i + 1)
      }
    }
  }
  return len;
}

const  array = [2,1,3,4,3,1,1,1]
const Output = longestSubArray(array , 6);
console.log(Output); // Output :- 4