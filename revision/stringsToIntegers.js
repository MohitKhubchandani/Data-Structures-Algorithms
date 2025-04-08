function stringsToIntegers(s) {
  let ans = 0;
  let i = 0;

  let isNegative = false;

  while (s[i] == ' ') i++;

  if (s[i] == '-') {
    isNegative = true;
    i++;
  } else if (s[i] == '+') {
    isNegative = false;
    i++;
  }

  while (s[i] == '0') i++;

  while (i < s.length && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
    ans *= 10;
    ans += s.charCodeAt(i) - 48;

    if (isNegative) {
      if (ans >= Math.pow(2, 31)) {
        return -1 * Math.pow(2, 31);
      } else if (ans >= Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
    }
    i++;
  }
  if (isNegative) ans *= -1;
  return ans;
}

const s = '   -042';
const Output = stringsToIntegers(s);
console.log(Output); // Output :- -42
