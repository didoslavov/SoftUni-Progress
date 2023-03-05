function listOfNames(names) {
    const result = [];

    names.sort((a,b) => a.localeCompare(b)).forEach((name, i) => {
        result.push(`${i+1}.${name}`);
    });

    return result.join('\n')
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));