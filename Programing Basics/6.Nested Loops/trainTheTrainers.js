function trainTheTrainers(input) {
  let joureyCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  let totalAvrg = 0;
  let theme = "";
  let totalGrades = 0;
  while (command !== "Finish") {
    let currentGrade = 0;
    let themeAvrg = 0;
    let gradeCounter = 0;
    theme = command;
    for (let i = 1; i <= joureyCount; i++) {
      currentGrade = Number(input[index]);
      gradeCounter++;
      themeAvrg += currentGrade;
      index++;
    }
    totalGrades += gradeCounter;
    totalAvrg += themeAvrg;
    themeAvrg /= gradeCounter;

    console.log(`${theme} - ${themeAvrg.toFixed(2)}.`);

    command = input[index];
    index++;
  }
  totalAvrg /= totalGrades;
  console.log(`Student's final assessment is ${totalAvrg.toFixed(2)}.`);
}

trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
