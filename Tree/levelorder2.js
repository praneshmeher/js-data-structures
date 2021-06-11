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

    levelorder1(root){
        if(root==null)
            return
        
        let queue= []
        let level = []
        let ans = []
        queue.unshift(root)
        queue.unshift(null)
        while(queue.length>0){
            let node = queue.pop()
            
            if(node!==null)
                level.push(node.data)
    
            if(node==null){
                if(queue.length>0)
                    queue.unshift(null)
                ans.push(level)
                level=[]
            }
            
            if(node && node.left!==null) 
                queue.unshift(node.left)
            
            if(node && node.right!==null)
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

console.log(tree_level.levelorder1(tree_level.root))