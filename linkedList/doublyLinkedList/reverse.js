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
  front.next = head;       // Reverse the next pointer
  head.back = front;       // Update the back pointer
  head.next = null;        // Set the current node's next to null to terminate the list
  
  return newhead;          // Return the new head of the reversed list
};

function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

debugger
const arr = [1,2,3];
let head = DDlinkedList(arr);
head = reverseList(head)
print(head)