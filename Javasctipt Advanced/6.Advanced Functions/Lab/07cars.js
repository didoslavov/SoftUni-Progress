function cars(input) {
    const result = carFactory();
    
    input.forEach(el => {
        if (el.includes('create') && el.includes('inherit')) {
            const [_, name, command, parent] = el.split(' ');
            result[command](name, parent);
        } else if (el.includes('create')) {
            const [command, name] = el.split(' ');
            result[command](name);
        } else if (el.includes('set')) {
            const [command, name, key, value] = el.split(' ');
            result[command](name, key, value);
        } else {
            const [command, name] = el.split(' ');
            result[command](name);
        }
    });
    
    
    function carFactory() {
        const cars = {
            create(name) {
                cars[name] = {};
            },
            inherit(name, parent) {
                cars[name] = Object.create(cars[parent]);
            },
            set(name, key, value) {
                cars[name][key] = value; 
            },
            print(name) {
                const res = [];

                for (const key in cars[name]) {
                    res.push(`${key}:${cars[name][key]}`)
                }

                console.log(res.join(','));
            }
        }
        
        return cars;
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);


