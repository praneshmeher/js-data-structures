// Sum of all the parent nodes having child node x

class Node {
    constructor(data){
        this.data=data
        this.right=null
        this.left=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
        this.sum = 0 
    }

    sumparent(node, x){
        if(node==null)
            return

        if((node.left!=null && node.left.data == x) || (node.right!=null && node.right.data == x)){
            this.sum = this.sum + node.data
        }
        this.sumparent(node.left, x)
        this.sumparent(node.right, x) 
    }
}

let tree = new BinaryTree()
tree.root = new Node(4);          
tree.root.left = new Node(2);         
tree.root.right = new Node(5);         
tree.root.left.left = new Node(7);        
tree.root.left.right = new Node(2); 
tree.root.right.left = new Node(2); 
tree.root.right.right = new Node(3); 

tree.sumparent(tree.root, 2)
console.log(tree.sum)
