function pascalCaseSplitter(string) {
    const checkerString = string.toLowerCase();
    let printResult = '';
    const stringLength = string.length;

    for (let i = 0; i < stringLength; i++) {
        if (string[i] !== checkerString[i]) {
            printResult += ' ' + string[i];
        } else {
            printResult += checkerString[i]
        }
    }
    console.log(printResult.trim().split(' ').join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');