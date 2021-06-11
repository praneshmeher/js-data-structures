// Flood fill Algorithm – how to implement fill() in paint?

// In MS-Paint, when we take the brush to a pixel and click, 
// the color of the region of that pixel is replaced with a new selected color. 
// Following is the problem statement to do this task. 
// Given a 2D screen, location of a pixel in the screen and a color, 
// replace color of the given pixel and all adjacent same colored pixels with the given color.

class Graph{

    fillcolor(screen, x , y, nc, pc){
        if(screen[x]&&screen[x][y]&&screen[x][y]==pc){
            screen[x][y]=nc
            this.fillcolor(screen, x+1, y, nc, pc)
            this.fillcolor(screen, x-1, y, nc, pc)
            this.fillcolor(screen, x, y+1, nc, pc)
            this.fillcolor(screen, x, y-1, nc, pc)
        }
    }

}

let graph = new Graph()

let screen= [[1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1],
            [1, 2, 2, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 2, 2, 0],
            [1, 1, 1, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1],
            ];

graph.fillcolor(screen,4,4,3,screen[4][4])

for (let i = 0; i < screen.length; i++) {
    let row=''
    for (let j = 0; j < screen.length; j++) {
        row=row+screen[i][j]+' '
    }
    console.log(row)
}