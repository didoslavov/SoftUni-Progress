function bitcoinMining(gramsOfgold) {
  const bitcoinPrice = 11949.16;
  const goldPrice = 67.51;

  let goldMined = null;
  let firstBitcoinPurchaseDay = null;
  let shiftDay = null;
  let totalGoldPrice = null;
  let bitcoinPurchased = 0;
  let totalShifts = gramsOfgold.length;

  for (let i = 0; i < totalShifts; i++) {
    shiftDay = i + 1;
    if (shiftDay % 3 !== 0) {
      goldMined = gramsOfgold[i];
    } else {
      goldMined = gramsOfgold[i] * 0.7;
    }
    totalGoldPrice += goldMined * goldPrice;

    while (totalGoldPrice >= bitcoinPrice) {
      bitcoinPurchased++;
      if (bitcoinPurchased == 1) {
        firstBitcoinPurchaseDay = i + 1;
      }
      totalGoldPrice -= bitcoinPrice;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinPurchased}`);
  if (bitcoinPurchased !== 0) {
    console.log(
      `Day of the first purchased bitcoin: ${firstBitcoinPurchaseDay}`
    );
  }
  console.log(`Left money: ${totalGoldPrice.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
