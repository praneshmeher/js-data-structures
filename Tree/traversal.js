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

    inorder(node){
        if(node==null)
            return
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }

    preorder(node){
        if(node==null)
            return
        console.log(node.data)
        this.preorder(node.left)
        this.preorder(node.right)
    }

    postorder(node){
        if(node==null)
            return
        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.data)
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

tree.preorder(tree.root)
console.log('\n')
tree.inorder(tree.root)
console.log('\n')
tree.postorder(tree.root)