function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreaterMap = new Map();
    
    for (let i = nums2.length - 1; i >= 0; i--) {
      const num = nums2[i];

      while (stack.length > 0 && stack[stack.length - 1] <= num) {
        stack.pop();
      }

      if (stack.length > 0) {
        nextGreaterMap.set(num, stack[stack.length - 1]);
      } else {
        nextGreaterMap.set(num, -1);
      }
      
      stack.push(num);
    }

    const result = nums1.map(num => nextGreaterMap.get(num));
    
    return result;
  }

  
debugger
const nums1 = [4,1,2]
const nums2 = [1,3,4,2]
const Output = nextGreaterElement(nums1 ,nums2);
console.log(Output); // Output :- [ 2, 3, 4, 5, -1 ]
