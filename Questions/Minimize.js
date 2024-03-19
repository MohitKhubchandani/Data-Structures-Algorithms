// Minimize the total cost

function minimize(arr){
  let totalSum = 0; 
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i]  
  }

  let totalCost = 0;
  arr.sort((a,b) => b - a)

  for (let i = 0; i < arr.length; i++) {
    totalCost += totalSum; 
    totalSum -= arr[i] 
    
  }
  return totalCost
}

const output = minimize([1,6,4])
console.log(output);
// Output = 17
