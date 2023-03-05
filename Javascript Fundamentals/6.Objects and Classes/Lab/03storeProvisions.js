function storeProvisions(storeProducts, purchasedProducts) {
    const finalList = {};

    const storeLength = storeProducts.length;
    for (let i = 0; i < storeLength; i += 2) {
        const product = storeProducts[i];
        const quantity = Number(storeProducts[i+1]);
        finalList[product] = quantity;

        if (purchasedProducts[i] in finalList) {
            finalList[purchasedProducts[i]] += Number(purchasedProducts[i+1]); 
        } else {
            finalList[purchasedProducts[i]] = Number(purchasedProducts[i+1]);
        }
    }
    
    for (let [key, value] of Object.entries(finalList)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvisions(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
