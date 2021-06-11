// K distance from root 

// Given a Binary Tree of size N and an integer K. 
// Print all nodes that are at distance k from root (root is considered at distance 0 from itself). 
// Nodes should be printed from left to right. If k is more that height of tree, nothing should be printed.

class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }

    printlevel(node, level, count){
        if(node==null)
            return -1

        if(count==level)
            console.log(node.data)

        if(count<level){
            this.printlevel(node.left, level, count+1)
            this.printlevel(node.right, level, count+1)
        }

    }
}

let tree = new BinaryTree();
          
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.right.left = new Node(11);
tree.root.right.right = new Node(12);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(6);
tree.root.left.right.left.right = new Node(7);

tree.printlevel(tree.root, 4, 0)