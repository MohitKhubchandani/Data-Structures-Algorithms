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

const arr = [12,5,8,7]
let head = linkedList(arr);
head = insertBeforeValue(head ,2 ,5);
print(head) // Output :- 12 2 5 8 7