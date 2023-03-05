function wordOccurrences(words) {
    const wordsList = {};
    let counter = 1;

    for (const word of words) {
        if (!wordsList.hasOwnProperty(word)) {
            wordsList[word] = counter;
        } else {
            wordsList[word] += counter;
        }
    }

    const sortedList = Object.entries(wordsList).sort((a,b) => b[1] - a[1]);

    sortedList.forEach((word) => console.log(`${word[0]} -> ${word[1]} times`));
}

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
