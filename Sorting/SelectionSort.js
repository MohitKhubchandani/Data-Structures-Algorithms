
function selectionSort(arr){  
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let min_indx = findTheMinElement(arr,i) 
      if (min_indx != i) {  
        let temp = arr[i];
        arr[i] = arr[min_indx]
        arr[min_indx] = temp;
      }
    }
  }
  function findTheMinElement(arr , i){
    let min_indx_el = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_indx_el]) {
        min_indx_el = j 
      }
   
    }

  return min_indx_el;
  }
const arr = [5,4,3,2,1]
selectionSort(arr)
console.log(arr);

// Output  :- [1,2,3,4,5]