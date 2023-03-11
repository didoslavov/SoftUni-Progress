function solve() {
  document.querySelector('button').addEventListener('click', onClick);
  const selectOptionsElement = document.querySelector('#selectMenuTo');
  const numberInput = document.getElementById('input');
  const resultElement = document.getElementById('result');

  const hexOption = document.querySelector('#selectMenuTo > option');
  hexOption.textContent = 'Hexadecimal';
  hexOption.value = 'hexadecimal';

  const binaryOption = document.createElement('option');
  binaryOption.textContent = 'Binary';
  binaryOption.setAttribute('value', 'binary');
  selectOptionsElement.appendChild(binaryOption);

  const selectedElement = document.getElementById('selectMenuTo');

  function onClick() {
    const number = Number(numberInput.value);
    const selectedElementValue =
      selectedElement.options[selectedElement.selectedIndex].value;

    const converter = {
      binary: (num) => num.toString(2),
      hexadecimal: (num) => num.toString(16).toUpperCase(),
    };

    const result = converter[selectedElementValue](number);

    resultElement.setAttribute('value', result);
  }
}
