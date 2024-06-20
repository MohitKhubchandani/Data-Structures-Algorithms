class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to create a linked list from an array
let linkedList = function(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
};

// Function to find the middle node of the linked list
function middleNode(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Function to merge two sorted linked lists
function merge(left, right) {
  if (!left) return right;
  if (!right) return left;

  if (left.data < right.data) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}

// Function to sort the linked list using merge sort
function sortLL(head) {
  if (head == null || head.next == null) return head;
  let mid = middleNode(head);
  let leftHead = head, rightHead = mid.next;
  mid.next = null;
  leftHead = sortLL(leftHead);
  rightHead = sortLL(rightHead);
  return merge(leftHead, rightHead);
}

// Function to print the linked list
let print = function(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
};

// Test the implementation
const arr = [4, 3, 2, 1];
let head = linkedList(arr);
head = sortLL(head);
print(head); // Output :- 1 2 3 4
