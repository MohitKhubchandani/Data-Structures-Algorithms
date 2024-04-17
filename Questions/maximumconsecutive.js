function maximumConsecutive(nums){
  let cnt = 0;
  let maxi = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
          cnt++;
      } else {
          cnt = 0;
      }

      maxi = Math.max(maxi , cnt);
  }
  return maxi;
}

const array = [1,1,0,1,1,1,0,1,1,0,1,1,1,1,0];
const Output = maximumConsecutive(array);
console.log(Output); // Output :- 4