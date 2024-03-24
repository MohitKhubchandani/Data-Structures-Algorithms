// if n = 4 , Output = 24;

function factorial(n){
  if(n == 0){
    return 1
  }
  else{
  return n * factorial(n - 1)
  }
}


const Output = factorial(4);
console.log(Output);