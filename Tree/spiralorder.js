// Level order traversal in spiral form

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
            return 0

        let ltree=this.height(node.left)
        let rtree=this.height(node.right)

        if(ltree>rtree)
            return ltree+1
        else
            return rtree+1
    }

    spiralorder(){
        let h = this.height(this.root)
        for (let i = 1; i <= h; i++) 
            this.printlevel(this.root, i, 1)
    }

    printlevel(node, level, counter){
        if(node==null)
            return
        if(counter==level)
            console.log(node.data)
        if(counter<level){
            if(level%2==0){
                this.printlevel(node.left,level,counter+1)
                this.printlevel(node.right,level,counter+1)
            }else{
                this.printlevel(node.right,level,counter+1)
                this.printlevel(node.left,level,counter+1)
            }
        }
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(6);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(4);

tree.spiralorder();

