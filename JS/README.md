

    Пример использования LinkedList
    const list = new List();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    console.log(list.length()); // 3

    list.delete(2);
    console.log(list.length()); // 2
    
    list.update(0, 10);
    console.log(list.find(10)); // 0

    Пример использования DoubleLinkedList
    const list = new DoublyLinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    console.log(list.find(2));
    console.log(list.delete(2));

    console.log(list.update(1, 100));
    console.log(list.getLength());