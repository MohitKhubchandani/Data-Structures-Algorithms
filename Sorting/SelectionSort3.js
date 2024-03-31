
function selectionSort(n) {
  let i, j, small, b , array = [];
  for (i = 0; i < n.length - 1; i++) {
    small = n[i]; 
    b = i;
    //comparision loop
    for (j = i + 1; j < n.length; j++) {
      if (small > n[j]) { 
        small = n[j]; 
        b = j;
      }
      
    }
    array.push(small)
  }
 
  return array[0]
}

const n = [5,4,9,7,6,2,8,1,3]
console.log(selectionSort(n));

// Output = 1

