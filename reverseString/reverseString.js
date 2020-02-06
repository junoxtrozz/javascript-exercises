const reverseString = function(input) {
    let stringArr = input.split("");
    let reverseArr = stringArr.reverse();
    let reverseString = reverseArr.join('');
    return reverseString;
}

module.exports = reverseString
