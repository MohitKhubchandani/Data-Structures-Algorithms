// Create a directed graph using an object

function createGraph() {
    // Create a graph object
    const graph = {};
  
    // Add an edge to the graph
    function addEdge(from, to) {
        if(!graph[from]){
            graph[from] = [];
        }
      graph[from].push(to);
    }
  
    // Print the graph
    function printGraph() {
      for (let vertex in graph) {
        console.log(`${vertex} -> ${graph[vertex].join(', ')}`);
      }
    }
  
    // Return the graph methods
    return { addEdge, printGraph };
  }
  
  
  const graph = createGraph();
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');
  graph.printGraph(); // A -> B, C -> D, D -> A
  