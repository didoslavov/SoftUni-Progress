function steamAccountManipulation(input) {
  const staemAccount = input.shift().split(' ');
  let commandLine = input.shift().split(' ');
  let command = commandLine[0];

  while (command !== 'Play!') {
    const game = commandLine[1];

    switch (command) {
      case 'Install':
            if (!staemAccount.includes(game)) {
                staemAccount.push(game);
            }
        break;
      case 'Uninstall':
            if (staemAccount.includes(game)) {
               let gameIndex = staemAccount.indexOf(game);
               staemAccount.splice(gameIndex, 1); 
            }
        break;
      case 'Update':
            if (staemAccount.includes(game)) {
                const gameIndex = staemAccount.indexOf(game);
                const updatedGame = staemAccount.splice(gameIndex, 1);
                staemAccount.push(updatedGame); 
            }
        break;
      case 'Expansion':
          let expansionGame = game.split('-')[0];
          const expansion = game.split('-')[1];
          if (staemAccount.includes(expansionGame)) {
              const gameIndex = staemAccount.indexOf(expansionGame);  
              let gameWithExpansion = `${expansionGame}:${expansion}`;
                staemAccount.splice(gameIndex + 1, 0, gameWithExpansion);
            }
        break;
    }
    commandLine = input.shift().split(' ');
    command = commandLine[0];
  }
  console.log(staemAccount.join(' '));
}

steamAccountManipulation(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);
