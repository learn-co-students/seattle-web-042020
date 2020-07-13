class Node {
    constructor(value) {
      this.value = value,
      this.left = null, 
      this.right = null
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    dfs(value){
      let result = false
      if(!this.root) return false
   
      const _dfs = (value,node) => {
        
        if(node.value === value) {
          result = node
          return
        }
        if(node.left && value < node.value){
          _dfs(value, node.left)
        } else if(node.right && value > node.value){
  
          _dfs(value,node.right)
        }
        return
        
        }
      _dfs(value,this.root)
      return result
    }
    bfs(value){
      if(!this.root) return false 
      if(this.root.value === value) return root
      let result = false
      let queue = []
      queue.unshift(this.root)
      while(queue.length > 0){
        let current = queue.pop()
        if(current.value === value){
          console.log(current,value)
          result = current
          return
        } else {
          if(current.left){
            queue.unshift(current.left)
          }
          if(current.right){
            queue.unshift(current.right)
          }
        }
      }
      return result
    }
  
    
  }
  
  let node10 = new Node(10)
  let node8 = new Node(8)
  let node13 = new Node(13)
  let node11 = new Node(11)
  let node9 = new Node(9)
  let node5 = new Node(5)
  
  let bst = new BST()
  bst.root = node10
  node10.left = node8
  node10.right = node13
  node8.left = node5
  node8.right = node9
  node13.left = node11
  bst.bfs(8)
  
  // let node15 = new Node(15)
  // bst.insert(15)
  // let node3 = new Node(3)
  // bst.insert(3)
  // console.log(bst.root.left)
  // insert(value){
  //     //creates the node
  //     let node = new Node(value)
  //     if(this.root === null){
  //       this.root = node;
  //     } else if(this.root.value === value ) {
  //       //no dupes in tree
  //       return false
  //     } else {
  //       //starts recursion
  //       this._insert(this.root, node)
  //     }
  //     return this.root
  //   }
  //   //helper
  //   _insert(parent, node){
  //     if(node.value < parent.value){
  //       parent.left?this._insert(parent.left,node):parent.left=node
  //     } else {
  //       parent.right?this._insert(parent.right,node):parent.right=node
  
  //     }
  //   }