// Iterative Method to find Height of Binary Tree

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

    treeHeight(node){
        if(node==null)
            return 0
        
        let height = 0;
        let queue = [];
        queue.unshift(node)
        
        while(1){
            let nodeCount = queue.length
            if(nodeCount==0)
                return height
            
            height++

            while(nodeCount>0){
                let node = queue.pop()
                if(node.left!==null)
                    queue.unshift(node.left)
                if(node.right!==null)
                    queue.unshift(node.right)
                nodeCount--
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

console.log(tree.treeHeight(tree.root))