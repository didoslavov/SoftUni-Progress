function extractEmails(input) {
  const mailValidation = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/gmi
  let matches = mailValidation.exec(input);

  while (matches !== null) {
    console.log(matches[0]);
    matches = mailValidation.exec(input);
  }
}

extractEmails(
  'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@soft-uni.de.'
);
