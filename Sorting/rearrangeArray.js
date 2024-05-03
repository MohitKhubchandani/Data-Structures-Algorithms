function rearrangeArray(arr){
  let positive = 0
  let negative = 1
  let ans = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
      ans[negative] = arr[i]
      negative += 2
    }else{
      ans[positive] = arr[i]
      positive += 2;
    }
  }
return ans
}

rearrangeArray([1 , -1])