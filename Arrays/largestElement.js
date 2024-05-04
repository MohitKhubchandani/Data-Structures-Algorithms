// Find the largest element in an Array.

function largestElement(n){
  let largest = n[0];
  for(i = 0 ; i <= n.length ; i++ ){
    if(n[i] > largest){
      largest = n[i];
    }
  }
  return largest;
}

let arr = [8,5,4,6,9,7,3] 
const Output = largestElement(arr);
console.log(Output); // Output :- 9