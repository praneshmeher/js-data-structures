// Height of a complete binary tree (or Heap) with N nodes

function height(n){
    let nodes = 1
    let height = 0
    while(nodes<=n){
        nodes=nodes*2
        height++
    }
    console.log(height)
}

height(6)
