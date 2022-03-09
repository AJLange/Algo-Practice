function minToFront(arr){

    var lowestVal = arr[0], lowestInd = 0

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] < lowestVal)
        {
            lowestVal = arr[i];
            lowestInd = i;
        }
    }

    for (var i = lowestInd; i > 0; i--)
    {
        arr[i] = arr[i-1];
    }

    arr[0] = lowestVal;
    return arr;

}

console.log(minToFront([4,2,3,6,1]));

console.log(minToFront([4,2,1,5,3]));

console.log(minToFront([4,6,2,5,3]));