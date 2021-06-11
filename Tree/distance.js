// Find distance from root to given node in a binary tree
// Given the root of a binary tree and a key x in it, 
// find the distance of the given key from the root. 
// Dis­tance means the num­ber of edges between two nodes.

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

    distance(node, key){
        if(node==null)
            return

        let queue = []
        queue.unshift(node)
        let distance = -1

        while(queue.length>0){

            let count = queue.length
            distance++

            while(count>0){
                let node = queue.pop()
                if(node.data==key)
                    return distance
                if(node.left!==null)
                    queue.unshift(node.left)
                if(node.right!==null)
                    queue.unshift(node.right)
                count--
            }
        } 
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

console.log(tree.distance(tree.root, 5))