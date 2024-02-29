class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Метод добавления элемента в список
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
  }

  // Метод вставки элемента в определенную позицию списка
  insert(position, data) {
    if (position < 0 || position > this.length) {
      throw new Error('Позиция вне диапазона');
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      prev.next = newNode;
    }

    this.length++;
  }

  // Метод поиска элемента по значению
  search(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }

    return null; // Элемент не найден
  }

  // Метод удаления элемента по значению
  remove(data) {
    if (this.head === null) {
      return null; // Список пуст
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    let current = this.head.next;
    let prev = this.head;

    while (current !== null) {
      if (current.data === data) {
        prev.next = current.next;
        this.length--;
        return true;
      }

      prev = current;
      current = current.next;
    }

    return false; // Элемент не найден
  }

  // Метод изменения элемента по значению
  update(data, newData) {
    let node = this.search(data);

    if (node !== null) {
      node.data = newData;
      return true;
    }

    return false; // Элемент не найден
  }

  // Метод определения длины списка
  getSize() {
    return this.length;
  }
}
// Примеры использования
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.getSize()); // 3

list.insert(1, 15);

console.log(list.search(20)); // Node { data: 20, next: Node { data: 30, next: null } }

list.remove(10);

console.log(list.getSize()); // 3

list.update(20, 25);

console.log(list.search(20)); // null
console.log(list.search(25)); // Node { data: 25, next: Node { data: 30, next: null } }