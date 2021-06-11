// Inorder Tree Traversal without Recursion

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

    inorder(node){
        if(node==null)
            return
        
        let stack = []
        let curr = node

        while(curr!==null || stack.length>0){
            while(curr!==null){
                stack.push(curr)
                curr=curr.left
            }
            curr=stack.pop()
            console.log(curr.data)
            curr=curr.right
        }
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.inorder(tree.root);
