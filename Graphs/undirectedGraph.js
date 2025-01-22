class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Since it's undirected, add to both vertices
    }
  
    // Display the graph
    display() {
      for (let [vertex, edges] of this.adjacencyList) {
        console.log(`${vertex} -> ${edges.join(", ")}`);
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  graph.display(); // A -> B, C, B -> A, C, C -> A, B
  