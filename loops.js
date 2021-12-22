// please brother may I have some loops

function printOdds(a, b){
 // this function prints all odd numbers between a and b
 console.log(`Odd numbers between ${a} and ${b}`)
 for(a; a <= b; a++)
 {
    if(a % 2 != 0)
    console.log(a);
 }
}

function printMultiples(num){
//this function prints the descending multiples of a given value
console.log(`Multiples of ${num} descending`)
for(var a = 100; a > 0; a--){
    if(a % num === 0)
        console.log(a);
    }
}

function printSequence(){
    //this is printing a particular sequence
    console.log("Just a sequence")
    for(var a = 4; a > -4; a = a - 1.5){

            console.log(a);
        }
}

function sigma(a, b){
    //this function sums all the numbers between a and b
    console.log(`Sum of all integers between ${a} and ${b}`)
    var sum = 0;
    for(a; a <= b; a++){
        sum = sum +a;            
        }

        console.log(sum);
}

function factorial(num){
    //this function does a factorial of a given number
    console.log(`${num}!`)
    var facto= 1;
    for(var i = 1; i <= num; i++){
        facto  = facto * i;
        }

        console.log(facto);
}

printOdds(1,20);
printMultiples(3);
printSequence();
sigma(1,100);
factorial(12);