// Level Order Binary Tree Traversal
// Using FIFO queue

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

    levelorder(){
        let queue= []
        let ans = ''
        queue.unshift(this.root)

        while(queue.length>0){
            let node= queue.pop()
            ans=ans+node.data+' '
            if(node.left!==null)
                queue.unshift(node.left)
            if(node.right!==null)
                queue.unshift(node.right)
        }
        return ans
    }
}

let tree_level = new BinaryTree();
tree_level.root = new Node(1);
tree_level.root.left = new Node(2);
tree_level.root.right = new Node(3);
tree_level.root.left.left = new Node(4);
tree_level.root.left.right = new Node(5);

console.log(tree_level.levelorder())