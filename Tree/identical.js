// Write Code to Determine if Two Trees are Identical

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

    identical(node1, node2){
        if(node1==null && node2==null)
            return true

        if(node1!==null && node2!==null)
            return(node1.data==node2.data && this.identical(node1.left, node2.left) && this.identical(node1.right, node2.right))

        return false
    }
}

let tree = new BinaryTree();
   
tree.root1 = new Node(1);
tree.root1.left = new Node(2);
tree.root1.right = new Node(3);
tree.root1.left.left = new Node(4);
tree.root1.left.right = new Node(5);

tree.root2 = new Node(1);
tree.root2.left = new Node(2);
tree.root2.right = new Node(3);
tree.root2.left.left = new Node(4);
tree.root2.left.right = new Node(5);

if (tree.identical(tree.root1, tree.root2))
    console.log("Both trees are identical");
else
    console.log("Trees are not identical");