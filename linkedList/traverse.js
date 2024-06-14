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

let traverse = function(head){
  let temp = head;
  while(temp){
    console.log(temp.data);
    temp = temp.next;
  }
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = traverse(head);// Output :- 12 5 8 7