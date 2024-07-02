class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let linkedList = function(arr){
  let head = new Node(arr[0]);
  let mover = head
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp; 
    mover = temp; 
  }
  return head;
};

let checkIfPresent = function(arr , val){
  let head = linkedList(arr);
  temp = head;
  while(temp){
    if(temp.data == val)return temp;
    temp = temp.next;
  }
  return -1
}

let lengthOfLL = function(arr){
  let head = linkedList(arr);
  let temp = head;
  let ans = 0;
  while(temp){
      temp = temp.next
      ans++
  }
  return ans
}

let traverse = function(arr){
  let head = linkedList(arr);
  let temp = head;
  while(temp){
    console.log(temp.data);
    temp = temp.next;
  }
}

let deleteHead = function(head){
  if(head == null)return head;
  head = head.next;
  return head
}

let deleteTail = function(head){
  if(head == null || head.next == null)return null;
  let temp = head;
  while(temp.next.next !== null){
    temp = temp.next;
  }
  temp.next = null;
  return head;
}

let deleteKth = function(head , k){
  if(head == null)return null;
  if(k == 1){
    let temp = head
    head = head.next;
    delete temp;
    return head;
  }
  let count = 0;
  let temp = head;
  let prev = null;
  while(temp != null){
    count++;
    if(count == k){
      prev.next = prev.next.next;
      delete temp;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

let deleteNode = function(head , k){
  if(head == null)return null;
  if(head.data == k){
    let temp = head
    head = head.next;
    delete temp;
    return head;
  }
  let temp = head;
  let prev = null;
  while( temp != null){
    
    if(temp.data == k){
      prev.next = prev.next.next;
      delete temp;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

function insertHead(head, el) {
  let newNode = new Node(el);
  newNode.next = head;
  return newNode;
}

function insertTail(head , el){
  if(head == null)return new Node(el)
    let temp = head;
  while(temp.next !== null){
    temp = temp.next;
  }
  let newNode = new Node(el)
  temp.next = newNode ;
  return head;
}

function insertkth(head , el ,k){
  if(head == null){
  if(k == 1)return new Node(el);
  else return null;
  }
  if(k == 1){
    let newNode = new Node(el, head);
    newNode.next = head;
    head = newNode
    return newNode;
  }
  let temp = head , count = 0;
  while(temp !== null){
    count++
    if(count == k - 1){
     let node = new Node(el)
     node.next = temp.next;
     temp.next = node;
     return head;
    }
    temp = temp.next;
  }
  return head;
}

function insertBeforeValue(head , el ,value){
  if(head == null)return null;
  if(value == head.data){
    let newNode = new Node(el, head);
    newNode.next = head
    return newNode;
  }
  let temp = head;
  while(temp !== null){
    if(value == temp.next.data){
     let node = new Node(el)
     node.next = temp.next
     temp.next = node
     return head;
    }
    temp = temp.next;
  }
  return head;
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [12,6,8,9];
debugger
let head = linkedList(arr);
head = insertBeforeValue(head , 100 , 9);
print(head);
