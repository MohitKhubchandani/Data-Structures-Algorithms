var myPow = function(x, n) {
    if(n == 0)return 1;

    if(n < 0) {
        x = 1 / x;
        n = -n;  
    }

    var a = myPow(x, Math.floor(n/2));

    if(n % 2 == 0){
        return a * a;
    }
    else{
        return a * a * x;
    }
    
};

console.log(myPow(5, 10)); // Output :- 9765625
console.log(myPow(2, 5)); // Output :- 32