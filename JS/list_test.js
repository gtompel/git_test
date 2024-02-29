class List {
    constructor() {
    this.elements = [];
    }
    
    insert(element) {
    this.elements.push(element);
    }
    
    find(element) {
    return this.elements.indexOf(element);
    }
    
    delete(element) {
    const index = this.find(element);
    if (index !== -1) {
    this.elements.splice(index, 1);
    }
    }
    
    update(index, newElement) {
    if (index >= 0 && index < this.elements.length) {
    this.elements[index] = newElement;
    }
    }
    
    length() {
    return this.elements.length;
    }
    }
    
    // Пример использования
    const list = new List();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    console.log(list.length()); // 3
    
    list.delete(2);
    console.log(list.length()); // 2
    
    list.update(0, 10);
    console.log(list.find(10)); // 0