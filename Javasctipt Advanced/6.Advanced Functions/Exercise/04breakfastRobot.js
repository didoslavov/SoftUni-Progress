function solution() {
    const ingredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        prepare(recipe, qty) {
            const usedIngredients = {};

            for (const ingredient in this[recipe]) {
                if (this[recipe][ingredient] * Number(qty) > ingredients[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`;
                }
                usedIngredients[ingredient] = ingredients[ingredient] - (this[recipe][ingredient] * Number(qty));
            }

            Object.assign(ingredients, usedIngredients);
            return 'Success';
        },
        restock(el, qty) {
            ingredients[el] += Number(qty);
            return 'Success';
        },
        report() {
            const reported = [];

            for (const microelement in ingredients) {
                reported.push(`${microelement}=${ingredients[microelement]}`);
            }

            return reported.join(' ');
        }
    };

    return function commandsHandler(line) {
        const [command, el, qty] = line.split(' ');

        switch (command) {
            case 'restock': return recipes[command](el, qty);
            case 'prepare': return recipes[command](el, qty);
            case 'report': return recipes[command]();
        }
    }
}

let manager = solution ();
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));