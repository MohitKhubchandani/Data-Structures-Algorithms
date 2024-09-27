// TC :- O(N + N)

function slidingWindowMaximumLength(nums, k){
  let left = 0, right = 0;
  let maxLen = 0;
  let sum = 0;
  let n = nums.length - 1;

  while (right < n) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++
    };

    if(sum <= k){
      maxLen = Math.max(maxLen, right - left + 1)
    };

    right++
    
  };

  return maxLen;
}

const arr = [2,5,1,7,10];
const k = 23;
const Output = slidingWindowMaximumLength(arr, k);
console.log(Output); // Output :- 4