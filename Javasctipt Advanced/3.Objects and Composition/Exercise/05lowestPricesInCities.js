function lowestPrices(input) {
  const lowestPrices = {};

  for (const townInfo of input) {
    let [town, product, price] = townInfo.split(' | ');
    price = Number(price);

    if (lowestPrices.hasOwnProperty(product)) {
      const currentPrice = lowestPrices[product]['price'];

      if (currentPrice > price) {
        lowestPrices[product] = { town, price };
      }
      continue;
    }

    lowestPrices[product] = { town, price };
  }

  for (const [product, values] of Object.entries(lowestPrices)) {
    console.log(`${product} -> ${values.price} (${values.town})`);
  }
}

lowestPrices([
  'Sofia City | Audi | 100000',
  'Sofia City | BMW | 100000',
  'Sofia City | Mitsubishi | 10000',
  'Sofia City | Mercedes | 10000',
  'Sofia City | NoOffenseToCarLovers | 0',
  'Mexico City | Audi | 1000',
  'Mexico City | BMW | 99999',
  'Mexico City | Mitsubishi | 10000',
  'New York City | Mitsubishi | 1000',
  'Washington City | Mercedes | 1000',
]);
