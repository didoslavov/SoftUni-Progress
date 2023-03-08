function colorize() {
  const rowElements = document.querySelectorAll('table tr');
  let i = 0;

  for (const row of rowElements) {
    i++;
    if (i % 2 === 0) {
      row.style.backgroundColor = 'teal';
    }
  }
}
