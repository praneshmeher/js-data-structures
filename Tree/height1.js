// Write a Program to Find the Maximum Depth or Height of a Tree

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

    height(node, level){
        if(node==null)
            return level

        let lheight = this.height(node.left, level+1)
        let rheight = this.height(node.right, level+1)

        if(lheight>rheight)
            return lheight
        else
            return rheight
    }
}

let tree = new BinaryTree()

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.height(tree.root, 0))