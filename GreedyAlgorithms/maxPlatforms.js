function maxPlatforms(arr, dep){
    arr.sort((a,b) => a-b);
    dep.sort((a,b) => a-b);

    let count = 1, max = 1;
    let i = 1, j = 0;

    while (i < arr.length && j < dep.length) {
        
        if(arr[i] <= dep[j]){
            count++;
            i++;
            max = Math.max(max, count);    
        }else{
            count--;
            j++;
        }
    }
    return max;
}

let arr = [900, 945, 955, 1100, 1500, 1800];
let dep = [920, 1200, 1130, 1150, 1900, 2000];
const Output = maxPlatforms(arr, dep);
console.log(Output) // Output :- 3
