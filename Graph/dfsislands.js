// Find the number of islands | Set 1 (Using DFS)

// Given a boolean 2D matrix, find the number of islands. 
// A group of connected 1s forms an island. For example, 
// the below matrix contains 5 islands

class Island{

    isSafe(row,col,visited,mat){
        return (mat[row]&&mat[row][col]&&!visited[row+''+col])
    }

    dfs(r, c, visited, mat){
        visited[r+''+c]=true
        let row = [-1, -1, -1, 0, 0, 1, 1, 1];
        let col = [-1, 0, 1, -1, 1, -1, 0, 1];

        for (let k = 0; k < 8; k++) {
            if(this.isSafe(r+row[k],c+col[k],visited,mat))
                this.dfs(r+row[k],c+col[k],visited,mat)
        }
    }

    countIsland(mat){
        let visited={}
        let count = 0

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if(!visited[i+''+j] && mat[i][j]==1){
                    this.dfs(i,j,visited,mat)
                    count++
                }
            }
        }
        return count
    }
}

let island = new Island()

let M = [[ 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1] ,[0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];

console.log(island.countIsland(M))