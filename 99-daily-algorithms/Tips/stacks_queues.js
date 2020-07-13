// (LIFO)
class Stack { 
    constructor() 
    { 
      this.items = []
    } 
  
    spush(item){
      this.items.unshift(item)
     
    }
    spop(){
      this.items.shift()
    
    }
    peek(){
      console.log(this.items[0])
      
    }

    isEmpty(){
      return !this.items[0]
    }

    printStack(){
      console.log(this)
    }
  
    
} 

//(FIFO)
class Queue 
{ 
    constructor() 
    { 
      this.items = []
    } 
    enqueue(item){
      this.items.unshift(item)
    }
 
    dequeue(){
      let result = this.items.pop()
    }
    printQueue(){
      console.log(this)
    }
    isEmpty(){
      return !this.items[0]
    }

} 

let stack = new Stack()
stack.isEmpty()
stack.spush(1)
stack.spush(2)
stack.spush(3)
stack.spush(4)
stack.printStack(stack)
stack.spop()
stack.printStack(stack)
stack.peek()

stack.isEmpty()

let queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.printQueue()
queue.dequeue()
queue.printQueue()
queue.isEmpty()

//You must use a Stack or Queue 
// Given an expression string exp , write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced

// Input: exp = “[(])”
// Output: Not Balanced

//An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. 
//Shelter: 
//{name:"rose", animal:"cat"},{name:"River",anima:"dog"}, {name:"bubbles", animal:"cat"}, {name:"Beans",anima:"dog"}

//Input: cat
//Output: {name:"bubbles", animal:"cat"}
//Input: dog
//Output: {name:"Beans",anima:"dog"}