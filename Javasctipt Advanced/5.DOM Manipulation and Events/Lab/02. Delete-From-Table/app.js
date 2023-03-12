function deleteByEmail() {
  const inputElement = document.querySelector('input[name = "email"]');
  const input = inputElement.value;
  const tableRows = Array.from(document.querySelectorAll('tbody tr'));
  const result = document.getElementById('result');
  let found = false;

  tableRows.forEach((row) => {
    result.textContent = '';
    if (row.children[1].textContent === input) {
      const currentRow = row.parentElement;
      currentRow.removeChild(row);
      found = true;
    }
  });

  if (found) {
    result.textContent = 'Deleted.';
  } else {
    result.textContent = 'Not found.';
  }

  inputElement.value = '';
}
