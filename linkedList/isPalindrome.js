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

var reverseList = function(head) {
  if (head == null || head.next == null) return head;
    let temp = head;  
    let prev = null;  
    while (temp !== null) {  
        let front = temp.next;  
        temp.next = prev;  
        prev = temp;
        temp = front;  
    }
};

function isPalindrome(head){
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newhead = reverseList(slow.next);
  let first = head;
  let second = newhead;
 while(second != null){
  if(first.data != second.data){
    reverseList(newhead);
    return false
  }else{
    first = first.next;
    second = second.next;
  }
 }
 reverseList(newhead);
 return true;
}

let arr = [1,2,1];
let head = linkedList(arr);
console.log(isPalindrome(head)); // Output :- true


