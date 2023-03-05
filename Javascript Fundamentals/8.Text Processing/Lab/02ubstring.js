function substring(string, startingIndex, count) {
    const endIndex = startingIndex + count;
    const printString = string.substring(startingIndex, endIndex);

    console.log(printString);
}

substring('ASentence', 1, 8);