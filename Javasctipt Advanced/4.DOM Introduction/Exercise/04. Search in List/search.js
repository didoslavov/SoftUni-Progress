function search() {
  const searchTextElement = document.getElementById('searchText').value;
  const ulElements = Array.from(document.querySelectorAll('#towns li'));
  let resultElement = document.getElementById('result');
  let matches = 0;

  if (searchTextElement == '') {
    return;
  }

  for (const liElement of ulElements) {
    if (liElement.textContent.includes(searchTextElement)) {
      matches++;
      liElement.style.fontWeight = 'bold';
      liElement.style.textDecoration = 'underline';
    }
  }

  resultElement.textContent = `${matches} matches found`;
  document.getElementById('searchText').value = '';
}
