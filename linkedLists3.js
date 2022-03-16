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
}





sll1 = new LinkedList();

node1 = new Node(8);
node2 = new Node(5);

sll1.head = node1;
node1.next = node2;

//interating - variations

for(let i = 1; i <=5; i++){
    //some other stuff
}

let i = 1;
while(i <= 5){
    //do whatever stuff
    i++;
}

let runner = this.head;
while (runner != null){ //make sure it's not null or the list is over
    //do whatever stuff
    runner = runner.next; //moving to the next node in the line
}