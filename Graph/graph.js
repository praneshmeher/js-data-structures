// adjacency list representation of the graph

class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(vertex){
        this.adj[vertex] = []
    }

    addEdge(u, v){
        // if(!this.adj[u])
        //     this.adj[u]=[]
        // if(!this.adj[v])
        //     this.adj[v]=[]
        
        this.adj[u].push(v)
        this.adj[v].push(u)
    }

    printGraph(){
        Object.keys(this.adj).forEach((item)=>{
            console.log(item, '->', this.adj[item])
        })
    }
}

var g = new Graph();
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
  
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();