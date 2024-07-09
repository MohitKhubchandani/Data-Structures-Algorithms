// Binary to decimal conversion;
function binaryToDecimall(binaryValue){
  let n = 0;
  let ans = 0;
  let len = binaryValue.length
  for (let i = len - 1; i >= 0; i--) {
    ans = ans + binaryValue[i] * 2 ** n
    n++
  }
  return ans;
}

console.log(binaryToDecimall("1010")); // Output :- 10

