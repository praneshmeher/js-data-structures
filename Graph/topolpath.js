// Longest Path in a Directed Acyclic Graph

class Node{
    constructor(v,w){
        this.v=v
        this.w=w
    }
}

class Graph{
    constructor(){
        this.adj={}
    }

    addVertex(v){
        this.adj[v]=[]
    }

    addEdge(u,v,w){
        let node = new Node(v,w)
        this.adj[u].push(node)
    }

    dfs(node, visited, stack){
        visited[node]=true

        let list = this.adj[node]       
        for (let i = 0; i < list.length; i++) {
            if(!visited[list[i].v])
                this.dfs(list[i].v,visited,stack)
        }
        stack.push(node)
    }

    longestpath(source){
        let visited={}
        let stack=[]
        let distance={}

        for (let i = 0; i < Object.keys(this.adj).length; i++) {
            distance[i]=Number.MIN_VALUE
         }

        distance[source]=0

        for (let i = 0; i < Object.keys(this.adj).length; i++) {
            if(!visited[i])
                this.dfs(i,visited,stack)
        }

        while(stack.length>0){
            let ptnode = stack.pop()

            if(distance[ptnode]!=Number.MIN_VALUE){
                let list = this.adj[ptnode]
                for(let child of list){
                    if(distance[child.v]<distance[ptnode]+child.w)
                        distance[child.v]=distance[ptnode]+child.w
                }
            }
        }

        console.log(distance)
        
    }
}

let g = new Graph(6);

for (let i = 0; i < 6; i++) {
    g.addVertex(i)
}

g.addEdge(0, 1, 5);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 6);
g.addEdge(1, 2, 2);
g.addEdge(2, 4, 4);
g.addEdge(2, 5, 2);
g.addEdge(2, 3, 7);
g.addEdge(3, 5, 1);
g.addEdge(3, 4, -1);
g.addEdge(4, 5, -2);

g.longestpath(1)