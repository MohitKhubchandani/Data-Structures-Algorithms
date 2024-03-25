// Reverse an array using recursion
function swap(array , left , right){
  let temp = array[left]
  array[left] =  array[right]
  array[right] = temp
}

function main(array , left , right){
  if(left >= right) return array;
  else{
     swap(array , left , right)
    return main( array ,left + 1 ,right - 1)
  }
}

const output = [5,4,3,2,1]
console.log(main(output , 0 , output.length - 1));
// output :- [ 1, 2, 3, 4, 5 ]