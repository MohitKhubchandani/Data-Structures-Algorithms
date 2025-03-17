function longestPrefix(s1, s2) {
  let i = 0,
    j = 0;
  let n = s1.length;
  let m = s2.length;

  while (i < n && j < m && s1[i] == s2[j]) {
    i++;
    j++;
  }

  return s1.slice(0, i);
}

function longestCommonPrefix(strs) {
  let n = strs.length;
  let ans;
  if (n == 1) {
    return strs[0];
  } else {
    ans = longestPrefix(strs[0], strs[1]);
    for (let i = 2; i < n; i++) {
      ans = longestPrefix(ans, strs[i]);
    }
  }
  return ans;
}

let strs = ['flower', 'flow', 'flight'];
let Output = longestCommonPrefix(strs);
console.log(Output) // Output :- fl
