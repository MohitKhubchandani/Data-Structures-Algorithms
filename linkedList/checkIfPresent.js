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
    if(temp.data == val)return "Present";
    temp = temp.next;
  }
  return -1
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = checkIfPresent(arr , 8);
console.log(head);// Output :- Present