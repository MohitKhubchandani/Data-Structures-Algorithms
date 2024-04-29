// find the Longest Subarray with sum K. 
function longestSubArray(arr, k){
let left = 0 , right = 0;
let sum = 0;
let longest = 0
let n = arr.length
while(right < n){
  if(sum > k){
    sum -= arr[left];
    left++
    longest = Math.max(longest , right - left )
  }else{
    sum += arr[right];
    right++
  }
}
return longest;
}


const arr = [1,2,3,1,1,1,1,3,3];
const Output = longestSubArray(arr , 4)
console.log(Output); // Output :- 4