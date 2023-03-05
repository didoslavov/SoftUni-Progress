function printAnArrayWithGivenDelimiter(strings, delimiter) {
    return strings.join(delimiter);
}

console.log(printAnArrayWithGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'));
console.log('--------------');
console.log(printAnArrayWithGivenDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'));