// Pattern #5

for(let i = 0; i <= 4; i++){
    for (let j = 0; j <= i ; j++ ) {
        process.stdout.write(" ");
    } 

    for (let j = 0 ;j <= 8 -  (2*i)  ; j++) {
        process.stdout.write("*");
    } 
    
    
    for (let j = 0; j <= i ; j++ ) {
        process.stdout.write(" ");
    } 
    process.stdout.write("\n");}
    
/**
 * Output :-   *********
                *******
                 *****
                  ***
                   *
 */