function schoolGrades(students) {
  const schoolDiary = {};

  for (const student of students) {
    const currentStudent = student.split(' ');
    const name = currentStudent.shift();
    const grades = currentStudent.map(Number);

    if (!schoolDiary.hasOwnProperty(name)) {
      schoolDiary[name] = grades;
    } else {
      grades.forEach((grade) => {
        schoolDiary[name].push(grade);
      });
    }
  }

  for (const name in schoolDiary) {
    schoolDiary[name] = avarageGrade(schoolDiary[name]);
  }

  const sortedSchoolDiary = Object.entries(schoolDiary).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const student of sortedSchoolDiary) {
    const studentName = student[0];
    const studentGrade = Number(student[1]);

    console.log(`${studentName}: ${studentGrade.toFixed(2)}`);
  }

  function avarageGrade(grades) {
    let sumOfGrades = 0;
    const gradesLength = grades.length;
    for (let i = 0; i < gradesLength; i++) {
      sumOfGrades += grades[i];
    }
    return sumOfGrades / gradesLength;
  }
}

schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3 3']);
