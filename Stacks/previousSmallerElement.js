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

function previousSmallerElement(nums) {
  let stk = new Stack();
  let ngeMap = new Map();
  let n = nums.length - 1;

  for (let i = 0; i <= n; i++) {
    while (!stk.isEmpty() && nums[i] <= stk.top() ) {
      stk.pop();
    }
    

    if (!stk.isEmpty()) {
      ngeMap.set(nums[i], stk.top());
    } else {
      ngeMap.set(nums[i], -1);
    }

    stk.push(nums[i]);
  }

  return Array.from(ngeMap.values())

}


nums = [4,5,2,10,8];
const output = previousSmallerElement(nums);
console.log(output); // Output:- [ -1, 4, -1, 2, 2 ]
