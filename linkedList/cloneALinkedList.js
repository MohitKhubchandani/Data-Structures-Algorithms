class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function cloneALinkedlist(head){
  let temp = head;
  let copyNode;
  while(temp !== null){
    copyNode = new Node(temp.data);
    copyNode.next = temp.next
    temp.next = copyNode;
    temp = temp.next.next;
  }
  temp = head;
  while(temp !== null){
    copyNode = temp.next;
    if(temp.random !== null){
    copyNode.random = temp.random.next;
    temp = temp.next.next;
    }else{
      copyNode.random = null;
      temp = temp.next.next;
    }
  }
  let dummyNode = new Node(-1);
  let res = dummyNode;
  temp = head;
  while(temp !== null){
    res.next = temp.next
    temp.next = temp.next.next;
    res = res.next;
    temp = temp.next; 
  }
  return dummyNode.next;
};

let head = new Node(1)
let second = new Node(2)
let third = new Node(3)
let fourth = new Node(4)
let fifth = new Node(5)

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

head.random = null;
second.random = head;
third.random = fifth;
fourth.random = second;
fifth.random = fourth;

let Output = cloneALinkedlist(head);
function print(head){
  while(head !== null){
    console.log(head.data);
    head = head.next;
  }
  return head;
}

print(Output) // Output :- 1 2 3 4 5