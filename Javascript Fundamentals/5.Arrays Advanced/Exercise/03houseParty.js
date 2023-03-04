function houseparty(guestsInfo) {
    let guestList = [];
    const guestsInfoLength = guestsInfo.length;

    for (let i = 0; i < guestsInfoLength; i++) {
        let currentGuest = guestsInfo[i].split(' ');
        const guestName = currentGuest[0];

        if (currentGuest.length == 3) {
            if (!guestList.includes(guestName)) {
                guestList.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else {
            if (guestList.includes(guestName)) {
                const guestIndex = guestList.indexOf(guestName);
                guestList.splice(guestIndex, 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}

houseparty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);