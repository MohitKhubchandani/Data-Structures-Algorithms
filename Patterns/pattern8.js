
let start = 1;
for (let i = 1; i <= 5; i++) {   
    if (i % 2 == 0) start = 1;
    else start = 0;
    for(let j = 1; j <= i; j++) {
        start = 1 - start;
        process.stdout.write(start.toString());
       
     
}
process.stdout.write("\n");
}


/**
 * Output :-    1
                01
                101
                0101
                10101
 */