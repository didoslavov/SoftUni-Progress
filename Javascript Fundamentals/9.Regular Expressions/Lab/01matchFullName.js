function matchFullName(names) {
  const regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  const correctNames = names.match(regExp);

  console.log(correctNames.join(' '));
}

matchFullName(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
);
