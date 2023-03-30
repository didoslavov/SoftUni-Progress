function sinoTheWalker(input) {
    const time = input.shift().split(':').map(x => Number(x));
    const ms = ((time[0] * 60 * 60) + (time[1] * 60) + time[2]) * 1000;
    const steps = Number(input.shift()) % 86400;
    const stepTime = Number(input.shift()) % 86400;

    const finalMs = ms + ((steps * stepTime) * 1000);

    const res = new Date(finalMs).toISOString().slice(11, 19);
    console.log(`Time Arrival: ${res}`);
}

sinoTheWalker(['23:49:13', '5424', '2']);
