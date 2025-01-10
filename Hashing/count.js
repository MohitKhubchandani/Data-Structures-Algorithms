function  countRepetitions(number, arr){
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            cnt++
        }
    }
    
    return cnt;
}

const arr = [1,2,1,2,3,1]
const Output =  countRepetitions(1, arr);
console.log(Output) // Output :- 3
