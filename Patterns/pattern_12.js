// pattern #12

let a = "ABCDE"
for (let i = 4; i >= 0; i--) {
    for(let j = 0; j <= i; j++) {
        process.stdout.write(`${a.charAt(j)} `);
        }
    console.log();
}


/**
Output :- A B C D E
          A B C D
          A B C
          A B 
          A
*/