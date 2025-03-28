var matrixReshape = function (mat, r, c) {
  let row = mat.length;
  let col = mat[0].length;
  let total = row * col;

  if (total !== r * c) return mat;

  let arr = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr.push(mat[i][j]);
    }
  }

  let ans = [];
  let index = 0;
  for (let k = 0; k < r; k++) {
    let tempArr = [];
    for (let l = 0; l < c; l++) {
      tempArr.push(arr[index]);
      index++;
    }
    ans.push(tempArr);
  }

  return ans;
};

debugger;
let mat = [
  [1, 2],
  [3, 4]
];
let r = 4;
let c = 1;
let Output = matrixReshape(mat, r, c);
console.log(Output); // Output :- [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
