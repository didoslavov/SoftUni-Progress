function wordsUppercase(string) {
    const pattern = /\w+/gm;

    const matches = string.match(pattern).map(word => word.toUpperCase());
    console.log(matches.join(', '));
}

wordsUppercase('Hi, how are you?');
console.log('--------------');
wordsUppercase('hello')