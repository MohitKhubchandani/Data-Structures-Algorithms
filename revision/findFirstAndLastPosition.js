// for first half
var findFirst = function (arr, target) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let first = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      first = mid;
      right = right - 1;
    } else if (arr[mid] > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return first;
};
// For second half
var findSecond = function (arr, target) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let second = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      second = mid;
      left = left + 1;
    } else if (arr[mid] > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return second;
};
var searchRange = function (nums, target) {
  let first = findFirst(nums, target);
  let second = findSecond(nums, target);

  let ans = [first, second];
  return ans;
};

let arr = [5, 7, 7, 8, 8, 10];
let target = 8;
let Output = searchRange(arr, target);
console.log(Output);
