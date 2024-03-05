// Problem statement
// You are given a number ’n’.

// Find the number of digits of ‘n’ that evenly divide ‘n’.

// Note:
// A digit evenly divides ‘n’ if it leaves no remainder when dividing ‘n’.

// Example:
// Input: ‘n’ = 336

// Output: 3

// Expected Time Complexity:
// Try to solve this in O(log(n)) 

// Constraints:
// 1 <= ‘n’ <= 10^9

// Time Limit: 1 sec

function solve(n) {
  let count = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    n = Math.floor(n / 10);
    count++; 
  }
  return count;
}


console.log(solve(336)); // This will output 3


// The time complexity of this function is O(log(n))