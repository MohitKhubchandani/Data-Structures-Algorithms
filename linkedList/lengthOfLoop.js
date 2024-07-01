class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Hashing Approach
function lengthOfLoop(head){
    let timer = 1;
    let map = new Map();
    let temp = head;
    while(temp != null){
      if(map.has(temp)){
        let value = map.get(temp)
        return timer - value;
      }else{
        map.set(temp , timer++)
        temp = temp.next
      }
    }
    return 0;
}

// Tortoise & hare technique
function lengthofLoop1(head){
  let slow = head;
  let fast = head;
  let counter = 0;
  while(fast != null || fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
   if(slow == fast){
      while(fast != null){
        counter++;
        fast = fast.next
        if(fast == slow)return counter;
      }
    }
    
  }
  return 0;
}

function lengthofLoop2(head){
  let slow = head;
  let fast = head;
  let counter = 0 ;
  while(fast != null || fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
   if(slow == fast)return findLength(slow , fast)
  }
  return 0;
}

function findLength(slow ,fast){
  let count = 1;
  fast = fast.next;
  while(slow != fast){
    count++;
    fast = fast.next
  }
  return count;
}

const head = new Node(1)
const second = new Node(2)
const third = new Node(3)
const fourth = new Node(4)
const fifth = new Node(5)
const sixth = new Node(6)
const seven = new Node(7)
const eight = new Node(8)
const nine = new Node(9)

head.next = second;
second.next = third;
third.next = fourth
fourth.next = fifth;
fifth.next = sixth
sixth.next = seven;
seven.next = eight;
eight.next = nine;
nine.next = third;
console.log(lengthofLoop2(head));
