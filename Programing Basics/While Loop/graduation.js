function graduation(input) {
  let studentName = input[0];
  let i = 1;
  let totalGrades = 0;
  let expeledTimes = 0;

  while (i <= 12) {
    let currentYearGrade = Number(input[i]);
    totalGrades += currentYearGrade;
    if (currentYearGrade < 4.0) {
      expeledTimes++;
      if (expeledTimes > 1) {
        break;
      }
    }
    i++;
  }
  if (expeledTimes > 1) {
    console.log(`${studentName} has been excluded at ${i - 1} grade`);
  } else {
    console.log(
      `${studentName} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`);
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "3",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "3",
]);
