var trap = function (height) {
  let n = height.length;
  let left = [];
  let leftMax = 0;

  let right = [];
  let rightMax = 0;

  let j = height.length - 1;

  let result = 0;

  for (let i = 0; i < n; i++) {
    leftMax = Math.max(leftMax, height[i]);
    left.push(leftMax);

    rightMax = Math.max(rightMax, height[j]);
    right.unshift(rightMax);

    j--;
  }

  for (let i = 0; i < height.length; i++) {
    result += Math.min(left[i], right[i]) - height[i];
  }

  return result;
};

debugger;
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); // Output :- 6
