//Write a function that is given an array and each time the value is "food" it should console log "yummy".
//If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    var found = false;
    for(var i =0; i < arr.length; i++)
    { 
        if(arr[i] == "food"){
            console.log("yummy");
            found = true;
        }
    }
    if (found == false) 
    console.log("I'm hungry");
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i =0; i < arr.length; i++)
    { 
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++)
    { 
        sum = sum + arr[i];
    }
    var average = sum/arr.length;
    //console.log(average);
    for(i = 0; i < arr.length; i++)
    { 
        if(arr[i] > average)
        count++;
    }

    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//Write a function that will reverse the values an array and return them.

function reverse(arr) {
    // your code here
    var numswaps = arr.length / 2;
    var temp;
    for(i = 0; i < numswaps; i++)
    { 
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Write a function that will return an array of Fibonacci numbers up to a given length n.
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var sumVals;
    for(i = 0; i < n-2; i++)
    // - 2 otherwise it pops on 2 extra vals
    { 
        sumVals = fibArr[i] + fibArr[i + 1];
        fibArr.push(sumVals);
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]