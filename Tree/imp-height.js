// Write a Program to Find the Maximum Depth or Height of a Tree

class Node{
    constructor(data){
        this.data= data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root =null
    }

    maxDepth(node){
        if(node==null)
            return 0
        else{
            let leftDepth = this.maxDepth(node.left)
            let rightDepth = this.maxDepth(node.right)
    
            if(leftDepth>rightDepth){
                return (leftDepth+1)
            }
            else{
                return (rightDepth+1)
            }
        }
    }
}

let tree = new BinaryTree()

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.maxDepth(tree.root))