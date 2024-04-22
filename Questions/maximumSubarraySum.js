// Kadane's Algorithm
function maximumSubarraySum(arr){
  let sum = 0;
  let maximum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(sum > maximum){
      maximum = sum;
    }
    if(sum < 0){
      sum = 0;
    }
  
  }
  return maximum;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
const Output = maximumSubarraySum(arr);
console.log(Output); // Output :- 6