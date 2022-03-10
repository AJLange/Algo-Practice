function reverseArr(arr)
{
    var temp = 0;
    var split = arr.length -1;
    for (var i = 0; i < arr.length/2 ; i++)
    {
        temp = arr[i];
        arr[i] = arr[split];
        arr[split] = temp;        
        split--;
        
    }
    return arr;
}

function rotateArr(arr, shiftBy)
{
    var steps;

    if (shiftBy > 0) {
        steps = shiftBy % arr.length;
    } else {
        steps = Math.abs(shiftBy) % arr.length;
    }
    var temp;
    if (shiftBy > 0)
    {
        for (var i = 0; i < steps; i++)
        {
            temp = arr[arr.length - 1];
            for (var j = arr.length - 2; j >=0; j--)
            {
                arr[j+1] = arr[j];
            }
            arr[0] = temp;
        }
    }
    else if (shiftBy < 0)
    {
        for (var i = 0; i < steps; i++)
        {
            temp = arr[0];
            for (var j = 1; j < arr.length; j++)
            {
                arr[j-1] = arr[j];
            }
            arr[arr.length - 1] = temp;
        }
    }

    return arr;
}

function filterRange(arr, min, max)
{
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < min || arr[i] > max) {

            for (var k = i+1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr.length--; 
            i--; 
        }
    return arr;
    }
}

function arrConcat(arr1, arr2)
{
    var newArray = [];
    var indexC = 0;

    for (var i = 0; i < arr1.length; i++)
    {
        newArray[indexC] = arr1[i];
        indexC++;

    }

    for (var i = 0; i < arr2.length; i++)
    {
        newArray[indexC] = arr2[i];
        indexC++;
    }

    return newArray;
}

console.log(rotateArr([1,2,3, 4, 5], 1));

console.log(rotateArr([1,2,3, 4, 5], -2));