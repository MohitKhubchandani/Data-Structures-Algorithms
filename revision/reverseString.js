var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
};

debugger;
const str = ['h', 'e', 'l', 'l', 'o'];
const Output = reverseString(str);
console.log(Output); // Output :- [ 'o', 'l', 'l', 'e', 'h' ]jj
