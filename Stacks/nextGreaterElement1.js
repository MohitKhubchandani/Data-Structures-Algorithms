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

function nextGreaterElement(nums) {
  let stk = new Stack();
  let n = nums.length
  let nge = new Array(n)

  for (let i = n * 2 - 1; i >= 0; i--) {
    while (!stk.isEmpty() && stk.top() <= nums[i % n]) {
      stk.pop();
    }

    if (i < n) {
      if(!stk.isEmpty()){
        nge[i] = stk.top();
      }else{  
        nge[i] = -1;
      }
    };

    stk.push(nums[i % n]);
  }
  
  return nge

}

const nums = [1,2,1]
const output = nextGreaterElement(nums);
console.log(output); // Output:- [ 2, -1, 2 ];

