class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


function mergeDoublyLinkedLists(PA, PB, PC) {
    if (!PA || !PB || !PC) return null;
    
    let firstA = PA; 
    let lastA = PB;  
    
    let afterPC = PC.next; 
    
    
    PC.next = firstA;
    firstA.prev = PC;
    
    
    if (afterPC) {
        lastA.next = afterPC;
        afterPC.prev = lastA;
    } else {
        lastA.next = null; 
    }
    
    
    let newHead = PC;
    while (newHead.prev) {
        newHead = newHead.prev;
    }
    
    let newTail = lastA;
    while (newTail.next) {
        newTail = newTail.next;
    }
        
    
    console.log("Перший елемент об'єднаного списку:", newHead.value);
    console.log("Останній елемент об'єднаного списку:", newTail.value);

    return { newHead, newTail };
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
node4.next = node5;
node5.prev = node4;
node5.next = node6;
node6.prev = node5;

let { newHead, newTail } = mergeDoublyLinkedLists(node1, node3, node5);


let current = newHead;
while (current) {
    console.log(current.value);
    current = current.next;
}
