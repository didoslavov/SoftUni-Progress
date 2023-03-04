function distanceCalculator(x1, y1, x2, y2) {
    let x = Math.pow(x2 - x1,2);
    let y = Math.pow(y2 - y1,2);
    
    return Math.sqrt(x + y);
}

distanceCalculator(2, 4, 5, 0);