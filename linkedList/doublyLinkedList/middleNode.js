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

function middleNode(head){
 let slow = head;
 let fast = head;
 while(fast != null && fast.next != null){
  slow = slow.next;
  fast = fast.next.next;

 }
 return slow.data;
}

function print(head){
  console.log(head);
}


const arr = [1,2,3,4,5,6];
let head = DDlinkedList(arr);
head = middleNode(head)
print(head) // Output :- 4