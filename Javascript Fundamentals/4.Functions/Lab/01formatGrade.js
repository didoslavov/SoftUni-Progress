function formatGrade(grade) {
  let currentGrade = grade;

  if (currentGrade < 3) {
    console.log(`Fail (${Math.floor(grade)})`);
  } else if (currentGrade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (currentGrade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (currentGrade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
