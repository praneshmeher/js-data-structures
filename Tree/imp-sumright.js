// Find sum of all right leaves in a given Binary Tree

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
        this.sum=0
    }

    sumright(node){
        if(node==null)
            return
        
        if(node.right !== null && node.right.left==null && node.right.right==null)
            this.sum = this.sum + node.right.data

        this.sumright(node.left)
        this.sumright(node.right)
    }
}

let tree = new BinaryTree()
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.left.right = new Node(2);
tree.root.right = new Node(3);
tree.root.right.right = new Node(8);
tree.root.right.right.left = new Node(6);
tree.root.right.right.right = new Node(7);

tree.sumright(tree.root)
console.log(tree.sum)

