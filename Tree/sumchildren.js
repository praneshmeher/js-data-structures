// Check for Children Sum Property in a Binary Tree
// For every node, data value must be equal to sum of data values in left and right children. 
// Consider data value as 0 for NULL children

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

    isSumProperty(node){
        let left_data=0
        let right_data=0

        if(node==null || (node.left==null&&node.right==null))
            return true
        else{
            if(node.left!=null)
                left_data = node.left.data
            if(node.right!=null)
                right_data=node.right.data

            if(node.data === left_data+right_data && this.isSumProperty(node.left) && this.isSumProperty(node.right))
                return true
            else
                return false
        }
    }
}

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(8);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(2);

console.log(tree.isSumProperty(tree.root))