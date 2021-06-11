// Given only a pointer/reference to a node to be deleted in a singly linked list, how do you delete it?

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    push(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }

    printList(){
        let curr= this.head
        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }

    deleteNode(node){
        let temp = node.next
        node.data=temp.data
        node.next=temp.next
        temp=null
    }
}

let llist = new LinkedList();

llist.push(1);
llist.push(4);
llist.push(1);
llist.push(12);
llist.push(1);

llist.deleteNode(llist.head);
llist.printList();