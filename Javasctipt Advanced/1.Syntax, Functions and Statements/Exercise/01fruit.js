function fruit(fruit, weight, price) {
    const weightKG = weight / 1000;
    const moneyNeeded = weightKG * price;
   
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
console.log('------------');
fruit('apple', 1563, 2.35);