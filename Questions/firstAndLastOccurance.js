// Find the first and last Occurrences of the given number.

function firstAndLastOccurrence(arr,target){
  let n = arr.length;
  let first = -1 , last = -1;
  for (let i = 0; i < n; i++) {
    if(arr[i] == target){
      if(first !== -1){ 
        last = i;
      }
      else{
        first = i;
        last = i
      }
    }
  }
  return [first , last];
}

const arr = [2,4,6,8,8,8,11,13];
const Output = firstAndLastOccurrence(arr , 8);
console.log(Output); // Output :- [ 3, 5 ]