function printCharacters(string) {
    const stringToPrint = [...string];

    stringToPrint.forEach(element => {
        console.log(element);
    });
}

printCharacters('AWord');