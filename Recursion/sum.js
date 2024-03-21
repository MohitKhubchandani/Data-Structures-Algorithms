// sum using recursion
function sum(n){
  if(n == 0) return 0 ;
  else{
    n + re(n - 1)
  }
}


const Output = sum(3);
console.log(Output);
//Output :- 6