function listProcessor(input) {
    let result = [];
    const commands = {
        add(string) {
            result.push(string);
        },
        remove(string) {
            result = result.filter(w => w !== string);
        },
        print() {
            console.log(result.join(','));
        },
    }

    input.forEach(el => {
        const [command, string] = el.split(' ');
        
        commands[command](string);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])