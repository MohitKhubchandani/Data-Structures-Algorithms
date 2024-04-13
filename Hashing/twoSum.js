// Two Sum using Hashmap
function twoSum(arr , target){
  let Hashmap = new Map()
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let moreNeeded = target - num;
    if(Hashmap.has(moreNeeded)){
      return "yes"
    }
    Hashmap.set(num , i)
    
  }
  return "No"
  }

const arr = [5,8,6,19,7,12,10]
const Output = twoSum(arr , 14); 
console.log(Output); // Output :- yes