function solve() {
  Array.from(document.querySelectorAll('button')).forEach((btn) => {
    if (btn.textContent === 'Generate') {
      btn.addEventListener('click', onGenerate);
    } else {
      btn.addEventListener('click', onPurchase);
    }
  });

  function onPurchase(e) {
    const products = [];
    const prices = [];
    const decorations = [];

    Array.from(document.querySelectorAll('tbody > tr')).forEach((child) => {
      if (child.querySelector('input[type="checkbox"]').checked) {
        products.push(child.querySelector(':nth-child(2)').textContent);
        prices.push(child.querySelector(':nth-child(3)').textContent);
        decorations.push(child.querySelector(':nth-child(4)').textContent);
      }
    });

    const totalPrice = prices
      .map((x) => Number(x))
      .reduce((acc, p) => acc + p, 0);
    const avrgDecoration = decorations
      .map((x) => Number(x))
      .reduce((acc, d) => acc + d, 0);

    document.querySelector(
      '#exercise textarea[rows="4"]'
    ).value = `Bought furniture: ${products.join(
      ', '
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${avrgDecoration / decorations.length}`;
  }

  function onGenerate() {
    JSON.parse(
      document.querySelector('#exercise textarea[rows="5"]').value
    ).forEach((funiture) => {
      const name = funiture.name;
      const price = funiture.price;
      const decoration = funiture.decFactor;
      const imgSrc = funiture.img;

      const newTrElement = document.createElement('tr');

      const newImgTdElement = document.createElement('td');
      const newImgElement = document.createElement('img');
      newImgElement.setAttribute('src', imgSrc);
      newImgTdElement.appendChild(newImgElement);
      newTrElement.appendChild(newImgTdElement);

      const newNameTdElement = document.createElement('td');
      const newNameElement = document.createElement('p');
      newNameElement.textContent = name;
      newNameTdElement.appendChild(newNameElement);
      newTrElement.appendChild(newNameTdElement);

      const newPriceTdElement = document.createElement('td');
      const newPriceElement = document.createElement('p');
      newPriceElement.textContent = price;
      newPriceTdElement.appendChild(newPriceElement);
      newTrElement.appendChild(newPriceTdElement);

      const newDecorationTdElement = document.createElement('td');
      const newDecorationElement = document.createElement('p');
      newDecorationElement.textContent = decoration;
      newDecorationTdElement.appendChild(newDecorationElement);
      newTrElement.appendChild(newDecorationTdElement);

      const newCheckTdElement = document.createElement('td');
      const newCheckElement = document.createElement('input');
      newCheckElement.setAttribute('type', 'checkbox');
      newCheckTdElement.appendChild(newCheckElement);
      newTrElement.appendChild(newCheckTdElement);

      document.querySelector('tbody').appendChild(newTrElement);
    });
  }
}
