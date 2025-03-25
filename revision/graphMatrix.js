function graphMatrix (edges, n){
    let matrix = Array.from({length: n} , () => new Array(n).fill(0));

    for (let i = 0; i < edges.length; i++) {
        let w = edges[i][0];
        let v = edges[i][1];

        matrix[v][w] = 1
        matrix[w][v] = 1
    };

    return matrix
};

const edges = [[0,1],[0,3],[1,3]];
const n = 4;
const Output = graphMatrix(edges, n);
console.log(Output) // Output :- [ [ 0, 1, 0, 1 ], [ 1, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 1, 1, 0, 0 ] ] 
