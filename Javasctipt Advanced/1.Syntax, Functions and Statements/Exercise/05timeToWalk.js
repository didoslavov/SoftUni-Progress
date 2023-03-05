function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let restTime = (Math.floor(distance / 500)) * 60;
    let speedInSec = (speed * 1000) / (60*60);
    
    let totalTime = distance / speedInSec + restTime;
    
    const result = new Date(0);
    result.setSeconds(Math.round(totalTime));
    const hours = result.getUTCHours() < 10 ? '0' + result.getUTCHours() : result.getUTCHours();
    const minutes = result.getUTCMinutes() < 10 ? '0' + result.getUTCMinutes() : result.getUTCMinutes();
    const seconds = result.getUTCSeconds() < 10 ? '0' + result.getUTCSeconds() : result.getUTCSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
console.log('----------');
timeToWalk(2564, 0.70, 5.5);