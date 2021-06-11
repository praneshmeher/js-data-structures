// Connected Components in an undirected graph

// Given an undirected graph, print all connected components line by line. 


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

    connected(){
        let visited={}

        for (let i = 0; i < Object.keys(this.adj).length; i++) {
            if(!visited[i])
                this.dfs(i, visited)
            console.log('====')
        }
    }

    dfs(node, visited){
        visited[node]=true
        console.log(node)

        let list = this.adj[node]
        for (let i = 0; i < list.length; i++) {
            if(!visited[list[i]])
                this.dfs(list[i], visited)
        }
    }
}

let g = new Graph(5);

for (let i = 0; i < 5; i++) {
    g.addVertex(i)
}

g.addEdge(1, 0);
g.addEdge(2, 3);
g.addEdge(3, 4);

g.connected()