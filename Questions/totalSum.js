function totalSum(arr){
  let n = arr.length;
  let array = arr.sort()
  let reverse = array.reverse()
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum += reverse[j]
    }
  }
 return sum;
}

const arr = [4,1,6];
const Output = totalSum(arr);
console.log(Output); // Output :- 17