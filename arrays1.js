function pushToFront(arr, val){

    var temp1 = arr[0]
    var temp2 = arr[1]

    for (var i = 0; i < arr.length && temp1 != undefined; i++)
    {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[1+2];

    }
    arr[0] = val;

}


function popFront()
{
    var val = arr[0];
    for (var i = 1; i < arr.length; i++)
    {
        arr[i-1] = arr[i];
    }
    
    arr.pop();
    return val;

}

function insertAt(arr, index, val)
{

    var temp1= 0;
    for (var i = arr.length - 1; i >= index; i--)
    {
        arr[i+1] = arr[i];
    }
    arr[index] = val;
}

function removeAt(arr, index)
{
    index = Math.floor(index);
    if (index >= arr.length || index <0)
    {
        return null;
    }
    var returnValue = arr[index];

    for(var i = index + 1; i < arr.length; i++){
        arr[i-1] = arr[i];

    }

    arr.pop();
    return returnValue;

}