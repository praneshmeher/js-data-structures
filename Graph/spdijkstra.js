// Dijkstra’s shortest path algorithm | Greedy Algo-7

class Graph{

    min(graph, visited, distance){
        let min = Infinity
        let node = -1
        for (let v = 0; v < graph.length; v++) {
            if(!visited[v] && distance[v]<=min){
                min=distance[v]
                node=v
            }
        } 
        return node
    }
    
    dijkstra(graph, node){
        let visited={}
        let distance={}

       for (let i = 0; i < graph.length; i++) 
           distance[i]=Infinity
       
        distance[node]=0

        for (let i = 0; i < graph.length; i++) {
            let u = this.min(graph, visited, distance)
            visited[u]=true

            for (let v = 0; v < graph.length; v++) {
                if(!visited[v] && graph[u][v]!=0 && distance[u]+graph[u][v]<distance[v])
                    distance[v]=distance[u]+graph[u][v]
            }
        }
        console.log(distance)
    }
}

let g = new Graph()

let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]

g.dijkstra(graph, 0)