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

function deleteAllOccurrences(head , key){
  let temp = head;
  let prev = null;
  let next = temp.next;
  while(temp !== null){
    if(head.data == key){
      head = head.next;
      head.back = null;
      temp = head;
      prev = temp;
    }else if(temp.data == key){
      prev.next = temp.next
      temp = temp.next;
      temp.back = prev
    }else{
      prev = temp
      temp = temp.next;
    }
  }
  return head;
}

function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}


const arr = [1,1,1,1,2,3,4,1,5];
let head = DDlinkedList(arr);
head = deleteAllOccurrences(head , 1)
print(head) // Output :- 2 3 4 5