function Hash(array , number){
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      count++
    }
  }
  return count;
}

const output = Hash([1,3,4,5,6,] , 2)
console.log(output);