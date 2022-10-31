function bonusPoints(input) {

    let startPoints = Number(input[0]);
    
    let bonus = 0;

    if (startPoints <= 100) {
        bonus = 5;
    }  else if ( startPoints > 1000) {
        bonus = startPoints * 0.10;
    } else {
        bonus = startPoints * 0.20;
    }

    if (startPoints % 2 === 0) {
        bonus = bonus + 1;
    } else if (startPoints % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(startPoints + bonus);
    
}

bonusPoints(["175"]);