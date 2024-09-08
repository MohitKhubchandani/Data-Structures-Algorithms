function monotonicStackIncreasing(arr) {
  let stk = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
      while (arr[i] <= stk[stk.length - 1]) {
          stk.pop();
      }

      if (stk.length > 0) {
          result[i] = stk[stk.length - 1]; 
      }

      stk.push(arr[i]);
  }

  return result;
}

debugger
const arr = [1,2,5,3,4];
const Output = monotonicStackIncreasing(arr);
console.log(Output); 
