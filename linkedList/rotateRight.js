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

function findLength(tail){
  len = 1;
  while(tail.next !== null){
    head = head.next;
    tail = tail.next;
    len++
  }
  return [len,tail];
}

function rotateRight(head , k){
  let temp = head;
  let counter = 0;
  let [len, tail] = findLength(temp)
  if(k % len == 0)return head; 
  tail.next = head;
  let equal = k % len 
  while(temp !== null){
    if(counter == equal){
      head = temp.next;
      temp.next = null
      break;
    }else{
      temp = temp.next;
      counter++;
    }
  }
  return head;
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [1,2,3,4,5];
let head = linkedList(arr);
head = rotateRight(head , 2);
print(head); // Output :- 4 5 1 2 3
