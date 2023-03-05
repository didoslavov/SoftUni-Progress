function computerStore(partsInput) {
    let partPrice = partsInput.shift();
    let priceWithoutTaxes = 0;
    let totalPrice = 0;
    let taxes = 0;
    while (partPrice != 'regular' && partPrice != 'special') {
        if (Number(partPrice) < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes += Number(partPrice);
        }
        partPrice = partsInput.shift();
    }

    taxes = priceWithoutTaxes * 0.2;
    totalPrice = taxes + priceWithoutTaxes;

    if (partPrice == 'special') {
        totalPrice *= 0.9;
    }

    if (totalPrice == 0) {
        return 'Invalid order!';
    }

    return `Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`
}

console.log(
  computerStore([
    'regular'
  ])
);
