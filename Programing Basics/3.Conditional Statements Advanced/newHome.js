function newHome(input) {

    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;

    switch (flowerType) {
        case "Roses":
            flowersPrice = flowersCount * 5;
            if (flowersCount > 80) {
                flowersPrice = flowersPrice * 0.90;
            }
            break;
        case "Dahlias":
            flowersPrice = flowersCount * 3.80;
            if (flowersCount > 90) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Tulips":
            flowersPrice = flowersCount * 2.80;
            if (flowersCount > 80) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Narcissus":
            flowersPrice = flowersCount * 3;
            if (flowersCount < 120) {
                flowersPrice = flowersPrice * 1.15;
            }
            break;
        case "Gladiolus":
            flowersPrice = flowersCount * 2.50;
            if (flowersCount < 80) {
                flowersPrice = flowersPrice * 1.20;
            }
            break;
    }

    if (budget >= flowersPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - flowersPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);
    }

}

newHome(["Roses",
"55",
"250"]);