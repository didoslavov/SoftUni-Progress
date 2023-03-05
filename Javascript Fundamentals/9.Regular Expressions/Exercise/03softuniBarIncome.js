function softuniBarIncome(input) {
  let line = input.shift();
  let totalIncome = 0;
  const regExp =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^0-9\|$%.]*(?<price>\d+\.?\d+)\$/;

  while (line !== 'end of shift') {
    let isValidLine = regExp.exec(line);
    if (!isValidLine) {
      line = input.shift();
      continue;
    }

    const name = isValidLine.groups.name;
    const product = isValidLine.groups.product;
    const quantity = Number(isValidLine.groups.quantity);
    const price = Number(isValidLine.groups.price);
    const totalProductPrice = quantity * price;

    console.log(`${name}: ${product} - ${totalProductPrice.toFixed(2)}`);
    totalIncome += totalProductPrice;

    line = input.shift();
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Maria%<Cola>|1|2.4$',
  '%Peter%<Gum>|1|1.3$',
  'end of shift',
]);
