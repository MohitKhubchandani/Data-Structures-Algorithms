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
};

function findAllPairsOfSum(head , sum){
  let temp1 = head;
  let temp2 = head.next;
  let array = [];
  while(temp1.next !== null){
    if((temp1.data + temp2.data) == sum){
      array.push(temp1.data)
      array.push(temp2.data)
      temp2 = temp2.next
    }else if(temp2.next == null){
      temp1 = temp1.next;
      temp2 = temp1.next;
    }else{
      temp2 = temp2.next;
    }
  }
  return array;
}


function Tail(head){
  if(head == null || head.next == null) return null;
  let tail = head;
  while(tail.next != null){
    tail = tail.next
  }
  return tail;
}


function findAllPairsOfSum1(head , sum){
  let left = head;
  let right = Tail(head)
  let array = [];
  while(left.data < right.data){
    if((left.data + right.data) == sum){
      array.push(left.data);
      array.push(right.data);
      left = left.next;
      right = right.back;
    }else{
      right = right.back;
    }
  }
  return array;
}


function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

debugger
const arr = [1,2,3,4,5,6,7,8,9];
let head = DDlinkedList(arr);
head = findAllPairsOfSum1(head ,3 )
console.log(head);