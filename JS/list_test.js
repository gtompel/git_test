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
