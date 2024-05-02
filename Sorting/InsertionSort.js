
debugger
const n = [5,4,3,2,1]
for (let i = 1; i < n.length ; i++) {
  let element = n[i]
  let j;
  for (j = i - 1; j >= 0; j--) {
    if(n[j] > element){//5>4
    n[j+1] = n[j]  // 4 = 5
  
    }
    else{
      break
    }
     
  }
  n[j+1] = element
  
}


console.log((n));