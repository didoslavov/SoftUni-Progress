function solve() {
  const outputElement = document.getElementById('output');
  const inputElement = document.getElementById('input');

  inputElement.value
    .split('.')
    .map((x) => x.trim())
    .filter((x) => x.length !== 0)
    .reduce((acc, sentance, i) => {
      if (i % 3 === 0) {
        acc.push([sentance]);
      } else {
        acc[acc.length - 1].push(sentance);
      }
      return acc;
    }, [])
    .forEach((paragraph) => {
      const para = document.createElement('p');
      para.textContent = paragraph.join('. ') + '.';
      outputElement.appendChild(para);
    });
}
