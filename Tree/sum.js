// Sum of all nodes in a binary tree

class Node {
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

    addBT(node){
        if(node===null){
            return 0;
        }else{
            return (node.data + this.addBT(node.left) + this.addBT(node.right))
        }
    }
}

let bst = new BinaryTree();

bst.root = new Node(1); 
bst.root.left = new Node(2); 
bst.root.right = new Node(3); 
bst.root.left.left = new Node(4); 
bst.root.left.right = new Node(5); 
bst.root.right.left = new Node(6); 
bst.root.right.right = new Node(7); 
bst.root.right.left.right = new Node(8); 

console.log(bst.addBT(bst.root))

