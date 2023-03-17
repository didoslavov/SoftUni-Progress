function solve() {
  const nameInput = document
    .querySelector('#container')
    .querySelectorAll('input')[0];
  const hallInput = document
    .querySelector('#container')
    .querySelectorAll('input')[1];
  const ticketPriceInput = document
    .querySelector('#container')
    .querySelectorAll('input')[2];
  const onScreenBtn = document
    .querySelector('#container')
    .querySelector('button');
  const clearBtn = document.querySelectorAll('#archive > button')[0];

  clearBtn.addEventListener('click', clearAchive);
  onScreenBtn.addEventListener('click', onScreen);

  function onScreen(e) {
    e.preventDefault();

    const name = nameInput.value;
    const hall = hallInput.value;
    const ticketPrice = ticketPriceInput.value;
    const isValid = name && hall && ticketPrice;

    if (!isValid || isNaN(ticketPrice)) return;

    addMovie(name, hall, ticketPrice);

    nameInput.value = '';
    hallInput.value = '';
    ticketPriceInput.value = '';
  }

  function addMovie(movieName, hall, ticketPrice) {
    const ulMovieListElement = document.querySelector('#movies > ul');

    const liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    spanElement.textContent = movieName;
    const strongHallElement = document.createElement('strong');
    strongHallElement.textContent = `Hall: ${hall}`;

    const divElement = document.createElement('div');
    const strongPriceElement = document.createElement('strong');
    strongPriceElement.textContent = Number(ticketPrice).toFixed(2);
    const inputSoldCounterElement = document.createElement('input');
    inputSoldCounterElement.placeholder = 'Tickets Sold';
    const btnElement = document.createElement('button');
    btnElement.textContent = 'Archive';

    btnElement.addEventListener('click', () => {
      const input = inputSoldCounterElement.value;
      const archivedUlElement = document.querySelector('#archive > ul');
      const archivedliElement = document.createElement('li');
      const totalMoneySpanElement = document.createElement('strong');
      totalMoneySpanElement.textContent = `Total amount: ${(
        Number(ticketPrice) * Number(input)
      ).toFixed(2)}`;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () =>
        archivedUlElement.removeChild(archivedliElement)
      );

      if (isNaN(input) || !input) return;

      const removedChild = ulMovieListElement.removeChild(liElement);
      const movieName = removedChild.querySelector('span');

      archivedliElement.appendChild(movieName);
      archivedliElement.appendChild(totalMoneySpanElement);
      archivedliElement.appendChild(deleteBtn);
      archivedUlElement.appendChild(archivedliElement);
    });

    divElement.appendChild(strongPriceElement);
    divElement.appendChild(inputSoldCounterElement);
    divElement.appendChild(btnElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(strongHallElement);
    liElement.appendChild(divElement);
    ulMovieListElement.appendChild(liElement);
  }

  function clearAchive(e) {
    Array.from(e.target.previousSibling.previousSibling.children).forEach(
      (li) => li.remove()
    );
  }
}
