function stringLength(firstString, secondString, lastString) {
    const strings = [firstString, secondString, lastString];
    const sumOfLengths = strings.reduce((acc, string) => acc + string.length, 0);
    console.log(sumOfLengths);
    console.log(Math.floor(sumOfLengths / strings.length));
}

stringLength('chocolate', 'ice cream', 'cake');
console.log('-------');
stringLength('pasta', '5', '22.3');