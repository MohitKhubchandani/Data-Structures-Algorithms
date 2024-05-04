function majorityElements(arr){
  let n = arr.length;
  let map = new Map();
  
  for(i = 0; i < n; i++){
   let num = arr[i];
   if(map.has(num)){
       map.set(num , map.get(num) + 1)
   }
   else{
       map.set(num ,1)
   }
  }
  for( const [num , value] of map){
   if(value > Math.floor(n/2)){
       return num;
   }
  }
  return -1
}

const arr = [2,1,1,1,2];
const Output = majorityElements(arr)
console.log(Output); // Output :- 1