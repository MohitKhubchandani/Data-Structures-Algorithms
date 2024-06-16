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

function removeNthNode(head , n){
  let count = 0;
  let fast = head;
  let slow = head;
  while(fast.next != null){
    
    if(count >= n){
      slow = slow.next;
    }
    count++;
    fast = fast.next
  }
  if(count < n)return head.next;
  slow.next = slow.next.next;
  return head;
}


let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
};

const arr =  [1,2,3,4,5];
let head = linkedList(arr);
head = removeNthNode(head , 2);
print(head);
