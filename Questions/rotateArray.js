
function rotateArray(arr , k){
  let n = arr.length
    for (let i = 0; i <= n; i++) {
      if (i < k){
        arr.push(arr[0])
        arr.shift(arr[0])
      }
    }
    return arr;
}

const array = [1,2,3,4,5,6]
const Output = rotateArray(array , 11);
console.log(Output);

