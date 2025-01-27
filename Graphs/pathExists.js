function pathExists(graph, start, end, visited = new Set()) {
    if (start === end) return true;
    visited.add(start);
  
    for (const neighbor of graph[start]) {
      if (!visited.has(neighbor) && pathExists(graph, neighbor, end, visited)) {
        return true;
      }
    }
    return false;
  }
  
  // Example Usage
  const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "E"],
    D: ["B"],
    E: ["C", "F"],
    F: ["E"],
  };
  console.log(pathExists(graph, "A", "F")); // Output: true
  console.log(pathExists(graph, "A", "D")); // Output: true
  console.log(pathExists(graph, "A", "G")); // Output: false
  