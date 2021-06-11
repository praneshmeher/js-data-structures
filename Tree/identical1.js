// Symmetric Tree (Mirror Image of itself)

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
            return (node1.data==node2.data && this.identical(node1.left, node2.right) && this.identical(node1.right, node2.left))

        return false
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(4);
tree.root.right.left = new Node(4);
tree.root.right.right = new Node(3);
console.log(tree.identical(tree.root, tree.root))