function leftRotate(arr){
  let n = arr.length
  let temp = arr[0]
  for (let i = 1; i < n; i++) {
   arr[i - 1] = arr[i]
  }
  arr[n - 1] = temp
   return arr;
}

const array = [1,2,3,4,5];
const Output = leftRotate(array);
console.log(Output); // output :- [ 2, 3, 4, 5, 1 ]
