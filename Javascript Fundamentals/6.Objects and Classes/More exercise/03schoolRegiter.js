function schoolRegister(input) {
    const register = {};

  for (let student of input) {
    student = student.split(', ');
    const currentStudent = student.shift().split(': ')[1];
    const currentGrade = Number(student.shift().split(': ')[1]) + 1;
    const currentScore = student.shift().split(': ')[1];
    
    if (currentScore > 3) {
        if (!register.hasOwnProperty(currentGrade)) {
            register[currentGrade] = {
                name: [currentStudent],
                score: [currentScore],
            };
        } else {
            register[currentGrade].name.push(currentStudent);
            register[currentGrade].score.push(currentScore);
        }
    }
  }
 const sortedGrades = sortRegister(register);

  for (const grade in sortedGrades) {
    console.log(`${grade} Grade`);
    console.log(`List of students: ${sortedGrades[grade].name.join(', ')}`);
    console.log(`Average annual score from last year: ${getAvarage(sortedGrades[grade].score).toFixed(2)}`);
    console.log('');
  }

  function sortRegister(obj) {
    Object.keys(obj).sort((a,b) => Number(a) - Number(b));
    return obj;
  }

  function getAvarage(arr) {
    let avrg = arr.map(x => Number(x)).reduce((acc, score) => acc + score ,0) / arr.length;
    return avrg;
  }
}

schoolRegister([
  'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
  'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
  'Student name: George, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
  'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
  'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
  'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
  'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
  'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
  'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
  'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
  'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
console.log('----------------');
schoolRegister([
  'Student name: George, Grade: 5, Graduated with an average score: 2.75',
  'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
  'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
  'Student name: John, Grade: 9, Graduated with an average score: 2.90',
  'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
  'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15',
]);
