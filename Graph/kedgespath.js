// Shortest path with exactly k edges in a directed and weighted graph

class Graph{

    shortestpath(graph, u, v, k){
        if(k==0&&u==v)
            return 0

        if(k==1&&graph[u][v]!==Infinity)
            return graph[u][v]

        if(k<=0)
            return Infinity

        let result = Infinity

        for (let i = 0; i < graph.length; i++) {
            if(graph[u][i]!==Infinity && u!==i & v!==i){
                var rec = this.shortestpath(graph, i, v, k-1)
                if(rec!==Infinity)
                    result = Math.min(result, rec + graph[u][i])
            }      
        }
        return result
    }
}

let g = new Graph()

let graph = [   [0, 10, 3, 2],
                [Infinity, 0, Infinity, 7],
                [Infinity, Infinity, 0, 6],
                [Infinity, Infinity, Infinity, 0]
            ]

console.log(g.shortestpath(graph, 0, 3, 2))