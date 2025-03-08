var powerOfTwo = function(n) {
    if(n == 0)return false;
    if(n == 1)return true;
    if(n % 2 != 0)return false;
    return powerOfTwo(n/2);
};

console.log(powerOfTwo(18)); // Output :- false
console.log(powerOfTwo(16)); // Output :- true