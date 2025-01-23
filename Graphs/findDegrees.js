function findDegrees(graph) {
    const degrees = {};
    for (const node in graph) {
      degrees[node] = graph[node].length; // Degree is the number of edges for the node
    }
    return degrees;
  }
  
  // Example Usage
  const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"],
  };
  console.log(findDegrees(graph)) // Output: { A: 2, B: 2, C: 2, D: 2 }
  