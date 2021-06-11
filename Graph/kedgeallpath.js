// Count all possible walks from a source to a destination with exactly k edges

class Graph{

    allpath(graph, u, v, k){
        if(k==0&&u==k)
            return 0

        if(k==1&&graph[u][v])
            return 1

        if(k<=0)
            return 0

        let count = 0

        for (let i = 0; i < graph.length; i++) {
            if(graph[u][i])
                count = count+this.allpath(graph, i, v, k-1)
        }
        return count
    }
}

let g = new Graph()

let graph = [[0, 1, 1, 1, ],
            [0, 0, 0, 1, ],
            [0, 0, 0, 1, ],
            [0, 0, 0, 0] ];

console.log(g.allpath(graph, 0, 3, 2))