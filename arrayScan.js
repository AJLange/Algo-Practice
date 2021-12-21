// Print Array Min and Max
// Iterate through an array of integers and find the smallest and largest values in the array
// and print them

var arr = [6, 19, 2, 45, 10, 92, -3, 0]
function minAndMax(){
    var i;
    var minmaxarr = [];
    var min = arr[0];
    var max = arr[0];
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }

    minmaxarr.push(min);
    minmaxarr.push(max);

    console.log(minmaxarr);

    return minmaxarr;
}

// TEST
// EXPECTED OUTPUT: -3, 92
minAndMax();