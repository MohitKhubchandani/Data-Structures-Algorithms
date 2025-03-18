var pivotIndex = function(nums) {
    let leftsum = 0
  let totalsum = 0;

  nums.forEach(element => totalsum += element);

  for (let i = 0; i < nums.length; i++) {
    if (leftsum == totalsum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }
  return -1
};

const nums = [1,7,3,6,5,6]
const Output = pivotIndex(nums);
console.log(Output) // Output :- 3
