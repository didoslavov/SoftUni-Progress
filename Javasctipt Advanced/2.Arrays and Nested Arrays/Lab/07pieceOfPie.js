function pieceOfPie(flavors, startingFlavor, endingFlavor) {
    const firstIndex = Math.min(flavors.indexOf(startingFlavor), flavors.indexOf(endingFlavor));
    const endIndex = Math.max(flavors.indexOf(startingFlavor), flavors.indexOf(endingFlavor)) + 1;
    const pies = flavors.slice(0);

    return pies.slice(firstIndex, endIndex)
}

console.log(pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log('--------------');
console.log(pieceOfPie(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));