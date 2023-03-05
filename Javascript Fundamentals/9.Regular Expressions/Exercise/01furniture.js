function furniture(furnitures) {
  const regExp = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/gm;
  let validFurnitures = '';
  let totalPrice = 0;

  for (const line of furnitures) {
    if (line === 'Purchase') {
      break;
    }
    validFurnitures += ' ' + line;
  }

  const matches = validFurnitures.matchAll(regExp);
  const result = [];

  for (const match of matches) {
    const item = match.groups.item;
    const price = Number(match.groups.price);
    const quantity = Number(match.groups.quantity);

    totalPrice += price * quantity;
    result.push(item);
  }

  console.log('Bought furniture:');
  result.forEach((el) => console.log(el));
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5']);
