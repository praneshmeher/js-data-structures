// Swap Kth node from beginning with Kth node from end in a Linked List

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

    printList(){
        let curr = this.head
        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }

    push(data){
        let node = new Node(data)
        node.next = this.head
        this.head= node
    }

    swap(k){
        let first = this.head
        let second = this.head

        for (let i = 1; i < k; i++) {
            first=first.next    
        }

        let curr = first

        while(curr.next!=null){
            second=second.next
            curr=curr.next
        }

        let temp = first.data
        first.data=second.data
        second.data=temp
    }
}

let llist = new LinkedList();
for(let i=8; i>0; --i){
    llist.push(i);
}
llist.swap(1);
llist.swap(2);
llist.printList()