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

    

    frontValue(){
    if (this.head == null) { //if this list is empty
        return null;
    } else { // List is not empty
        return this.head.value;
    }
}


}