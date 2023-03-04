function repainting(input) {

let folio = Number(((input[0]) + 2) * 1.50);
let paint = Number((input[1] * 1.10) * 14.50);
let paintThinner = Number(input[2] * 5);
let bags = 0.40;
let materialPrices = folio + paint + paintThinner + bags;
let hoursNeeded = Number(input[3] * 0.30);
let totalSum = materialPrices + hoursNeeded;

console.log(totalSum);

}

repainting([5, 10, 10, 1]);