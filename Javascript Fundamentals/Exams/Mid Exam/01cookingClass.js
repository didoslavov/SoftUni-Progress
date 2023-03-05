function cookingClass(input) {
    let [budget, studentsCount, flourPrice, eggPrice, apronPrice] = input;
    let totalFlour = 0;
    let totalEggs = 0;
    let totalApron = 0;

    for (let i = 1; i <= studentsCount; i++) {
        totalEggs += 10;
        totalFlour++;
        totalApron++;
        if (i % 5 === 0) {
            totalFlour--;
        }
    }
    totalApron *= 1.2;

    let totalPrice = totalFlour * flourPrice + totalEggs * eggPrice + Math.ceil(totalApron) * apronPrice;
    
    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }
}

cookingClass([50, 2, 1.0, 0.1, 10.0]);
console.log('-----------');
cookingClass([100, 25, 4.0, 1.0, 6.0]);
console.log('--------------');
cookingClass([946, 20, 12.05, 0.42, 27.89]);
