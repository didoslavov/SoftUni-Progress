function bonusScoringSystem(input) {
 
  let students = input.shift();
  let lectures = Number(input.shift());
  let bonus = Number(input.shift());
  let total = 0;

  let buff = [];
  for (let i = 0; i < input.length; i++) {
      input[i] = Number(input[i]);
      total = Math.ceil((input[i] / lectures) * (5 + bonus));
      buff.push(total);
  }

  //let buffSort = buff.sort()
  //let largest  = buffSort[buffSort.length-1] 
  //console.log(largest);

  let max = buff[0];
  let index = 0;
  for (let i = 0; i < buff.length; i++) {
      if (max < buff[i]) {
          max = buff[i];
          index++;
      }
  }
  //buff.sort((a, b) => b - a);
  console.log(`Max Bonus: ${max}.`);
  console.log(`The student has attended ${input[index]} lectures.`);
}

bonusScoringSystem([
  '5',  '25', '30',
  '12', '19', '24',
  '16', '20'
]);
console.log('---------------');
bonusScoringSystem([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]);