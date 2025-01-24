function hasCycle(graph) {
    function dfs(node, parent, visited) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node, visited)) return true;
        } else if (neighbor !== parent) {
          return true; // A cycle is detected
        }
      }
      return false;
    }
  
    const visited = new Set();
    for (const node in graph) {
      if (!visited.has(node)) {
        if (dfs(node, null, visited)) return true;
      }
    }
    return false;
  }
  
  // Example Usage
  const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"],
  };
  console.log(hasCycle(graph)); // Output: true
  
  const graphWithoutCycle = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
  };
  console.log(hasCycle(graphWithoutCycle)); // Output: false
  