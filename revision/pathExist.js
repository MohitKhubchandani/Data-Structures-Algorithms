function dfs(adjacencyList, source, visited) {
    visited[source] = true;
    
    adjacencyList[source].forEach(element => {
        if (visited[element] == false) {
            dfs(adjacencyList, element, visited);
        }
    })
}
function pathExist(n, edges, source, destination) {
    let adjacencyList = Array.from({length : n}, () => [])

    for(let [zero, one] of edges){
        adjacencyList[zero].push(one)
        adjacencyList[one].push(zero)
    }

    let visited = new Array(n).fill(false);

    dfs(adjacencyList, source, visited);
    
    return visited[destination] ? true : false;

}

let n = 3;
let edges = [[0,1],[1,2],[2,0]];
let source = 0;
let destination = 2;
let Output = pathExist(n, edges, source, destination);
console.log(Output) // Output :- true
