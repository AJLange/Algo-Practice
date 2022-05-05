
function isCreditCard(digitArr)
{
    //this should see if a number is a valid credit card

    if(digitArr.length < 13 || digitArr.length > 16)
    {
        //not the right length? not useful
        console.log("Number too short");
        return false;
    }

    //store the last digit
    var digiLast = digitArr.pop();
    //just for easier array
    var sum = 0;
    var multi = 0;
    
    for (i = digitArr.length-1; i >=0; i = i -2)
    {
        multi = digitArr[i] *2;
        if (multi > 9 )
        {
            multi = multi - 9;
        }
        sum = sum + multi;
    }
    digitArr.pop();
    for (i = digitArr.length-1; i >=0; i = i -2)
    {
        sum = sum + digitArr[i];
    }


    if ((digiLast + sum) % 10 == 0)
    {
        console.log("It's a credit card");
        return true;
    }
    else
    {
        console.log("Not a credit card");
        return false;
        
    }
}

isCreditCard([6,7,8]);
isCreditCard([1,2,3,4,5,6,7,1,2,3,4,5,6,7]);
isCreditCard([5,2,2,8,2]);