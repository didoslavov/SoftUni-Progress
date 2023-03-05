function countStrings(string, word) {
    const strings = string.split(' ');
    let counter = 0;

    for (const string of strings) {
        if (string === word) {
            counter++;
        }
    }

    console.log(counter);
}

countStrings('This is a word and it also is a sentence',
'is');