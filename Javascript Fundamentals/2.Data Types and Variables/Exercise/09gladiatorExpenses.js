function gladiatorExpensesCalculator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let isHelmetBroken = false;
    let isSwordBroken = false;
    let shieldBrokenCounter = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += shieldPrice;
            shieldBrokenCounter++;
        }
        if (shieldBrokenCounter % 2 === 0 && shieldBrokenCounter !== 0) {
            totalExpenses += armorPrice;
            shieldBrokenCounter = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpensesCalculator(23,
    12.50,
    21.50,
    40,
    200
    );