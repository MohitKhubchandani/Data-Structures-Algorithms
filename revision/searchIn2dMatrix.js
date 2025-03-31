function searchMatrix (matrix, target) {
    let n = matrix.length;
    let left = 0;
    let right = n-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let midLeft = 0; 
        let midRight = matrix[mid].length - 1;

        while(midLeft <= midRight){
            let middle = Math.floor((midLeft + midRight)/2);
            if(matrix[mid][middle] == target)return true;

            else if(matrix[mid][middle] > target){
             midRight = middle - 1;
            }
            else {
                midLeft = middle + 1;
        }
    }
        if(midRight < 0)right = mid - 1;
        else left = mid + 1;
};
        return false;
};

const matrix = [[1],[3]];
const Output = searchMatrix(matrix, 3);
console.log(Output) // Output :- true
