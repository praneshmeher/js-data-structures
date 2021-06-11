// Given a ‘key’, delete the first occurrence of this key in the linked list. 

class Node{
    constructor(data){
        this.data=data
        this.next = null
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

    deleteNode(key){
        let curr = this.head
        while(curr.data!=key){
            curr=curr.next
        }

        let temp = curr.next
        curr.data = temp.data
        curr.next = temp.next
        temp = null
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
 
llist.push(7);
llist.push(1);
llist.push(3);
llist.push(2);

llist.deleteNode(1); 
llist.printList();