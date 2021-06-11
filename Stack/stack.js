// Implementation of Stack in JavaScript

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length === 0)
            return "Underflow"
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    printStack(){
        let str = ''
        for(let i = 0;i<this.items.length;i++)
            str = str + this.items[i] + ' '
        return str
    }
}

var stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.pop())

