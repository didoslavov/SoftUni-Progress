function circleArea(number) {
    if (typeof number !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof number}.`
    }

    return (Math.PI * Math.pow(number, 2)).toFixed(2);
}

console.log(circleArea(5));
console.log(circleArea('name'));