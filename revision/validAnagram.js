var isAnagram = function (s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  if (s === t) return true;

  return false;
};

const s = 'anagram';
const t = 'nagaram';
const Output = isAnagram(s, t);
console.log(Output); // Output :- true
