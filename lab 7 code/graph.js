const graph = {
    1: { 3: 7, 4: 5, 6: 2 },
    2: { 4: 1, 6: 13 },
    3: { 1: 7, 4: 5, 5: 2 },
    4: { 1: 5, 2: 1, 3: 5 },
    5: { 1: 5, 3: 2, 6: 10 },
    6: { 1: 2, 2: 13, 5: 10 }
  };
  
  
  function searchVertex(graph, start) {
    const distances = {};
    const visited = {};
    const previous = {};
  
   
    for (let vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[start] = 0;
  
    while (true) {
      
      let closest = null;
      for (let vertex in distances) {
        if (!visited[vertex]) {
          if (closest === null || distances[vertex] < distances[closest]) {
            closest = vertex;
          }
        }
      }
  
      if (closest === null) break;
  
      
      for (let neighbor in graph[closest]) {
        let newDist = distances[closest] + graph[closest][neighbor];
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          previous[neighbor] = closest;
        }
      }
  
      visited[closest] = true;
    }
  
    return { distances, previous };
  }
  
  
  function reconstructPath(previous, start, end) {
    let path = [];
    let current = end;
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }
    return path[0] === start ? path : [];
  }
  
  
  const start = "6";
  const end = "2";
  
  const { distances, previous } = searchVertex(graph, start);
  const path = reconstructPath(previous, start, end);
  
  console.log(`Найкоротший шлях від ${start} до ${end}: ${path.join(" -> ")}`);
  console.log(`Його довжина: ${distances[end]}`);
  