function karaoke(input) {
  const participants = input.shift().split(', ');
  const songs = input.shift().split(/,\s+/g);
  const awards = [];
  let line = input.shift();

  while (line !== 'dawn') {
    const [participant, song, award] = line.split(/,\s+/g);

    if (participants.includes(participant) && songs.includes(song)) {
      const isInList = awards.find((p) => p[participant]);
      if (!isInList) {
        awards.push({
          [participant.trim()]: [award],
        });
      } else {
        if (!isInList[participant].includes(award)) {
          isInList[participant].push(award);
        }
      }
    }

    line = input.shift();
  }

  if (awards.length === 0) {
    console.log('No awards');
    return;
  }

  awards
    .sort(
      (a, b) =>
        Object.values(b)[0].length - Object.values(a)[0].length ||
        Object.keys(a)[0].localeCompare(Object.keys(b)[0])
    )
    .forEach((p) => {
      for (const name in p) {
        console.log(`${name}: ${p[name].length} awards`);
        p[name].sort((a, b) => a.localeCompare(b)).forEach((a) => console.log(`--${a}`));
      }
    });
}

karaoke([
    'Trifon, Vankata, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, Dragana - Kukavice, Some Award',
    'Vankata, PHP Web, Educational 101',
    'dawn'
  ]
  );
