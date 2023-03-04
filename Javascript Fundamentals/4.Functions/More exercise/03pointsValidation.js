function pointsValidation(coordinates) {
    const x1 = coordinates.shift();
    const y1 = coordinates.shift();
    const x2 = coordinates.shift();
    const y2 = coordinates.shift();

    const pointsDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(((Math.abs(x2 - x1)) ** 2) + ((Math.abs(y2 - y1)) ** 2));
    }

    if (Number.isInteger(pointsDistance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(pointsDistance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(pointsDistance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([2, 1, 1, 1]);