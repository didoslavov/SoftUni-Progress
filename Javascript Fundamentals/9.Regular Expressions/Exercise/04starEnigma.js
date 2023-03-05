function starEnigma(input) {
  const encryptedMessagesCount = input.shift();
  const decryptedMessages = [];
  const regExp =
    /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d+])[^@\-!:>]*!(?<attack>[A-D]{1})![^@\-!:>]*->(?<soldiers>[\d+])/m;

  for (let i = 0; i < encryptedMessagesCount; i++) {
      const currentMessage = decryptMessage(input[i]);
      decryptedMessages.push(currentMessage);
  }

  finalBattle(decryptedMessages, regExp);

  function decryptMessage(message) {
    let count = 0;
    const messageLength = message.length;

    for (let i = 0; i < messageLength; i++) {
      const currentChar = message[i].toLowerCase();

      switch (currentChar) {
        case 's':
        case 't':
        case 'a':
        case 'r':
          count++;
          break;
      }
    }

    let decryptedMessages = '';

    for (let i = 0; i < messageLength; i++) {
      const decryptedChar = message[i].charCodeAt() - count;
      decryptedMessages += String.fromCharCode(decryptedChar);
    }

    return decryptedMessages;
  }

  function finalBattle(decryptedMessages, pattern) {
    const attackedPlanets = [];
    const destroyedPlanets = [];

    for (const message of decryptedMessages) {
      const messageInfo = pattern.exec(message);

      if (messageInfo === null) {
        continue;
      }

      const attackType = messageInfo.groups.attack;
      const planetName = messageInfo.groups.name;

      if (attackType === 'A') {
        attackedPlanets.push(planetName);
      } else if (attackType === 'D') {
        destroyedPlanets.push(planetName);
      }
    }

    const sortedAttackedPlanets = attackedPlanets.sort((a, b) =>
      a.localeCompare(b)
    );
    const sortedDestroyedPlanets = destroyedPlanets.sort((a, b) =>
      a.localeCompare(b)
    );

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
    sortedAttackedPlanets.forEach((planet) => {
      console.log(`-> ${planet}`);
    });

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
    sortedDestroyedPlanets.forEach((planet) => {
      console.log(`-> ${planet}`);
    });
  }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
