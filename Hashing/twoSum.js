// 11,2,7,15
function twoSum(array , target){
  let map = {};
  // frequency map
  for (let i = 0; i < array.length; i++) {
    if(map[array[i]]){
      map[array[i]] += 1
    }
    else{
      map[array[i]] = 1
    }
  }
  for (let i = 0; i < array.length; i++) {
    
    
  }

  }

  console.log(twoSum([11,2,7,15] , 9));