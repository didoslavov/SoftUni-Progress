function meetings(entries) {
  const meetings = {};

  for (const entry of entries) {
    const currentEntry = entry.split(' ');
    const day = currentEntry[0];
    const name = currentEntry[1];

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (const day in meetings) {
    console.log(`${day} -> ${meetings[day]}`);
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

console.log('==============');

meetings([
  'Friday Bob',
  'Saturday Ted',
  'Monday Bill',
  'Monday John',
  'Wednesday George',
]);
