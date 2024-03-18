// pattern #13

let a = "ABCDE"
for (let i = 0; i <= 5; i++) {
   for (let j = 0; j <= i; j++) {
    process.stdout.write(`${a.charAt(i)} `)
    
   }
    console.log();
}

/**
Output :- A 
          B B 
          C C C 
          D D D D 
          E E E E E 
*/