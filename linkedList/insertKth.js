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

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = insertkth(head , 9 , 3);
print(head) // Output :- 12 5 9 8 7