// this is an optimal solution
debugger
function swap(arr , num1 , num2){
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

function moveZeros(arr){
  let j = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return arr;

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr ,i , j)
      j++;
    }
  }
  return arr;
}




const array = [1,0,2,0]
const Output = moveZeros(array);
console.log(Output); // Output :- [ 1, 2, 0, 0 ]