function moveZeros(arr){
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
  if(arr[i] !== 0)
    temp.push(arr[i])
  }
  let nz = temp.length;
  for (let i = 0; i < nz; i++) {
    arr[i] = temp[i]
  }
  for (let i = nz; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

