// Breadth First Search or BFS for a Graph


class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(node){
        this.adj[node]=[]
    }

    addEdge(u, v){
        // if(!this.adj[u])
        //     this.adj[u]=[]
        // if(!this.adj[v])
        //     this.adj[v]=[]

        this.adj[u].push(v)
    }

    bfs(node){
        let queue=[]
        let visited={}

        queue.unshift(node)
        visited[node]=true

        while(queue.length>0){
            let v = queue.pop()
            console.log(v)

            let list = this.adj[v]
            for (let i = 0; i < list.length; i++) {
                if(!visited[list[i]]){
                    visited[list[i]]=true
                    queue.unshift(list[i])
                }
            }
        }
    }
}

var g = new Graph();

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  
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

g.bfs('A')