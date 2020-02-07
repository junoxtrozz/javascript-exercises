const removeFromArray = function(arr, toRemoveOne, toRemoveTwo, toRemoveThree, toRemoveFour) {
    let myArr = arr;
    let removeIndex;
    let finalArr;
    for(i = 1; i < arguments.length; i++)
        {
            removeIndex = myArr.indexOf(arguments[i]);
            if(removeIndex != -1)
                {
                    finalArr = myArr.splice(removeIndex, 1);
                }
        }
    
    return myArr;

}

module.exports = removeFromArray
