var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let i = 0;

  while (i < right) {
    if (nums[i] == 1) i++;
    else if (nums[i] == 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      i++;
      left++;
    } else {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output :- [0,0,1,1,2,2]
