function setSwap()
{
    var myNumber = 42;
    var myName = 'Amanda';
    var temp = myNumber;
    console.log(myName,myNumber);
    var myNumber = myName;
    var myName = temp;
    console.log(myName,myNumber);
}

function printFor(){
    for(i = -52; i <1067; i++){
        console.log(i)
    }
}

function beCheerful(){
    console.log("good morning!")
}

function multThree(){
    for(i = -300; i <=0; i = i+3){
        if ((i != -3) && (i != -6)){
        console.log(i)
        }
    }
}


function printInt(){
    var i = 2000;
    while(i<=5280){
        console.log(i);
        i++;
    }
}

function yourBirthday(num1,num2){
    var month= 7;
    var day = 20;
    if ((num1 == day) && (num2 == month))
    console.log("How did you know?");
    else
    if ((num1 == month) && (num2 == day))
    console.log("How did you know?");
    else
    console.log("just another day...");
}

function leapYear(year){
    if(year % 4 === 0 && year % 400 === 0){
        console.log("Leap Year!");
        return;
    }
    else
    if(year % 4 === 0 && year % 100 != 0){
        console.log("Leap Year!");
        return;
    }
    else{
        console.log("Not a leap year");
        return;
    }
}

function printAndCount(){
    var i = 512;
    var count = 0;
    while (i <=4096){
        if (i % 5 ===0){
        console.log(i);
        count++;
        }
        i++;
    }
    console.log("count: " + count);
}

function multiSix(){
    var i = 6;
    while (i <=60000){
        console.log(i);
        i = i +6;
    }
}

function thisisJustFizzBuzzAgain(){
    for (i= 1;i <=100 ;i++){
        if (i % 5 === 0){
            console.log("Coding");
            if (i % 10 ===0){
                console.log("Dojo");
            }
        }
        else
        console.log(i);
    }
}

function whatDoYouKnow(incoming){
    console.log(incoming);
    //is this a trick question lol?
}

function hugeNumber()
{
    var sum = 0;
    for(i = -299999; i < 300000; i = i+2){
        sum = sum + i;
    }
    console.log(sum);
    //adding all the negative numbers with the positive numbers on the same abs value
    //will obviously be 0 so I guess that's the 'shortcut' answer.
}

function countDown4(){
    var i = 2016;
    while (i>0){
        console.log(i);
        i--;
    }
}

function flexCount(lowNum,highNum,mult){
    var i = highNum;
    while (i>lowNum){
        console.log(i);
        i = i - mult;
    }
}

function finalCountdown(mult,lowNum,highNum,skippit){
    var i = highNum;
    while (i>lowNum){
        if(i % mult == 0 && i != skippit)
        {
            console.log(i);           
        }
        i--;
    }
}

setSwap();
printFor();
for(i = 0; i <99; i++){
    beCheerful();
}
multThree();
printInt();
yourBirthday(7,20);
yourBirthday(5,40);
yourBirthday(20,7);
yourBirthday(3,10);
leapYear(2001);
leapYear(2020);
leapYear(2000);
leapYear(2100);

thisisJustFizzBuzzAgain();

multiSix();
printAndCount();
whatDoYouKnow("variable");

hugeNumber();

countDown4();
flexCount(0,400,4);
flexCount(10,650,10);
finalCountdown(3,5,17,9);



