
function getSingleElement(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const num = arr[i]; 
    let cnt = 0;

    for (let j = 0; j < n; j++) {
      if (arr[j] === num) {
        cnt++;
      }
    }

    if (cnt === 1) {
      return num;
    }
  }

  return -1;
}

const arr = [4, 1, 2, 1, 2];
const ans = getSingleElement(arr);
console.log(ans); // Output :- 4


