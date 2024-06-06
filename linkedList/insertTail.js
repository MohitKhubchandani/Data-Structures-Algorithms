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
let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = insertTail(head , 10);
print(head) // Output :- 12 5 8 7 10