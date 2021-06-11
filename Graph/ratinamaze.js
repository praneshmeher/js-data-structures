// Rat in a Maze | Backtracking-2

class Maze{

    maze(maze){

        let sol = []
        for (let i = 0; i < maze.length; i++) {
            sol.push([])
            for (let j = 0; j < maze[i].length; j++) {
                sol[i].push(0)
            }
        }

        if(this.solvemaze(maze,0,0,sol))
            return sol

        return sol
    }

    solvemaze(maze,x,y,sol){
        if(x==4-1 && y==4-1 && maze[x][y]==1){
            sol[x][y]=1
            return true
        }
        
        if(maze[x]&&maze[x][y]&&maze[x][y]==1){
            if(sol[x][y]==1)
                return false

            sol[x][y]=1

            if(this.solvemaze(maze, x, y+1, sol))
                return true
            if(this.solvemaze(maze, x, y-1, sol))
                return true
            if(this.solvemaze(maze, x+1, y, sol))
                 return true
            if(this.solvemaze(maze, x-1, y, sol))
                return true

            sol[x][y]=0
            return false
        }
        return false
    }
}

let rat = new Maze();
let maze = [[ 1, 0, 0, 0 ],
            [ 1, 1, 0, 1 ],
            [ 0, 1, 0, 0 ],
            [ 1, 1, 1, 1 ]]


let sol = rat.maze(maze)
for (let i = 0; i < sol.length; i++) {
    let ans=''
    for (let j = 0; j < sol[i].length; j++) {
        ans=ans+sol[i][j]+' '
    }
    console.log(ans)
}