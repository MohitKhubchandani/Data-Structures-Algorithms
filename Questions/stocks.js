function stocks(arr){
  let profit = 0;
  let min = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min , arr[i]);
    let cost = arr[i] - min;
    profit = Math.max(profit , cost);
  }
  return profit;
}

const arr = [7,1,5,3,6,4];
const Output = stocks(arr);
console.log(Output); // Output :- 5