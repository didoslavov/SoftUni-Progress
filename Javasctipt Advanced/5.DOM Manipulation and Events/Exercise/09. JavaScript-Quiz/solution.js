function solve() {
  const selections = Array.from(document.querySelectorAll('section'));

  const options = Array.from(document.querySelectorAll('.answer-wrap'));

  options.forEach((o) => {
    o.addEventListener('click', onClick);
  });

  const answers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents',
  ];
  let correctAnswers = 0;
  let i = 0;

  function onClick(e) {
    const isCorrect = answers.includes(
      e.target.parentElement.children[0].textContent
    )
      ? true
      : false;

    if (isCorrect) {
      correctAnswers++;
    }

    selections[i].style.display = 'none';
    i++;

    i !== 3 ? (selections[i].style.display = 'block') : result(correctAnswers);
  }

  function result(correctAnswersCount) {
    document.querySelector('#results').style.display = 'block';
    let res = '';

    correctAnswersCount === 3
      ? (res = 'You are recognized as top JavaScript fan!')
      : (res = `You have ${correctAnswersCount} right answers`);

    document.querySelector('.results-inner').children[0].textContent = res;
  }
}
