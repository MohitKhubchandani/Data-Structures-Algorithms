function fibonacci(n){
  if (n <= 1) return n;
  else{
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const output = fibonacci(5)
console.log(output);
// Output :- 55