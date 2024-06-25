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

function evenAndOdd(head){
  let odd = head;
  let even = head.next;
  let evenhead = head.next;
  while(even !== null && even.next !== null){
   let pointer1 = odd.next.next;
   odd.next = pointer1;
   odd = pointer1;
   
   let pointer2 = even.next.next;
   even.next = pointer2;
   even = pointer2;
   
  }
  odd.next = evenhead;
  return head
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr =  [2,1,3,5,6,4,7]
let head = linkedList(arr);
head = evenAndOdd(head);
print(head);
