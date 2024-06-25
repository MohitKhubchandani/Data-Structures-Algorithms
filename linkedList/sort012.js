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

function sort012(head){
  let count0 = 0 , count1 = 0, count2 = 0;
  let temp = head;
  while(temp != null){
    if(temp.data == 0)count0++;
    else if(temp.data == 1)count1++;
    else(count2++)
    temp = temp.next;
  }
  temp = head;
  while(temp != null){
    if(count0 != 0){
      temp.data = 0;
      count0--
    }else if(count1 != 0){
      temp.data = 1
      count1--
    }else{
      temp.data = 2;
    }
    temp = temp.next;
  }
  return head;
};

function Sort012(head){
  let count0 = new Node(-1) , count1 = new Node(-1) , count2 = new Node(-1);
  let zeroHead = count0 , oneHead = count1 , twoHead = count2;
  let temp = head;
  while(temp != null){
    if(temp.data == 0){
      count0.next = temp;
      count0 = temp;
    }else if(temp.data == 1){
      count1.next = temp;
      count1 = temp;
    }else{
      count2.next = temp;
      count2 = temp;
    }
    temp = temp.next;
  }
  count0.next = oneHead.next ? oneHead.next : twoHead.next;
  count1.next = twoHead.next;
  count2.next = null;
  
  return zeroHead.next;
}


let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
};

const arr =  [1,2,0,2,1,0,2,0,1];
let head = linkedList(arr);
head = Sort012(head);
print(head); // Output :- 0 0 0 1 1 1 2 2 2
