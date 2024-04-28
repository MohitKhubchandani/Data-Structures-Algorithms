// Find the longest consecutive sequence;
function longestConsecutiveSequence(arr){
  arr.sort((a,b) => a-b)
  let longest = 0;
  let lastSmaller = -Infinity
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let un = arr[i]
    if (arr[i] - 1 == lastSmaller) {
      count += 1;
      lastSmaller = arr[i]
    }
    else if(arr[i] != lastSmaller){
      count = 1;
      lastSmaller = arr[i]
    }
    longest = Math.max(longest, count);
  }
 
if(arr.length == 0){
  return 0
 }
else{
 return longest
 }

}


const arr = [100, 200, 1, 2, 3, 4];
const Output = longestConsecutiveSequence(arr);
console.log(Output); //Output :- 4;