function bubbleSort(n){
let temp;
for (let i = 0; i < n.length - 1 ; i++) {

  for (let j = 0; j < n.length - i - 1 ; j++) {
  
    if(n[j] > n[j+1]){
      let temp = n[j+1];
    n[j+1] = n[j]
    n[j] = temp
    }
  } 
}
 return n;
}


const Output = [5,4,3,2,1]
console.log(bubbleSort(Output));


