
function summation(i ,sum){
  if(i > 3){
    console.log(sum);
    return
  }
  else{
    summation(i + 1 , sum + i)
  }
}

summation(0,4)