function solve() {
  const text = document.getElementById('text').value;
  const pattern = document.getElementById('naming-convention').value;
  const result = document.getElementById('result')

  if (pattern === 'Camel Case') {
    result.textContent = camelCase(text);
  } else if (pattern === 'Pascal Case') {
    result.textContent = pascalCase(text);
  } else {
    result.textContent = 'Error!';
  }

  function camelCase(str) {
    return str
      .split(' ')
      .map((word) => word.toLowerCase())
      .map((word, index) => {
        if (index === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }

  function pascalCase(string) {
    return string
      .split(' ')
      .map((word) => word.toLowerCase())
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }
}
