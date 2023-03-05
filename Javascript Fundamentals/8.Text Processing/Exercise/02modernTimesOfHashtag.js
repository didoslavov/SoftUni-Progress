function hashTag(string) {
  const specialSign = '#';
  const strings = [...string.split(' ')];
  const checker = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  for (const string of strings) {
    const invalidChar = checker.some((el) => [...string].includes(el));
    const validLength = string.length > 1;
    const isValid = string.includes(specialSign);

    if (isValid && validLength && !invalidChar) {
      console.log(string.replace(specialSign, ''));
    }
  }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
