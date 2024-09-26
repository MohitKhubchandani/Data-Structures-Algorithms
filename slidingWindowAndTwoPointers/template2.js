function slidingWindowMaximumLength(nums,k){
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
        sum += nums[j];
    
        if(sum <= k){
          maxLen = Math.max(maxLen, j - i + 1 )
        }else break;
      }
  }
  return maxLen;
}

const arr = [2,5,1,7,10];
const k = 14;
const Output = slidingWindowMaximumLength(arr, k);
console.log(Output); // Output :- 3