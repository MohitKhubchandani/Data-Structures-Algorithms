
function recurse(i , n){

 if(i > n){
  return
 }
 else{
  recurse(i - 1)
  console.log(i);
 }
 }

recurse(3)
 