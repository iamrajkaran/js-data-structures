const map = {};

function addVertex(vertex){
if(!map[vertex]) map[vertex] = [];
};

function addEdge(vertex1, vertex2){
   !map[vertex1].includes(vertex2) && map[vertex1].push(vertex2);
   !map[vertex2].includes(vertex1) && map[vertex2].push(vertex1);
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

function getArrivalAndDepartureTime() {
const result = [];

let timer = -1;
let arrival = {};
let departure = {};
const visited = {};

(function traverse(vertex){
if(!vertex || Object.keys(visited).length === 5) return;

if(!arrival[vertex]) arrival[vertex] = ++timer;
visited[vertex] = true;

map[vertex].forEach((neighbor) => {
    const currentVertexLength = map[vertex].length;
    const lastNeighbour = map[vertex][currentVertexLength - 1];
    if(lastNeighbour === neighbor) departure[vertex] = ++timer;

    if(!visited[neighbor]){
      traverse(neighbor);
    }
});

})(10);
console.table('Map' ,map);
console.table('Arrival' , arrival);
console.table('Departure', departure);
}

// 20--30
//  | \/
//  | /\
// 40---10

10 - 0,2
40 - 1,8
20 - 3,5
30 - 4,6



addVertex(40);
addVertex(10);
addVertex(20);
addVertex(30);

addEdge(30,20);
addEdge(40,10);
addEdge(40,20);
addEdge(10,20);
addEdge(10,40);
addEdge(20,30);
addEdge(20,10);
addEdge(30,40);

// 20--30---50
//  | \/   /
//  | /\  /
// 40---10
// removeVertex(10);
// removeEdge(20, 30);
console.log('>>', map);

getArrivalAndDepartureTime();
dfs_rec(10);
bfs(10);
