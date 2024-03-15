// pattern #10

let num = 1

for(let i = 1; i <= 5; i++){
    
    for (let j = 1; j <= i; j++) {

        process.stdout.write(`${num.toString()} `)
        
        num = num + 1;

    } process.stdout.write("\n");
}

/** 
Output :-   1 
            2 3 
            4 5 6 
            7 8 9 10 
            11 12 13 14 15 
        
*/