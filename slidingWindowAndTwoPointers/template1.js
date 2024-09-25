function slidingWindowMaximum(nums , k){

  let left = 0, right = k - 1;
  const n = nums.length - 1;
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  };

  maxSum = sum;

  while (right < n) {
    sum = sum - nums[left]
    left++
    right++
    sum = sum + nums[right]

    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

const arr = [-1,2,3,3,4,5,-1];
const k = 3;
const Output = slidingWindowMaximum(arr, k);
console.log(Output); // Output :- 15 

