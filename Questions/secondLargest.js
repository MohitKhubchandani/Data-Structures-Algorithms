// Find the largest element in an Array.

function secondLargestElement(n){
  let largest = n[0];
  for(i = 0 ; i <= n.length ; i++ ){
    if(n[i] > largest){
      largest = n[i];
    }
  }
  let secondLargest = -1;
  for(i = 0 ; i <= n.length ; i++ ){
    if(n[i] > secondLargest && n[i] != largest){
      secondLargest = n[i];
    }
  }
  return secondLargest;
}

let arr = [8,5,4,6,9,7,3]; 
const Output = secondLargestElement(arr);
console.log(Output); // Output :- 8