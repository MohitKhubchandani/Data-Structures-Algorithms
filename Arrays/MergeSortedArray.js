function merge(nums1,m,nums2,n){
  let result = new Array(m+n)
  let i = 0 , j = 0 ,k = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
        result[k] = nums1[i];
        k++;
        i++;
    } else {
        result[k] = nums2[j];
        k++;
        j++;
    }
}
while (i < m) {
    result[k] = nums1[i];
    k++;
    i++;
}
while (j < n) {
    result[k] = nums2[j];
    k++;
    j++;
}

k = 0;
while(k < m+n){
  nums1[k] = result[k]
  k++
}
return nums1;
}

const m = [1,2,3,0,0,0]
const n = [2,5,6]

const op = merge( m, 3 ,n , 3)
console.log(op);
