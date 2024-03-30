debugger
function hash(s , t){
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1
    }
    else{
      map[s[i]] = 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if(map[t[i]] === undefined) return false
     else{ 
      map[t[i]] -= 1
      if (map[t[i]] == 0) {
        delete map[t[i]]        
      }

     }
    } 
    return Object.keys(map).length == 0
  }



console.log(hash([1,2,3] , [1,2]));