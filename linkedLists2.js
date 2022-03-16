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
    length(){
        if(this.head == null){
            return 0;
        }
        let runner = this.head;
        let count = 0;
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }

    display(){
        if(this.head == null){
            return 0;
        }
        let runner = this.head;
        var listString = String(runner.value);
        while (runner != null){ //make sure it's not null or the list is over   

        runner = runner.next; //moving to the next node in the line
        if (runner != null) //if it's null the list is over otherwise add it to this string
        {
        listString = listString + " " + String(runner.value);
        }
    }
    console.log(listString);
    return listString;
    }
}





sll1 = new LinkedList();

node1 = new Node(8);
node2 = new Node(5);
node3 = new Node(6);

sll1.head = node1;
node1.next = node2;
node2.next = node3;

sll1.display();


