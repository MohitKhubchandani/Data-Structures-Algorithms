function graph(edges, n){
    let adjecencyList = [];

    for (let i = 0; i < n - 1; i++) {
        adjecencyList.push([]);
    };

    for (let i = 0; i < n; i++) {
        let w = edges[i][0];
        let v = edges[i][1];
        
        adjecencyList[w].push(v)
        adjecencyList[v].push(w)
    };

    return adjecencyList;
};

const edges = [[0,1],[0,3],[1,2],[1,3],[2,4],[3,4],[4,5]];
const n = edges.length - 1;
const Output = graph(edges, n);
console.log(Output) // Output :- [ [ 1, 3 ], [ 0, 2, 3 ], [ 1, 4 ], [ 0, 1, 4 ], [ 2, 3 ] ]
