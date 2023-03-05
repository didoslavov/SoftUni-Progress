function cardGame(input) {
  const peopleInfo = [...input];
  const players = {};

  for (const person of peopleInfo) {
    const currentPerson = person.split(': ');
    const personName = currentPerson.shift();
    const personCards = currentPerson.shift().split(', ');
    const cards = [...new Set(personCards)];

    if (!players.hasOwnProperty(personName)) {
      players[personName] = cards;
    } else {
      const currentCards = players[personName];
      players[personName] = currentCards.concat(cards);
    }

    const finalCards = [...new Set(players[personName])];
    players[personName] = finalCards;
  }

  for (let player in players) {
    const values = players[player];
    const cardsValue = cardMath(values);
    players[player] = cardsValue;
    console.log(`${player}: ${players[player]}`);
  }

  function cardMath(values) {
    let result = 0;

    for (const value of values) {
      const values = value.split('');
      let elOne;
      let elTwo;

      if (values.length === 2) {
        elOne = values[0];
        elTwo = values[1];
      } else {
        elOne = values[0] + values[1];
        elTwo = values[2];
      }
      switch (elOne) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          elOne = Number(elOne);
          break;
        case 'J':
          elOne = 11;
          break;
        case 'Q':
          elOne = 12;
          break;
        case 'K':
          elOne = 13;
          break;
        case 'A':
          elOne = 14;
          break;
      }
      switch (elTwo) {
        case 'S':
          elTwo = 4;
          break;
        case 'H':
          elTwo = 3;
          break;
        case 'D':
          elTwo = 2;
          break;
        case 'C':
          elTwo = 1;
          break;
      }

      result += elOne * elTwo;
    }
    return result;
  }
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD',
]);

cardGame([
  'John: 2C, 4H, 9H, AS, QS',
  'Slav: 3H, 10S, JC, KD, 5S, 10S',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Slav: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'John: JD, JD, JD, JD',
]);
