class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

  
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result.trim());
    }

  
    insertBeforePositive() {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data > 0) {
                const newNode = new Node(25);
                if (prev === null) {
                    newNode.next = this.head;
                    this.head = newNode;
                } else {
                    newNode.next = current;
                    prev.next = newNode;
                }
                prev = newNode; 
            }
            prev = current;
            current = current.next;
        }
    }

    
    removeNegatives() {
        while (this.head && this.head.data < 0) {
            this.head = this.head.next;
        }

        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data < 0) {
                prev.next = current.next;
            } else {
                prev = current;
            }
            current = current.next;
        }
    }
}

    const list = new LinkedList();
    let inputData = [5, -3, 10, -1, 15, 0, -7, 20];
    
    inputData.forEach(num => list.add(num));

    console.log("Початковий список:");
    list.printList();

    list.insertBeforePositive();
    console.log("Після вставки 25 перед додатними числами:");
    list.printList();

    list.removeNegatives();
    console.log("Після видалення від’ємних чисел:");
    list.printList();

