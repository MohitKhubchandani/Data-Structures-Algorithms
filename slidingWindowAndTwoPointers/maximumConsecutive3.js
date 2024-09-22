function maximumConsecutiveOnes(nums, k){
  let right = 0, left = 0;
  let zeroSum = 0;
  let maxSum = 0;
  let len = 0
  let n = nums.length;

  while(right < n){
    if(nums[right] === 0)zeroSum++;

    if(zeroSum > k){
      if(nums[left] === 0){
        zeroSum--;
      }
      left++
    }

    maxSum = Math.max(maxSum, right - left + 1);
    right++
  }
  return maxSum;
}

const nums = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;
const Output = maximumConsecutiveOnes(nums,k);
console.log(Output);
