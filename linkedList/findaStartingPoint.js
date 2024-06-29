class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findaStartingPoint(head){
  let slow = head;
  let fast = head;
  while(slow != null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast){
      slow = head;
      while(slow != null){
        slow = slow.next;
        fast = fast.next;
        if(slow == fast)return slow.data
      }
    }
    }
    return null;
}


const head = new Node(1)
const second = new Node(2)
const third = new Node(3)
const fourth = new Node(4)
const fifth = new Node(5)
const sixth = new Node(6)

head.next = second;
second.next = third;
third.next = fourth
fourth.next = fifth;
fifth.next = sixth
sixth.next = third;

console.log(findaStartingPoint(head)); // Output :- 3
