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
  return [largest , secondLargest];
}


let arr = [5,9,7,3,4,5]
const Output = secondLargestElement(arr);
console.log(Output); // Output :- [ 9, 7 ]