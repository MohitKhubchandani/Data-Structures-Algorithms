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

function deleteHead(head){
  if(head == null || head.next == null) return null;
  let prev = head;
  head = head.next;
  prev.next = null;
  head.back = null;
  return head
};

function deleteTail(head){
  if(head == null || head.next == null) return null;
  let tail = head;
  while(tail != null){
    if(tail.next.next == null){
      tail.next = null
    }
    tail = tail.next
  }
  return head;
}

function deleteKth(head , k){
  if(head == null)return null; 
  let count = 0;
  let temp = head;
  while(temp != null){
    count++
    if(k == count)break
      temp = temp.next;
  }
  let prev = temp.back;
  let front = temp.next;
  if(prev == null && front == null)return null;
  else if(prev == null)return deleteHead(head)
  else if(front == null)return deleteTail(head)
  else{
    prev.next = front;
    front.back = prev;
    temp.next = null;
    temp.back = null;
  }
  return head
}

function deleteNode(temp){
  let prev = temp.back;
  let front = temp.next;
  if(front == null){
  prev.next = null;
  temp.back = null;
  return ;
  }
  prev.next = front;
  front.back = prev; 

  temp.next = temp.back = null;
  
return temp;
}

function insertBeforeHead(head , el){
  let node = new Node(el);
  head.back = node
  node.next = head;
  head = node;
  return head;
}

function insertBeforeTail(head , el){
  if (head.next == null) {
    return insertBeforeHead(head , el);
  }
  let tail = head;
  while(tail.next != null){
  tail = tail.next
  }
  let prev = tail.back;
  let node = new Node(el);
  node.next = tail;
  node.back = prev;
  prev.next = node;
  tail.back = node
    return head;
  }
 
  function insertBeforeKth(head , el , k){
   
    if(k == 1)return insertBeforeHead(head , el);
    let temp = head;
    let count = 0;
    while(temp != null){
      count++
      if(count == k)break;
      temp = temp.next;
    }
    let prev = temp.back;
    let node = new Node(el);
    node.next = temp;
    node.back = prev;
    prev.next = node;
    temp.back = node;
    return head;
  }

  function insertBeforeNode(node , el){
    let prev = node.back;
    let newNode = new Node(el);
    newNode.next = node;
    newNode.back = prev;
    prev.next = newNode;
    node.back = newNode;
  }

function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}


const arr = [12,5,6,8];
let head = DDlinkedList(arr);
insertBeforeNode(head.next , 100)
print(head) // Output :- 12 100 5 6 8