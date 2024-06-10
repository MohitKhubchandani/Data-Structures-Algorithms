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


let deleteTail = function(head){
  if(head == null || head.next == null)return null;
  let temp = head;
  while(temp.next.next !== null){
    temp = temp.next;
  }
  temp.next = null;
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
head = deleteTail(head);
print(head) // Output :- 12 5 8