function removeDuplicates(nums){
  let i = 0;
   for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      nums[i + 1] = nums[j]
      i++
    }
   }
  return i + 1
}

const arr = [0,0,1,1,1,2,2,3,3]
const Output = removeDuplicates(arr)
console.log(Output);