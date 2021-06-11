// Shortest path in an unweighted graph
// Given an unweighted graph, a source, and a destination, 
// we need to find the shortest path from source to destination in the graph in the most optimal way.

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
        this.adj[v].push(u)
    }

    bfs(node, v){
        let queue=[]
        let visited={}
        let parent={}
        let distance={}

        Object.keys(this.adj).forEach((key)=>{distance[key]=0})
        Object.keys(this.adj).forEach((key)=>{parent[key]=null})
        queue.unshift(node)
        visited[node]=true
        
        while(queue.length>0){
            let ptnode = queue.pop()

            let list = this.adj[ptnode]
            for (let i = 0; i < list.length; i++) {
                if(!visited[list[i]]){
                    visited[list[i]]=true
                    queue.unshift(list[i])
                    parent[list[i]]=ptnode
                    distance[list[i]]=distance[ptnode]+1
                }
            }
        }

        console.log('distance', distance[v])
        let dest = v
        console.log(dest)
        while(parent[dest]!==null){
            console.log(parent[dest])
            dest=parent[dest]
        }
    }
}

var g = new Graph();
  
for (var i = 0; i < 8; i++) {
    g.addVertex(i);
}

g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(3, 7);
g.addEdge(4, 5);
g.addEdge(4, 6);
g.addEdge(4, 7);
g.addEdge(5, 6);
g.addEdge(6, 7);

g.bfs(0,7)
