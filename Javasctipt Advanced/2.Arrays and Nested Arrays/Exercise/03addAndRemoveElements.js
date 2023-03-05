function addAndRemoveElements(input) {
    const result = [];
    let commandCounter = 0;
    const commands = {
        add: (arr, number) => arr.push(number),
        remove: (arr, number) => arr.pop(number),
    };

    for (const command of input) {
        commandCounter++;
        const currentNumber = commands[command](result, commandCounter)
    }
    return result.length >= 1 ? result.join('\n') : 'Empty';
}

console.log(addAndRemoveElements(['add', 
'add', 
'add', 
'add']));
console.log('-------------');
console.log(addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']));
console.log('-------------');
console.log(addAndRemoveElements(['remove', 
'remove', 
'remove']));