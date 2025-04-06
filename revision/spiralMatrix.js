function spiralOrder(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let ans = [];

    let rowStart = 0;
    let rowEnd = row-1;
    let colStart = 0;
    let colEnd = col-1;

    let total = row*col;

    while(ans.length < total){

        for (let i = colStart; i <= colEnd; i++) {
            ans.push(matrix[rowStart][i]);
        };
        rowStart++;

        if (ans.length == total) break;

        for (let i = rowStart; i <= rowEnd; i++) {
            ans.push(matrix[i][colEnd])
        };
        colEnd--;

        if (ans.length == total) break;

        for (let i = colEnd; i >= colStart ; i--) {
            ans.push(matrix[rowEnd][i])
        };
        rowEnd--;

        if (ans.length == total) break;

        for (let i = rowEnd; i >= rowStart; i--) {
            ans.push(matrix[i][colStart])
        };
        colStart++

    };

    return ans;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let Output = spiralOrder(matrix);
console.log(Output) // Output :- [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
