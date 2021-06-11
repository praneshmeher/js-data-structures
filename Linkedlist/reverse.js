// Reverse a linked list

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

    reverse(){
        let prev = null
        let curr = this.head
        let next = null

        while(curr!=null){
            next = curr.next
            curr.next = prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

    printList(){
        let curr=this.head
        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

let list = new LinkedList();
list.head = new Node(85);
list.head.next = new Node(15);
list.head.next.next = new Node(4);
list.head.next.next.next = new Node(20);

list.printList();
list.reverse();
list.printList();