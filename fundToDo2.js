

function countDown(num){
    var newArray = [];
    for(i = num; i >= 0; i--){
        newArray.push(i);
    }
    return newArray;
}

//array length is num +1

function printReturn(arr){
    console.log(arr[0]);
    return arr[1];
}

function firstPlusLength(arr) {
    var val = arr[0] + arr.length;
    return val;
}

function valsGreaterThan2nd(arr) {
    var total = 0;
    if (arr.length > 1){
        for (i = 0; i <arr.length; i ++)
        {
            if (arr[i] > arr[1]){
                console.log(arr[i]);
                total ++;
            }
        }
        console.log(total);
    }
    else {
        console.log("Array too short - returning 0");
    }
    
    return total;
}

function thisThat(num1,num2){
    var arr = [];
    if (num1 == num2)
        console.log("Jinx!")

    for (i = 0; i < num1; i++)
    {
        arr[i] = num2;
    }
    return arr;
}



console.log(countDown(4));
console.log(firstPlusLength([1,2,3]));
console.log(firstPlusLength(["what?",2,3,4]));


valsGreaterThan2nd([1,3,5,7,9,13]);
valsGreaterThan2nd([1]);

valsGreaterThan2nd([4,6,7,1,8]);

console.log(thisThat(2,2));
console.log(thisThat(5,3));

