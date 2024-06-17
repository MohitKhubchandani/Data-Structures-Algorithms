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

let lengthOfLL = function(arr){
  let head = linkedList(arr);
  let temp = head;
  let ans = 0;
  while(temp){
      temp = temp.next
      ans++
  }
  return ans
}

const arr = [12,5,8,7]
let head = linkedList(arr);
head = lengthOfLL(arr);
console.log(head);// Output :- 4