// Minimum steps to reach target by a Knight | Set 1

// Given a square chessboard of N x N size, 
// the position of Knight and position of a target is given. 
// We need to find out the minimum steps a Knight will take to reach the target position.

class Cell{
    constructor(x,y,dis){
        this.x=x
        this.y=y
        this.dis=dis
    }
}

class Chess{

    isInside(x,y,n){
        if(x>=1&&x<=n&&y>=1&&y<=n)
            return true
        return false
    }

    minimum(start, end, n){
        let queue=[]
        let visited={}

        let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
        let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

        queue.unshift(new Cell(start[0],start[1], 0))
        visited[start[0]+''+start[1]]=true

        while(queue.length>0){
            let node = queue.pop()

            if(node.x==end[0]&&node.y==end[1])
                return node.dis
            
            for (let i = 0; i < 8; i++) {
                let x = node.x + dx[i]
                let y = node.y + dy[i]
                
                if (this.isInside(x, y, n) && !visited[x+''+y]) {
                    visited[x+''+y] = true;
                    queue.unshift(new Cell(x, y, node.dis + 1));
                }
            }
        }
        return Number.MAX_VALUE
    }
}

let chess = new Chess()

console.log(chess.minimum([1,1],[30,30],30))