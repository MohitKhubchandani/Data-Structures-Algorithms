// 2 Sum Optimized
function twoSum(arr , k){
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++){
      if(arr[i] + arr[j] == k){
        return [i,j]
      }
    }
  }
  return -1
  }


const array = [1,4,3,2,5];
const Output = twoSum(array , 4);
console.log(Output); // Output :- [ 0, 2 ]