// Reverse String II

function reverseStr2(str, n){
  let h = 1, i = 0, j = 0, k = 0;

  let ans = "";

  let len = str.length;
  if(n > len)return str.split("").reverse().join("");

  while (k < len) {
    if (h == n && j == 0) {
      ans += str.slice(i, k + 1).split("").reverse().join("");
      k++;
      i = k;
      j = 1;
      h = 1;
    } else if (h == n && j == 1) {
      ans += str.slice(i, k + 1);
      k++;
      i = k;
      j = 0;
      h = 1;
    } else { 
      k++;
      h++;
      if (k === len) {
        if (j == 0) {
          ans += str.slice(i, k).split("").reverse().join("");
        } else {
          ans += str.slice(i, k);
        }
      }
    }
  }
  return ans;
}


let str = "abcdefg";
const Output = reverseStr2(str, 2);
console.log(Output); // Output :- bacdfeg

