function isValid(s){
    let stk = [];
    let i = 0;

    while(i < s.length){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stk.push(s[i])
        }else{
            if(stk.length == 0)return false;
            let top = stk.pop();
            let cur = s[i];

            if (top == "(" && cur != ")") {
                return false;
            }else if(top == "{" && cur != "}"){
                return false;
            }else if(top == "[" && cur != "]"){
                return false
            }
        }
        i++;
    };
    return stk.length == 0;
}

const Input  = "(]"
const Output = isValid(Input);
console.log(Output) // Output :- false
