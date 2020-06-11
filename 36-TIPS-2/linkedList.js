// comprised of nodes
// Should have a head or a root node.
// we should be able to add a node

// Each node should have a reference to its following node (until it is null)

// and probably delete a node
// a better delete that doesn't assume we have the data in the list


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor(head){
        this.head = head
    }

    addNew(node){
        // traverse to the end of the list
        // keep going through the .nexts of the node until we hit null
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = node
    }

    deleteNode(data){
        // 1. we need to figure out which node has the data in it
        // 2. traverse from the front
        if(data === this.head.data){
            // code to remove the head node and replace it with its own .next
            // we have a head
            // the head has a next
            this.head = this.head.next
            return `${data} removed`
            // removed from the list, but this is called a memory leak
        }

        let currentNode = this.head
        while(currentNode.next.data != data){
            currentNode = currentNode.next
            
            if(currentNode.next === null){
                return "Aint got it"
            }
        }
        // currentnode is now equal to the node directly prior to the one we want to delete

        currentNode.next = currentNode.next.next
        return this
    }
}



let newNode = new Node("H")
let secondNode = new Node("E")
let three = new Node("A")
let four = new Node("D")

let newList = new List(newNode)

newList.addNew(secondNode)
newList.addNew(three)
newList.addNew(four)

console.log(newList.deleteNode("66343453"))
// console.log(newList)
