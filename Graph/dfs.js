// Depth First Search or DFS for a Graph

class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(v){
        this.adj[v]=[]
    }

    addEdge(u,v){
        // if(!this.adj[u])
        //     this.adj[u]=[]
        // if(!this.adj[v])
        //     this.adj[v]=[]
        
        this.adj[u].push(v)
    }

    dfs(node, visited={}){
        visited[node]=true
        console.log(node)

        let list = this.adj[node]
        for (let i = 0; i < list.length; i++) {
           if(!visited[list[i]]){
               this.dfs(list[i], visited)
           }
        }
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

g.dfs('A', {})

