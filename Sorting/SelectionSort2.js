




debugger
function selectionSort(n) {
  let i, j, small, b;
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
    n[b] = n[i]
    n[i] = small
  }
  return n
}

const n = [14,13,10,25,7]
console.log(selectionSort(n));



