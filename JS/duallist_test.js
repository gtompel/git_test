class Node {
    constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
    }
    }
    
    class DoublyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }
    
    insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    }
    this.length++;
    }
    
    find(data) {
    let current = this.head;
    while (current) {
    if (current.data === data) {
    return current;
    }
    current = current.next;
    }
    return null;
    }
    
    delete(data) {
    let current = this.find(data);
    if (!current) {
    return false;
    }
    if (current === this.head) {
    this.head = current.next;
    if (this.head) {
    this.head.prev = null;
    }
    } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
    } else {
    current.prev.next = current.next;
    current.next.prev = current.prev;
    }
    this.length--;
    return true;
    }

    update(oldData, newData) {
    let node = this.find(oldData);
    if (node) {
    node.data = newData;
    return true;
    }
    return false;
    }

    getLength() {
    return this.length;
    }
    }
