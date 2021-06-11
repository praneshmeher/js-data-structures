// Root to leaf path sum equal to a given number

class Node{
    constructor(data){
        this.data=data
        this.right=null
        this.left=null
    }
}

class BinaryTree{
    constructor(){
        this.root==null
    }

    pathsum(node, sum){
        if(node==null)
            return false

        if(node.right==null&&node.left==null&&sum==node.data)
            return true

        return (this.pathsum(node.left, sum-node.data) || this.pathsum(node.right, sum-node.data))
    }
}


let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(8);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(2);

console.log(tree.pathsum(tree.root, 21, 0))
 