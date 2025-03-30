var isVowel = function (s) {
  if (
    s === 'a' ||
    s === 'e' ||
    s === 'i' ||
    s === 'o' ||
    s === 'u' ||
    s === 'A' ||
    s === 'E' ||
    s === 'I' ||
    s === 'O' ||
    s === 'U'
  ) {
    return true;
  }
  return false;
};

var reverseVowel = function (str) {
  let s = str.split('');

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (isVowel(s[i]) == false) {
      i++;
      continue;
    }

    if (isVowel(s[j]) == false) {
      j--;
      continue;
    }

    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s.join('');
};

debugger;
const str = 'IceCreAm';
const Output = reverseVowel(str);
console.log(Output); // Output :- AceCreIm
