// Pattern #4

for(let i = 0; i <= 4; i++){
    for (let j = 0; j <= 5-i-1 ; j++ ) {
        process.stdout.write(" ");
    } 

    for (let j = 0; j <= 2*i ; j++ ) {
        process.stdout.write("*");
    } 
    
    
    for (let j = 0; j <= 5-i-1 ; j++ ) {
        process.stdout.write(" ");
    } 
    process.stdout.write("\n");}
    
/**
 * Output :-     *
                ***
               *****
              *******
             *********
 */