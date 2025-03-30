var reverseWords = function (s) {
  s = s.trim().split(/\s+/).reverse().join(' ');
  return s;
};

const s = 'a good   example';
const Output = reverseWords(s);
console.log(Output); // Output :- example good a
