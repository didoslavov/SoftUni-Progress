function printReciept(input) {
  let data = input.shift();
  let priceWithoutTaxes = 0;
  let taxes = 0;

  while (data != 'special' && data != 'regular') {
    if (Number(data) >= 0) {
      priceWithoutTaxes += Number(data);
    } else {
      console.log('Invalid price!');
    }
    data = input.shift();
  }

  taxes = priceWithoutTaxes * 0.2;
  let totalPrice = priceWithoutTaxes + taxes;

  if (data == 'special') {
    totalPrice *= 0.9;
  }

  if (totalPrice == 0) {
    console.log('Invalid order!');
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

printReciept(['regular']);
