// Find sum of all left leaves in a given Binary Tree

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

    sumleft(node, isleft){
        if(node==null)
            return 0

        if(node.left==null && node.right==null && isleft)
            return node.data

        return (this.sumleft(node.left, true) + this.sumleft(node.right, false))
    }
}

let tree = new BinaryTree();
tree.root = new Node(20);
tree.root.left = new Node(9);
tree.root.right = new Node(49);
tree.root.left.right = new Node(12);
tree.root.left.left = new Node(5);
tree.root.right.left = new Node(23);
tree.root.right.right = new Node(52);
tree.root.left.right.right = new Node(12);
tree.root.right.right.left = new Node(50);

console.log(tree.sumleft(tree.root, false))

