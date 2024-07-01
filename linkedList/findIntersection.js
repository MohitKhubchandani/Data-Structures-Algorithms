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

function findIntersection(head1, head2){
  let temp = head1;
  let map = new Map();
  while (temp != null) {
    map.set(temp ,true)
    temp = temp.next;
  }
  temp = head2;
  while(temp != null){
    if(map.has(temp))return `Intersected at ${temp.data} Node`;
    temp = temp.next
  }
  return null 
}

function findIntersection1(headOne, headTwo){
  let tempOne = headOne , tempTwo = headTwo;
  if(tempOne == null || tempTwo == null)return null;
   while(tempOne !== tempTwo){
   
     tempOne = tempOne.next
     tempTwo = tempTwo.next;
     if(tempOne == null)tempOne = headTwo;
     if(tempTwo == null)tempTwo = headOne;
    
   }
   return headOne.data;
}

let print = function(head , head1){
  while(head != null){
    console.log(head.data , head1.data);
    head = head.next;
    head1 = head1.next
  }
}

const head = new Node(1)
const second = new Node(2)
const third = new Node(3)
const fourth = new Node(8)
const fifth = new Node(9)
const sixth = new Node(10)


head.next = second;
second.next = third;
third.next = fourth
fourth.next = fifth;
fifth.next = sixth;
sixth.next = null;

const head1 = new Node(1)
const second1 = new Node(2)
const third1 = new Node(3)

head1.next = second1;
second1.next = third1;
third1.next = fourth;
debugger
console.log(findIntersection1(head , head1)); 
