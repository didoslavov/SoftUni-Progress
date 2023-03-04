function loginValidator(input) {
  const userName = input.shift().split('');
  const correctPassword = userName.reverse().join('');
  let password = input.shift();
  let isBlocked = false;
  let triesCounter = 0;

  while (correctPassword != password) {
    triesCounter++;

    if (triesCounter > 3) {
      isBlocked = true;
      console.log(`User ${userName.reverse().join('')} blocked!`);
      break;
    }
    console.log('Incorrect password. Try again.');
    password = input.shift();
  }
  if (!isBlocked) {
    console.log(`User ${userName.reverse().join('')} logged in.`);
  }
}

loginValidator(['momo', 'omom']);


