function allocate(arr , pages){
  let std = 1 , pagesStd = 0;
  let n = arr.length
  for (let i = 0; i < n ; i++) {
    if(pagesStd + arr[i] <= pages){
      pagesStd += arr[i]
    }else{
      std++
      pagesStd = arr[i]
    }
  } 
  return std
}

function main(arr , k){
  let low = Math.max(...arr) , high = arr.reduce((a,b) => a + b);
  while(low <= high) {
    let mid = Math.floor((low + high)/2);
    let noOfStudents = allocate(arr,mid)
    if(noOfStudents > k) low = mid + 1;
    else high = mid - 1
  }
return low
}

const arr = [25, 46, 28, 49, 24]
const Output = main(arr ,  4)
console.log(Output);// Output :- 71
