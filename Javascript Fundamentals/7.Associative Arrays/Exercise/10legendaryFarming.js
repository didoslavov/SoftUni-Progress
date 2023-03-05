function legendaryFarming(input) {
  const lines = [...input.split(' ')];
  const keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  const junkMaterials = {};
  const linesLength = lines.length;
  let legendaryWeapon = '';

  for (let i = 0; i < linesLength; i += 2) {
    const quantity = Number(lines[i]);
    const material = lines[i + 1].toLowerCase();

    addingMaterials(material, quantity);

    if (keyMaterials[material] >= 250) {
      const quantityLeft = keyMaterials[material] - 250;
      keyMaterials[material] = quantityLeft;
      legendaryWeapon = weaponForge(material);
      break;
    }
  }

  const sortedKeyMaterials = Object.entries(keyMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  const sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  print(legendaryWeapon, sortedKeyMaterials, sortedJunkMaterials);

  function addingMaterials(material, quantity) {
    switch (material) {
      case 'shards':
      case 'fragments':
      case 'motes':
        keyMaterials[material] += quantity;
        break;
      default:
        if (!junkMaterials.hasOwnProperty(material)) {
          junkMaterials[material] = quantity;
        } else {
          junkMaterials[material] += quantity;
        }
        break;
    }
  }

  function weaponForge(material) {
    switch (material) {
      case 'shards':
        return 'Shadowmourne';
      case 'fragments':
        return 'Valanyr';
      case 'motes':
        return 'Dragonwrath';
    }
  }

  function print(legendaryWeapon, keyMaterials, junkMaterials) {
    console.log(`${legendaryWeapon} obtained!`);

    keyMaterials.forEach((element) => {
      console.log(`${element[0]}: ${element[1]}`);
    });
    junkMaterials.forEach((element) => {
      console.log(`${element[0]}: ${element[1]}`);
    });
  }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
