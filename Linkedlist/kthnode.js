// Program for n’th node from the end of a Linked List

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

    kthnode(k){
        let first= this.head
        let second = this.head

        for (let i = 1; i < k; i++) {
            first=first.next
        }

        while(first.next!==null){
            first=first.next
            second=second.next
        }
        console.log(second.data)
    }
}

let llist = new LinkedList();
llist.push(20);
llist.push(4);
llist.push(15);
llist.push(35);

llist.kthnode(1);