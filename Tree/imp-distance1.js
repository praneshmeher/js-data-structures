// Find distance from root to given node in a binary tree
// Given the root of a binary tree and a key x in it, 
// find the distance of the given key from the root. 
// Dis­tance means the num­ber of edges between two nodes.

class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    distance(node, key, distance){
        if(node==null)
            return -1

        if(node.data==key){
            console.log(distance)
        }
 
        this.distance(node.left, key, distance+1)
        this.distance(node.right, key, distance+1)
    }
}

let tree = new BinaryTree();
          
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(6);
tree.root.left.right.left.right = new Node(7);

console.log(tree.distance(tree.root, 6, 0))