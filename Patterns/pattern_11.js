// pattern #11

let a = "ABCDE"
for (let i = 0; i <= 5; i++) {
   for (let j = 0; j < i; j++) {
    process.stdout.write(`${a.charAt(j)} `)
    
   }
    console.log();
}

/**
Output :- A 
          A B 
          A B C 
          A B C D 
          A B C D E 
*/