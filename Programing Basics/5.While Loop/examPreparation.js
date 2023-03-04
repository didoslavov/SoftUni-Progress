function examPreparation(input) {
  let poorGrades = Number(input[0]);
  let poorGradesCounter = 0;
  let i = 1;
  let problemName = input[i];
  let currentGrade = 0;
  let problemGradeCounter = 0;
  let avgGradeCounter = 0;

  while (poorGradesCounter < poorGrades) {
    problemName = String(input[i]);
    if (problemName !== "Enough") {
      problemGradeCounter++;
      i++;
      currentGrade = Number(input[i]);
      if (currentGrade <= 4) {
        poorGradesCounter++;
        if (poorGradesCounter === poorGrades) {
          console.log(`You need a break, ${poorGradesCounter} poor grades.`);
        }
      }
      avgGradeCounter += currentGrade;
      i++;
    } else {
      problemName = input[i - 2];
      console.log(`Average score: ${(avgGradeCounter / problemGradeCounter).toFixed(2)}`);
      console.log(`Number of problems: ${problemGradeCounter}`);
      console.log(`Last problem: ${problemName}`);
      break;
    }
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
