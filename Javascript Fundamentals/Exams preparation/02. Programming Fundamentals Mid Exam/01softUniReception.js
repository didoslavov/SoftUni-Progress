function reception(input) {
  let receptionistProductivity = input.splice(0, 3);
  let studentsCount = Number(input.shift());
  let totalHours = 0;
  let answersPerHour =
    Number(receptionistProductivity[0]) +
    Number(receptionistProductivity[1]) +
    Number(receptionistProductivity[2]);

  while (studentsCount >= 0) {
      if (totalHours % 4 !== 0) {
          studentsCount -= answersPerHour;
        }
        if (studentsCount <= 0) {
            break;
        }
        totalHours += 1;
  }
  console.log(`Time needed: ${totalHours}h.`);
}

reception(['5','6','4','0']);
