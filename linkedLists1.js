class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    //methods go here

    addFront(value) {
        var newNode = new SLLNode(value); 
        newNode.next = this.head; 
        this.head = newNode; 
        return this.head; 
                    }

    removeFront() {
        if (this.head == null) { // Edge case: If the list is empty, nothing to remove
            return this.head;
        }

        var removedNode = this.head; // Have a variable hold the node we'll remove
        this.head = removedNode.next; // Moves the head of the list to the 2nd node, which will become the new head when we're done
        removedNode.next = null;
        return this.head;
        
    }

    frontValue(){
    if (this.head == null) { //if this list is empty
        return null;
    } else { // List is not empty
        return this.head.value;
    }


    }

}


