class ListNode {
    constructor(value) {
      this.value = value;
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
  
    // Метод добавления элемента в конец списка
    append(value) {
      const newNode = new ListNode(value);
  
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    // Метод добавления элемента в определенную позицию списка
    insert(position, value) {
      if (position < 0 || position > this.length) {
        throw new Error('Позиция вне диапазона');
      }
  
      const newNode = new ListNode(value);
  
      if (position === 0) {
        if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
      } else if (position === this.length) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {
        let current = this.head;
        let index = 0;
  
        while (index < position) {
          current = current.next;
          index++;
        }
  
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
  
      this.length++;
    }
  
    // Метод удаления элемента из списка
    remove(value) {
      let current = this.head;
  
      while (current !== null) {
        if (current.value === value) {
          if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            this.head = current.next;
            this.head.prev = null;
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
  
          this.length--;
          return;
        }
  
        current = current.next;
      }
  
      throw new Error('Элемент не найден');
    }
  
    // Метод изменения элемента в списке
    update(position, value) {
      if (position < 0 || position >= this.length) {
        throw new Error('Позиция вне диапазона');
      }
  
      let current = this.head;
      let index = 0;
  
      while (index < position) {
        current = current.next;
        index++;
      }
  
      current.value = value;
    }
  
    // Метод поиска элемента в списке
    find(value) {
      let current = this.head;
  
      while (current !== null) {
        if (current.value === value) {
          return current;
        }
  
        current = current.next;
      }
  
      return null;
    }
  
    // Метод определения длины списка
    getLength() {
      return this.length;
    }
  }
  // Пример использования
  const myList = new DoublyLinkedList();

myList.append('A');
myList.append('B');
myList.append('C');

console.log(myList.getLength()); // Выведет: 3

myList.insert(1, 'D');

console.log(myList.find('B')); // Выведет: ListNode { value: 'B', prev: ListNode {...}, next: ListNode {...} }

myList.remove('B');

console.log(myList.getLength()); // Выведет: 3

myList.update(0, 'E');

console.log(myList.find('E').value); // Выведет: 'E'