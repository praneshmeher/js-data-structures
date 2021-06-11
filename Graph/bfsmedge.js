// Minimum number of edges between two vertices of a Graph
// You are given a undirected graph G(V, E) with N vertices and M edges. 
// We need to find the minimum number of edges between a given pair of vertices (u, v).

class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(v){
        this.adj[v]=[]
    }

    addEdge(u,v){
        this.adj[u].push(v)
        this.adj[v].push(u)
    }

    minimum(node, v){
        let queue=[]
        let visited={}
        let distance={}
        
        Object.keys(this.adj).forEach((key)=>{distance[key]=0})
        queue.unshift(node)
        visited[node]=true

        while(queue.length>0){
            let ptnode = queue.pop()

            let list = this.adj[ptnode]

            for(let child of list){
                if(!visited[child]){
                    queue.unshift(child)
                    visited[child]=true
                    distance[child]=distance[ptnode]+1
                }
            }
        }

        return distance[v]
    }
}

let graph = new Graph()

for (let i = 0; i < 9; i++) {
    graph.addVertex(i)
}

graph.addEdge( 0, 1);
graph.addEdge( 0, 7);
graph.addEdge( 1, 7);
graph.addEdge( 1, 2);
graph.addEdge( 2, 3);
graph.addEdge( 2, 5);
graph.addEdge( 2, 8);
graph.addEdge( 3, 4);
graph.addEdge( 3, 5);
graph.addEdge( 4, 5);
graph.addEdge( 5, 6);
graph.addEdge( 6, 7);
graph.addEdge( 7, 8);

console.log(graph.minimum(0, 5))