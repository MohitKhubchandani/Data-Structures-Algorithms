// pattern #9

for (let i = 1; i <= 4; i++) {

for (let j = 1; j <= i; j++) {
  process.stdout.write(j.toString())
}
for (let j = 0 ;j <= 7-(2*i)  ; j++) {
    process.stdout.write(" ");
} 
for (let j = i; j >= 1 ; j--) {
    process.stdout.write(j.toString())
  }

process.stdout.write("\n")
}

/** 
Output :-   1      1
            12    21
            123  321
            12344321

*/