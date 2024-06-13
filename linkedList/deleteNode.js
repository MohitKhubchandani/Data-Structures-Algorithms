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

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = deleteNode(head , 5);
print(head) // Output :- 12 8 7