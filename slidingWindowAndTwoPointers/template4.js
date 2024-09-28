// TC :- O(N)

function slidingWindowMaximumLength(nums, k){
  let left = 0, right = 0;
  let maxLen = 0;
  let sum = 0;
  let n = nums.length - 1;

  while (right < n) {
    sum += nums[right];

    if(sum > k) {
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

const arr = [1,2,3,4,5,6];
const k = 15;
const Output = slidingWindowMaximumLength(arr, k);
console.log(Output); // Output :- 5