function softuniReception(input) {
  let totalStudents = Number(input.pop());
  const totalAnswersPerHour =
    Number(input[0]) + Number(input[1]) + Number(input[2]);
  let totalHours = 0;

  while (totalStudents > 0) {
    totalHours++;
    totalStudents -= totalAnswersPerHour;

    if (totalHours % 4 === 0) {
      totalHours++;
    }
  }
  return `Time needed: ${totalHours}h.`;
}

console.log(softuniReception(['5', '6', '4', '20']));
console.log('----------------');
console.log(softuniReception(['1', '2', '3', '45']));
console.log('----------------');
console.log(softuniReception(['3', '2', '5', '40']));
