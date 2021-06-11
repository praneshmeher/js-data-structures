// Find the middle of a given linked list

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
        this.head= node
    }

    printList(){
        let curr = this.head
        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }

    middle(){
        let fast= this.head
        let slow= this.head

        while(fast !== null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        console.log(slow.data)
    }
}

let llist = new LinkedList();
for(let i=6; i>0; --i){
    llist.push(i);
}
llist.printList();
llist.middle()
