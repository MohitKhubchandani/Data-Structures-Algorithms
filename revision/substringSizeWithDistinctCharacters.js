var countGoodSubstrings = function(s) {
    let count = 0;

    for(i = 0; i < s.length - 2; i++){
        if(s[i] !== s[i+1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]){
            count++;
        }
    }
    return count;
};

const arr = "aababcabc";
const Output = countGoodSubstrings(arr);
console.log(Output) // Output :- 4