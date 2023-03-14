function solve() {
  let inputFields = document.querySelectorAll('input');
  const checkBtn = document.querySelectorAll('button')[0];
  const clearBtn = document.querySelectorAll('button')[1];

  const tableElement = document.querySelector('table');
  const checkTextField = document.querySelectorAll('#check p')[0];

  clearBtn.addEventListener('click', clearAll);
  checkBtn.addEventListener('click', quickCheck);

  function clearAll() {
    [...inputFields].forEach((i) => (i.value = ''));
    tableElement.style.border = 'none';
    checkTextField.textContent = '';
  }

  function quickCheck() {
    let matrix = [
      [inputFields[0].value, inputFields[1].value, inputFields[2].value],
      [inputFields[3].value, inputFields[4].value, inputFields[5].value],
      [inputFields[6].value, inputFields[7].value, inputFields[8].value],
    ];

    let isCorrect = true;

    for (let i = 1; i < matrix.length; i++) {
      const row = matrix[i];
      const col = matrix.map((row) => row[i]);

      if (
        col.length !== [...new Set(col)].length ||
        row.length !== [...new Set(row)].length
      ) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      tableElement.style.border = '2px solid green';
      checkTextField.textContent = 'You solve it! Congratulations!';
      checkTextField.style.color = 'green';
    } else {
      tableElement.style.border = '2px solid red';
      checkTextField.textContent = 'NOP! You are not done yet...';
      checkTextField.style.color = 'red';
    }
  }
}
