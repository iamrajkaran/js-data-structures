const map = {};

function addVertex(vertex){
if(!map[vertex]) map[vertex] = [];
// else map[vertex].push(vertex);
};

function addEdge(vertex, edge){
    if(!map[vertex]) map[vertex] = [];
    else {
       !map[vertex].includes(edge) && map[vertex].push(edge);
    }

}

function removeVertex(vertex){
    if(map[vertex]){
        for(let key in map){
            map[key] = map[key].filter(neighbor => neighbor != vertex)
        }
        delete map[vertex];
    }
};


function removeEdge(vertex, edge){
    if(map[vertex]){
        for(let key in map){
            map[key] = map[key].filter(neighbor => neighbor != edge)
        }
    }
};

function addEdge(vertex, edge){
    if(!map[vertex]) map[vertex] = [];
    else {
       !map[vertex].includes(edge) && map[vertex].push(edge);
    }
}

function dfs_rec(start) {
  const result = [];
  const visited = {};

  (function recursive(vertex){
    if(!map[vertex]) return null;

    visited[vertex] = true;

    result.push(vertex);

    map[vertex].forEach((edge) => {
        if (visited[edge] != true){
          recursive(edge);
        }
    });


  })(start);

  console.log(result);
}

function bfs(start) {
  const result = [];
  const visited = {};

    if(!map[start]) return null;

    visited[start] = true;

    result.push(start);

    Object.keys(map).forEach((vertex) => {
        map[vertex].forEach((edge) => {
            if (visited[edge] != true){
              result.push(edge);
              visited[edge] = true;
            }
        });
//         result.push(vertex);
    });
  console.log(result);
}
addVertex(40);
addVertex(50);
addVertex(10);
addVertex(20);
addVertex(30);



addEdge(30,20);
addEdge(40,10);
addEdge(40,20);
addEdge(30,50);
addEdge(10,20);
addEdge(10,40);
addEdge(20,30);
addEdge(20,10);
addEdge(30,40);
addEdge(50,10);

// 20--30---50
//  | \/   /
//  | /\  /
// 40---10
// removeVertex(10);
// removeEdge(20, 30);
console.log('>>', map);
dfs_rec(10);
bfs(10);
