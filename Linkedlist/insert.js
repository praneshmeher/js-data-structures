// First Simple Linked List
// Inserting a node

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    push(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }

    insertAfter(prev, data){
        let node = new Node(data)
        if(prev==null)
            console.log('Previous node cannot be null')
        node.next=prev.next
        prev.next=node
    }

    append(data){
        let node = new Node(data)
        if(this.head==null){
            this.head = node
            return;
        }

        let curr = this.head
        while(curr.next!==null)
            curr=curr.next
        curr.next= node
        return
    }

    printList(){
        let curr = this.head
        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

let llist = new LinkedList();
 
llist.append(6);
llist.push(7);
llist.push(1);
llist.append(4);
llist.insertAfter(llist.head.next, 8);

llist.printList();