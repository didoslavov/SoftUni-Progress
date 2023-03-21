function adAstra(input) {
    const pattern = /([#]|[\|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]|[1-9]\d{1,3}|10000)\1/gm;
    const encryptedInput = input.shift();
    const result = [];
    let totalCalories = 0;

    let match = pattern.exec(encryptedInput);
    while (match) {
        const calories = Number(match.groups.calories);
        totalCalories += calories;
        result.push(match.groups);
        match = pattern.exec(encryptedInput);
    }
    
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    result.forEach(g => {
        console.log(`Item: ${g.item}, Best before: ${g.expDate}, Nutrition: ${g.calories}`);
    })
}

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);