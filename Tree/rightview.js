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

    rightview(root){
        if(root==null)
            return
        
        let queue= []
        let ans = []
        queue.unshift(root)
        while(queue.length>0){
            let nodes = queue.length
            while(nodes>0){
                let node = queue.pop()
                nodes--
                if(nodes==0)
                    ans.push(node.data)
                if(node.left!==null)
                    queue.unshift(node.left)
                if(node.right!==null)
                    queue.unshift(node.right)
            }
        }

        console.log('ans---', ans)
    }
}

let tree = new BinaryTree()
tree.root = new Node(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.right.left = new Node(5)
tree.root.left.left = new Node(4)

tree.rightview(tree.root)

