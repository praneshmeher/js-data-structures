// Topological Sorting

// Topological sorting for Directed Acyclic Graph (DAG) 
// is a linear ordering of vertices such that for every directed edge u v,
// vertex u comes before v in the ordering. 
// Topological Sorting for a graph is not possible if the graph is not a DAG.

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

    dfs(node, visited, stack){
        visited[node]=true

        let list = this.adj[node]
        for (let i = 0; i < list.length; i++) {
            if(!visited[list[i]])
                this.dfs(list[i],visited, stack)
        }
        stack.push(node)
    }

    topological(){
        let visited={}
        let stack=[]
        for (let i = 0; i < Object.keys(this.adj).length; i++) {
            if(!visited[i])
                this.dfs(i,visited,stack)
        }

        while(stack.length>0){
            let node=stack.pop()
            console.log(node)
        }
    }
}

let g = new Graph();

for (let i = 0; i < 6; i++) {
    g.addVertex(i)
}

g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

g.topological()