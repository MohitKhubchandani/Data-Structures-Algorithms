function recursion(adj, i, visited, ans) {
  visited[i] = true;
  ans.push(i);

  for (let j = 0; j < adj[i].length; j++) {
    let x = adj[i][j];
    if (visited[x] == false) {
      recursion(adj, x, visited, ans);
    }
  }
}

function dfs(adj) {
    let n = adj.length;
    let ans = [];
    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] == false) {
        recursion(adj, i, visited, ans);
        }
    }

    return ans;
}

const adj = [[2, 3, 1], [0], [0, 4], [0], [2]];
const Output = dfs(adj);
console.log(Output); // Output :- [ 0, 1, 3, 2, 4 ]
