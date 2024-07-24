function reverseStr(str){
  return str.split("").reverse().join("")
}

let str = "abcdef";
const Output = reverseStr(str);
console.log(`Reversed String is ${Output}`); // Output :- Reversed String is fedcba