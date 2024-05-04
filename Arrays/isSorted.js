function isSorted(n){
  for (let i = 1; i < n.length; i++) {
    if (n[i] > n[i-1]) {
     
    }else{
      return false;
    }
  }
  return true;
}


const arr = [3,4,5,1,2]
const Output = isSorted(arr);
console.log(Output);