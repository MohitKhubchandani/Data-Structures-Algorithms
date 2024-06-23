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


var addTwoNumbers = function(l1, l2) {
  let temp1 = l1, temp2 = l2;
  let dummyNode = new Node(-1);
  let current = dummyNode;
  let carry = 0;
  
  while (temp1 !== null || temp2 !== null) {
      let sum = carry;
      if (temp1) {
          sum += temp1.data;
          temp1 = temp1.next;
      }
      if (temp2) {
          sum += temp2.data;
          temp2 = temp2.next;
      }
      carry = Math.floor(sum / 10);
      let newNode = new Node(sum % 10);
      current.next = newNode;
      current = current.next;
  }
  
  if (carry > 0) {
      current.next = new Node(carry);
  }
  
  return dummyNode.next;
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
};

debugger
const l1 = [2,4,3];
const l2 = [5,6,4];
let list1 = linkedList(l1);
let list2 = linkedList(l2);
head = addTwoNumbers(list1 , list2);
print(head);
