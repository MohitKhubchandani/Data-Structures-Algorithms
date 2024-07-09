// Decimal to binary Conversion
function decimalToBinary(n){
  let res = "";
  while(n !== 1){
    if(n % 2 == 1)res += "1"
    else res += "0"
    n = Math.floor(n/2)
  }
  res += n;
  return res.split("").reverse().join("")
}


console.log(decimalToBinary("14")) // Output :- 1110
