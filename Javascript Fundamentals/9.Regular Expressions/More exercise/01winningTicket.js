function winningTicket(input) {
  const tickets = input.split(', ');
  let winningPattern = /(\@{6,10}|\#{6,10}|\${6,10}|\^{6,10})/g;

  for (let ticket of tickets) {
    ticket = ticket.trim();

    if (ticket.length !== 20) {
      console.log('invalid ticket');
      continue;
    } else {
      let leftSide = ticket
        .substring(0, ticket.length / 2)
        .match(winningPattern);
      let rightSide = ticket.substring(ticket.length / 2).match(winningPattern);

      if (leftSide === null || rightSide === null) {
        console.log(`ticket "${ticket}" - no match`);
      } else {
        leftSide = leftSide.toString();
        rightSide = rightSide.toString();

        if (leftSide.length === 10 && rightSide.length === 10) {
          console.log(
            `ticket "${ticket}" - ${leftSide.length}${leftSide[0]} Jackpot!`
          );
        } else if (leftSide[0] === rightSide[0]) {
          if (leftSide.length < rightSide.length) {
            console.log(
              `ticket "${ticket}" - ${leftSide.length}${leftSide[0]}`
            );
          }
          if (rightSide.length < leftSide.length) {
            console.log(
              `ticket "${ticket}" - ${rightSide.length}${rightSide[0]}`
            );
          }
          if (rightSide.length === leftSide.length) {
            console.log(
              `ticket "${ticket}" - ${leftSide.length}${leftSide[0]}`
            );
          }
        } else {
          console.log(`invalid ticket`);
        }
      }
    }
  }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
console.log('--------------');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
console.log('--------------');
winningTicket('validticketnomatch:(');
