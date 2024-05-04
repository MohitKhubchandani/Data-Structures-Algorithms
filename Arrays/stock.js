function stocks(arr){
  let min = arr[0]; 
  let maxProfit = 0; 

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i]; 
      } else {
          let profit = arr[i] - min; 
          if (profit > maxProfit) {
              maxProfit = profit; 
          }
      }
  }

  return maxProfit;
}


const arr = [2,4,1]
const Output = stocks(arr);
console.log(Output); // Output :- 2