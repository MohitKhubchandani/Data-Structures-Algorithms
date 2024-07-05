class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
    this.back = null;
  }
}

function DDlinkedList(arr){
  let head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    temp.back = prev;
    prev.next = temp;
    prev = temp
  }
  return head
}

function reverse(head){
  if(head == null || head.next == null)return head; 
  let current = head;
  let prev = null;
  while(current != null){
    prev = current.back;
    current.back = current.next;
    current.next = prev;
    current = current.back  
  }
  head = prev.back;
  return head;
}

var reverseList = function(head) {
  if (head == null || head.next == null) return head;
  
  let newhead = reverseList(head.next);
  
  let front = head.next;
  front.next = head;       
  head.back = front;       
  head.next = null;        
  
  return newhead;          
};

function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}


const arr = [1,2,3];
let head = DDlinkedList(arr);
head = reverseList(head)
print(head) // Output :- 3 2 1