// Pairwise swap elements of a given linked list

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

    swap(){
        let curr = this.head

        while(curr!==null && curr.next!==null){
            let temp = curr.data
            curr.data=curr.next.data
            curr.next.data=temp
            curr=curr.next.next
        }

    }

    printlist(){
        let curr = this.head

        while(curr!==null){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

let llist = new LinkedList();

llist.push(5);
llist.push(4);
llist.push(3);
llist.push(2);
llist.push(1);

llist.swap()
llist.printlist()
