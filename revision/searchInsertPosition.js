var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target)return mid;

        else if(nums[mid] < target)low = mid+1;

        else high = mid-1;
        
    };

    return low;
};

const nums = [1,3,5,6];
const target = 2;
const Output = searchInsert(nums, target);
console.log(Output) // Output :- 1
