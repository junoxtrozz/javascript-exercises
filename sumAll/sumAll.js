const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if((numOne > 0 && numTwo > 0) && (Number.isInteger(numOne) && Number.isInteger(numTwo)))
    {
        if(numOne < numTwo)
        {
            for(let i = numOne; i <= numTwo; i++)
            {
                sum += i;
            }
        }
        else if(numOne > numTwo)
        {
            for(let i = numOne; i >= numTwo; i--)
            {
                sum += i;
            }       
        }
    } else {
        return "ERROR";
    }
    

    return sum;

}

module.exports = sumAll
