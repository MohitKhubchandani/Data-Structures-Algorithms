function arrayDuplicates(arr){
    let set1 = new Set();
    let ans = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set1.has(arr[i])) {
            ans.add(arr[i])
        } else {
            set1.add(arr[i])
        }
    }
    return [...ans];
}

let arr = [2, 3, 1, 2, 3];
let Output = arrayDuplicates(arr);
console.log(Output) // Output :- [ 2, 3 ]
