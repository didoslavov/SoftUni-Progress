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
        const add = commands['add'];
        const remove = commands['remove'];
        const print = commands['print'];

        switch (command) {
            case 'add': add(string); break;
            case 'remove': remove(string); break;
            case 'print': print(); break;
        };
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])