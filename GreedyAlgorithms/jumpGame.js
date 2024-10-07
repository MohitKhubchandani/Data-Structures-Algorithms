function canJump(nums) {

    if(nums.length === 1) return true;
    
    let maxInd = 0
    for(let i = 0; i < nums.length; i++){
        if(i > maxInd){
            return false;
        }

        if(nums[i] + i > maxInd){
            maxInd = nums[i] + i;
        }
    }
    return true;
};

const jumps = [2,3,1,1,4];
const Output = canJump(jumps);
console.log(Output) // Output :- true
