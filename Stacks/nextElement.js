class Stack {
    #arr;
    constructor() {
      this.#arr = [];
    }
  
    push(element) {
      this.#arr.push(element);
    }
  
    pop() {
      return this.#arr.pop();
    }
  
    top() {
      return this.#arr[this.#arr.length - 1];
    }
  
    isEmpty() {
      return this.#arr.length === 0;
    }
  }
  
  function nextGreaterElement(nums1, nums2) {
    let stk = new Stack();
    let ngeMap = new Map(); 
    for (let i = nums2.length - 1; i >= 0; i--) {
      while (!stk.isEmpty() && stk.top() <= nums2[i]) {
        stk.pop();
      }
  
      if (!stk.isEmpty()) {
        ngeMap.set(nums2[i], stk.top());
      } else {
        ngeMap.set(nums2[i], -1);
      }
  
      stk.push(nums2[i]);
    }

    return nums1.map(num => ngeMap.get(num));
  
  }
  

  const nums1 = [2, 4], nums2 = [1, 2, 3, 4];
  const output = nextGreaterElement(nums1, nums2);
  console.log(output); // Output:- [3, -1]
  