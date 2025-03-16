var lengthOfLastWord = function (s) {
  let trimmed = s.trimEnd();
  let ans = '';

  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] == ' ') break;
    else ans += trimmed[i];
  }
  if (trimmed.length == 1) return 1;
  return ans.length;
};

let str = 'Hello World';
let Output = lengthOfLastWord(str);
console.log(Output); // Output :- 5
