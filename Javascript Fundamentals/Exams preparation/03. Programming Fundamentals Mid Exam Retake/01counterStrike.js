function counterStrike(energy) {
  let staminaBar = energy.shift();
  let wins = 0;

  for (const command of energy) {
    if (command !== 'End of battle') {
      let energyNeeded = Number(command);
      if (staminaBar - energyNeeded < 0) {
        console.log(
          `Not enough energy! Game ends with ${wins} won battles and ${staminaBar} energy`
        );
        return;
      }
      staminaBar -= energyNeeded;
      wins++;
    } else {
      console.log(`Won battles: ${wins}. Energy left: ${staminaBar}`);
    }
    if (wins % 3 === 0) {
      staminaBar += wins;
    }
  }
}

counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
