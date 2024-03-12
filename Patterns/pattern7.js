for(let i = 0; i <= 4; i++){
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ");
    } 
process.stdout.write("\n");}
    
for(let i = 1; i <= 5; i++){
    for (let j = 0; j <= 5 - i - 1 ; j++) {
        process.stdout.write("* ");
        
    
    } process.stdout.write("\n")}

     
/**  Output :-  * 
                * * 
                * * * 
                * * * * 
                * * * * * 
                * * * * 
                * * * 
                * * 
                * 
*/