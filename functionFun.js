// complete the following function:

// given an array of integers, return the average value of all numbers in the array
// test to make sure anything involved is a good number.
function average(numbers) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < numbers.length; i++)
    {        
        if (typeof(numbers[i]) === 'number')
        {
            sum = sum + numbers[i];
            count++;
        }            
    }

    return sum/count;
}

// TEST - All numbers
console.log(average([1,2,4,5]));
// expected result: 3
// TEST - Ninja Bonus
// isNaN();
console.log(average([3,4,"Dojo", false, 8]));
// expected result: 5