function arenaTier(gladiatorsInput) {
  const gladiatorsInfo = [...gladiatorsInput];
  const gladiators = {};
  let index = 0;
  let line = gladiatorsInfo[index];

  while (line !== 'Ave Cesar') {
    if (line.includes('vs')) {
      const [firsGladiator, secondGladiator] = line.split(' vs ');

      duel(gladiators, firsGladiator, secondGladiator);
      index++;
      line = gladiatorsInfo[index];
      continue;
    } else {
      addGladiator(line);
    }
    index++;
    line = gladiatorsInfo[index];
  }

  sortAndPrint(gladiators);

  // logic for everything bellow:

  function addGladiator(line) {
    [gladiatorName, technique, skill] = line.split(' -> ');
    let totalSkill = 'totalSkill';
    skill = Number(skill);

    if (!gladiators.hasOwnProperty(gladiatorName)) {
      gladiators[gladiatorName] = {};
      gladiators[gladiatorName][totalSkill] = 0;
    }

    if (!gladiators[gladiatorName].hasOwnProperty(technique)) {
      gladiators[gladiatorName][technique] = skill;
      gladiators[gladiatorName][totalSkill] += skill;
    } else {
      if (skill > gladiators[gladiatorName][technique]) {
        let difference = skill - gladiators[gladiatorName][technique];
        gladiators[gladiatorName][technique] = skill;
        gladiators[gladiatorName][totalSkill] += difference;
      }
    }
  }

  function duel(gladiators, firstGladiator, secondGladiator) {
    const firstExist = gladiators.hasOwnProperty(firstGladiator);
    const secondExist = gladiators.hasOwnProperty(secondGladiator);

    const isValid = (firstG, secondG) => {
      const first = Object.keys(gladiators[firstG]);
      const second = Object.keys(gladiators[secondG]);

      return first.some(
        (element) => element !== 'totalSkill' && second.includes(element)
      );
    };

    if (firstExist && secondExist && isValid(firstGladiator, secondGladiator)) {
      const totalSkill = 'totalSkill';
      if (
        gladiators[firstGladiator][totalSkill] >
        gladiators[secondGladiator][totalSkill]
      ) {
        delete gladiators[secondGladiator];
      } else {
        delete gladiators[firstGladiator];
      }
    }
  }

  function sortAndPrint(gladiators) {
    const sorted = Object.entries(gladiators).sort(
      (a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0])
    );
    for (const [name, skills] of sorted) {
      const totalSkills = Object.entries(skills)[0][1];
      delete skills.totalSkill;

      const sortedSkills = Object.entries(skills).sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
      );

      console.log(`${name}: ${totalSkills} skill`);

      for (const [techniqueName, skill] of sortedSkills) {
        console.log(`- ${techniqueName} <!> ${skill}`);
      }
    }
  }
}

arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar',
]);
