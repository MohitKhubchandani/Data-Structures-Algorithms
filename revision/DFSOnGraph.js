function dfs(adj) {
  let n = adj.length;
  let stk = [];
  let ans = [];
  let visited = new Array(n).fill(false);

  stk.push(0);
  visited[0] = true;

  while (stk.length > 0) {
    let top = stk[stk.length - 1];
    ans.push(top);
    stk.pop();

    for (let i = 0; i < adj[top].length; i++) {
      let x = adj[top][i];
      if (visited[x] == false) {
        stk.push(x);
        visited[x] = true;
      }
    }
  }
  return ans;
}

const adj = [[2, 3, 1], [0], [0, 4], [0], [2]];
const Output = dfs(adj);
console.log(Output); // Output :- [ 0, 1, 3, 2, 4 ]
