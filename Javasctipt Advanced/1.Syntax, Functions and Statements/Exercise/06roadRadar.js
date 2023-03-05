function roadRadar(speed, area) {
    const areasLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    if (speed <= areasLimit[area]) {
        return `Driving ${speed} km/h in a ${areasLimit[area]} zone`
    }

    const difference = speed - areasLimit[area];
    let status;

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    
    return `The speed is ${difference} km/h faster than the allowed speed of ${areasLimit[area]} - ${status}`;
}

console.log(roadRadar(40, 'city'));
console.log('----------');
console.log(roadRadar(20, 'residential'));
console.log('----------');
console.log(roadRadar(120, 'interstate'));
console.log('----------');
console.log(roadRadar(200, 'motorway'));
