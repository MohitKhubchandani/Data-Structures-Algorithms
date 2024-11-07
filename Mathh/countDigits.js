function countDigits(n) {
  
    let cnt = Math.floor(Math.log10(n) + 1);
    return cnt;
}

let number = 329823;
let digits = countDigits(number);
console.log("Number of Digits in N: " + digits) // Output :- Number of Digits in N: 6
                            
                        