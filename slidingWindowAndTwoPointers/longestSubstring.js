function longestSubstring(str){
  let n = str.length;
  let left = 0, right = 0, maxLen = 0, len = 0;

  const charMap = new Map();

for (let i = 97; i <= 122; i++) {
  const char = String.fromCharCode(i);
  charMap.set(char, -1);
}

while(right < n){
  
  if(charMap.has(str[right]) && charMap.get(str[right]) !== -1){
        if(charMap.get(str[right]) >= left){
          left = charMap.get(str[right]) + 1;
        }
      }
      len = right - left + 1;
      maxLen = Math.max(len, maxLen); 
      charMap.set(str[right],  right);
      right++;
    }
    return maxLen;
  }


const str = "abcabcbb";
const Output = longestSubstring(str);
console.log(Output); //Output :- 3
