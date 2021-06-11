// Level Order Binary Tree Traversal
// Level order traversal of a tree is breadth first traversal for the tree. 
// Use function to print a current level
// Time Complexity: O(n^2) in worst case.
// Space Complexity: O(n) in worst case.

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

    height(node){
        if(node==null)
            return 0;

        let leftTree=this.height(node.left)
        let righTree=this.height(node.right)

        if(leftTree>righTree)
            return leftTree+1
        else
            return righTree+1
    }

    levelorder(){
        let h =this.height(this.root)
        for (let i = 1; i <= h; i++) {
            this.printlevel(this.root, i, 1)
        }
    }

    printlevel(node, level, counter){
        if(node==null)
            return
        if(counter==level)
            console.log(node.data)
        else if(counter<level){
            this.printlevel(node.left, level, counter+1)
            this.printlevel(node.right, level, counter+1)
        }
    }
}

let tree = new BinaryTree();
tree.root= new Node(1);
tree.root.left= new Node(2);
tree.root.right= new Node(3);
tree.root.left.left= new Node(4);
tree.root.left.right= new Node(5);

tree.levelorder()