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


function insertHead(head, el) {
  let newNode = new Node(el);
  newNode.next = head;
  return newNode;
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = insertHead(head , 20);
print(head) // Output :- 20 12 5 8 7