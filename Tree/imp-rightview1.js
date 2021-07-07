// Binary Tree Right Side View
// Given the root of a binary tree, 
// imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom

class Node{
    constructor(data){
        this.data=data
        this.right=null
        this.left=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }

    rightview(node, level, count, ans){
        if(node==null)
            return

        if(!level.includes(count)){
            level.push(count)
            ans.push(node.data)
        }

        this.rightview(node.right, level, count+1, ans)
        this.rightview(node.left, level, count+1, ans)
        
    }
}

let tree = new BinaryTree()
tree.root = new Node(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.right.left = new Node(5)
tree.root.left.left = new Node(4)

let ans = []
let level = []
tree.rightview(tree.root, level, 1, ans)
console.log(ans)