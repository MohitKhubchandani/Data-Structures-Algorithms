function re(i,n){
if(i > n){
 return;
}else{
  console.log(i);
  re(i+1,n)
 }
}

re(2,3)

