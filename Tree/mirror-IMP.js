// Convert a Binary Tree into its Mirror Tree

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

    mirror(node){
        if(node==null)
            return

        this.mirror(node.left)
        this.mirror(node.right)

        let temp=node.left
        node.left=node.right
        node.right=temp
    }

    inorder(node){
        if(node==null)
            return
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

tree.mirror(tree.root);
tree.inorder(tree.root)

