function prefixSum(arr){
  let map = new Map();
  let prefix = 0;
  for(let i = 0 ; i <arr.length ; i++){
    prefix += arr[i];
    map.set(i , prefix)
  }
return map;
}


const arr = [5, 4, 3, 2, 1];
const Output = prefixSum(arr);

console.log(Output)