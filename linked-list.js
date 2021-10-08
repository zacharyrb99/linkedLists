/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    let currNode = this.head;
    let count = 0;

    while (currNode !== null && count !== idx) {
      count++;
      currNode = currNode.next;
    }

    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    let currNode = this.getNode(idx);
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prevNode = this.getNode(idx - 1);

    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    // Remove first node (head)
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prevNode = this.getNode(idx - 1);

    // remove last node (tail)
    if (idx === this.length - 1) {
      let val = prevNode.next.val;
      prevNode.next = null;
      this.tail = prevNode;
      this.length --;
      return val;
    }

    let val = prevNode.next.val;
    prevNode.next = prevNode.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let currNode = this.head;

    while (currNode) {
      total += currNode.val;
      currNode = currNode.next;
    }

    return total / this.length;
  }

  getNode(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    let currNode = this.head;
    let count = 0;

    while (currNode !== null && count !== idx) {
      count++;
      currNode = currNode.next;
    }

    return currNode;
  }
}

module.exports = LinkedList;
