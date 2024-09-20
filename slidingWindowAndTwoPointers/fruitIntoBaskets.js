function fruitIntoBaskets(arr, k){
    let right = 0, left = 0;
    let maxLen = 0;
    let map = {};
    let n = arr.length;
    
    while (right < n) {
        if(!map[arr[right]]){
            map[arr[right]] = 0
        }

        map[arr[right]]++

        while (Object.keys(map).length > k) {
            map[arr[left]]--;
            if(map[arr[left]] === 0){
                delete map[arr[left]];
            }
            left++            
        }

        maxLen = Math.max(maxLen , right - left + 1);
        right++;
    }
    return maxLen;
}


const fruitTypes = [3,3,3,1,2,1,1,2,3,3,4];
const Output = fruitIntoBaskets(fruitTypes , 2);
console.log(Output); // Output :- 5;
