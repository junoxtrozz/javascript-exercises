const repeatString = function(input, num) {
    if (num < 0)
    {
        return "ERROR"
    }
    else if (num === 0 )
    {
        return "";
    }
    else {
        let finalString = input;
        for(i = 1; i < num; i++) {
            finalString += input;
        }
    
        return finalString;
    }

}

module.exports = repeatString
