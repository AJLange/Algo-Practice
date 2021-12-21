// fizzbuzz
// write code that will go through each number from 1 - 100 and
// on multiples of 3, print fizz
// on multiples of 5, print buzz
// on both, fizz buzz
// favorite of interviewers and such

function FizzBuzz()
{
    var i;
    for(i = 1; i <=100; i++)
    {
        if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); 
    }
        else if(i % 5 === 0)
        {
        console.log("Buzz");
        }
        else if(i % 3  === 0)
        {
        console.log("Fizz");
        }
        
        else
        console.log(i);
    }

}

FizzBuzz();