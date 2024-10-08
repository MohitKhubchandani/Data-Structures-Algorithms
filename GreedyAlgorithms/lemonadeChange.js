function lemonadeChange(bills) {
    let n = bills.length;
    let five = 0 , ten = 0;
  
    for(let i = 0; i < n; i++){
  
      if(bills[i] === 5){
      
          five += 1;
      
      }else if(bills[i] === 10){
      
          if(five){
              five -= 1;
              ten += 1;
          }else{
              return false;
          }
      
      }else{
      
          if(five && ten){
              five -= 1;
              ten -= 1;
          }else if(five >= 3){
              five -= 3;
          }else{
              return false;
        }  
      }
    }
  
    return true;
    
  };

const bills = [5,5,5,20];
const Output = lemonadeChange(bills);
console.log(Output) // Output :- true
 