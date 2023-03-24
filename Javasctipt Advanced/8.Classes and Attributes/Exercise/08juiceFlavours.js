function juiceFlavours(input) {
  const flavours = {};
  const bottles = new Map();

  input.forEach((flavour) => {
    const [fruit, qty] = flavour.split(' => ');

    if (!flavours.hasOwnProperty(fruit)) {
      flavours[fruit] = Number(qty);
    } else {
      flavours[fruit] += Number(qty);
    }

    while (flavours[fruit] >= 1000) {
      const currentBottles = Math.floor(flavours[fruit] / 1000);
      flavours[fruit] -= currentBottles * 1000;

      if (!bottles.has(fruit)) {
        bottles.set(fruit, currentBottles);
      } else {
        const availableBottles = bottles.get(fruit) + currentBottles;
        bottles.set(fruit, availableBottles);
      }
    }
  });

  [...bottles.entries()].forEach((flavour) => {
    const [fruit, bottles] = flavour;
    console.log(`${fruit} => ${bottles}`);
  });
}

juiceFlavours([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
