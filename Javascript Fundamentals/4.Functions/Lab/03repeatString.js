function repeatString(string, counter) {
    let repeatedString = '';

    for (let i = 0; i < counter; i++) {
        repeatedString += string;
    }
    
    return repeatedString;
}

repeatString('abc', 3)