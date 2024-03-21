// write a function that checks whether a given string is Palindrome or not and return a boolean value
var isPalindrome = function(s , i = 0) {
    let n = s.length;
    if (i >= n/2) return true;
    if (s[i] != s[n - i - 1]) {
      return false;
    }
    else{
      return isPalindrome(s , i + 1)
      }

};

const output = "naman"
console.log(isPalindrome(output)); // true

