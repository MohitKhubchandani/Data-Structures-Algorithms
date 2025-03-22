function bfs(adj){
    let n = adj.length;
    let q = [];
    let ans = [];
    let visited = new Array(n).fill(false);

    q.push(0);
    visited[0] = true;

    while(q.length>0){
        let front = q[0];
        ans.push(front);
        q.shift();

        for (let i = 0; i < adj[front].length; i++) {
            let x = adj[front][i];
            if (visited[x] == false) {
                q.push(x);
                visited[x] = true;
            }
        }
    }
    return ans;
};

const adj = [[2,3,1], [0], [0,4], [0], [2]];
const Output = bfs(adj);
console.log(Output) // Output :- [ 0, 2, 3, 1, 4 ]
