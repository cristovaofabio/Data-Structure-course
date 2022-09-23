class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let pre = current;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    return currentHead;
  }

  // traverse() {
  //   let current = this.head;

  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }

  //   return "";
  // }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("How");
list.push("are");
list.push("you?");
// console.log(list.pop());
// console.log(list.push("YOU"));
// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);
console.log(list.shift());
console.log(list);
