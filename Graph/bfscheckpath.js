// Find if there is a path between two vertices in a directed graph

// Given a Directed Graph and two vertices in it, 
// check whether there is a path from the first given vertex to second.

class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(v){
        this.adj[v]=[]
    }

    addEdge(u,v){
        this.adj[u].push(v)
    }

    bfs(source, dest){
        let visited={}
        let queue=[]

        queue.unshift(source)
        visited[source]=true

        while(queue.length>0){
            let ptnode = queue.pop()
            if(ptnode==dest)
                return true

            let list = this.adj[ptnode]
            for (let i = 0; i < list.length; i++) {
                if(!visited[list[i]]){
                    visited[list[i]]=true
                    queue.unshift(list[i])
                }
            }
        }
        return false
    }
}

let g = new Graph()

for (let i = 0; i < 4; i++) {
    g.addVertex(i)
}

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(g.bfs(1,3))
console.log(g.bfs(3,1))