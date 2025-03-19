
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target)return mid;
        else if(nums[mid] < target) low = mid+1
        else high = mid-1
    }
    return -1
};

const nums = [-1,0,3,5,9,12];
const target = 9;
const Output = search(nums, target);
console.log(Output) // Output :- 4