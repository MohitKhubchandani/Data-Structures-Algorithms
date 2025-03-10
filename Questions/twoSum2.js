var twoSum2 = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;

    while(i < j){
        let sum = numbers[i] + numbers[j];
        if(sum > target)j--
        else if(sum < target)i++
        else return [i, j]
    }
};

const numbers = [5,25,75];
const target = 100;
const Output = twoSum2(numbers, target);
console.log(Output); // Output :- [1, 2]
// Time Complexity :- O(n)
// Space Complexity :- O(1)

