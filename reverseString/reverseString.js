const reverseString = function(input) {
    let stringArr = input.split("l");
    let reverseArr = stringArr.reverse();
    let reverseString = reverseArr.join('');
    return reverseString;
}

module.exports = reverseString
