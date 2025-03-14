function validPalindrome(str){
    if(str == " ")return true;
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let i = 0 , j = cleanedStr.length - 1;
 
    while(i < j){
        if(cleanedStr[i] == cleanedStr[j]){
            i++;
            j--;
        }else return false;
    }

    return true;   
};

const str = "."
const Output = validPalindrome(str);
console.log(Output)// Output :- true

