// Problem Link: https://leetcode.com/problems/sliding-window-maximum/description/


var maxSlidingWindow = function(nums, k) {
      let dq = [];
      let list = [];

      for (let i = 0; i < nums.length; i++) {
        
        if(dq.length && dq[0] <= i - k){
          dq.shift();
        }
       
        while(dq.length && nums[i] >= nums[dq[dq.length - 1]]){
          dq.pop();
        }

       dq.push(i);
 
       if(i >= k - 1){
        list.push(nums[dq[0]]);
       }

  };

  return list;

}


const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const output = maxSlidingWindow(arr, k);
console.log(output); // Output: [3, 3, 5, 5, 6, 7]