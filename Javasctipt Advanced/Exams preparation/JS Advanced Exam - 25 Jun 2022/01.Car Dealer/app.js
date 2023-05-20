window.addEventListener('load', solve);

function solve() {
    const publishBtn = document.getElementById('publish');
    const tbody = document.getElementById('table-body');
    const ulCarList = document.getElementById('cars-list');
    const profitElement = document.getElementById('profit');

    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const fuelElement = document.getElementById('fuel');
    const originalPriceElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');

    let profit = 0;

    publishBtn.addEventListener('click', onPublish);

    function onPublish(e) {
        e.preventDefault();

        const make = makeElement.value;
        const model = modelElement.value;
        const year = yearElement.value;
        const fuel = fuelElement.value;
        const originalPrice = Number(originalPriceElement.value);
        const sellingPrice = Number(sellingPriceElement.value);

        if (make == '' || model == '' || year == '' || fuel == '' || originalPrice == '' || sellingPrice == '') {
            return;
        }

        if (originalPrice > sellingPrice) {
            return;
        }

        const trElement = document.createElement('tr');
        trElement.classList.add('row');

        const tdMake = document.createElement('td');
        tdMake.textContent = makeElement.value;

        const tdModel = document.createElement('td');
        tdModel.textContent = modelElement.value;

        const tdYear = document.createElement('td');
        tdYear.textContent = yearElement.value;

        const tdFuel = document.createElement('td');
        tdFuel.textContent = fuelElement.value;

        const tdOriginalPrice = document.createElement('td');
        tdOriginalPrice.textContent = originalPriceElement.value;

        const tdSellingPrice = document.createElement('td');
        tdSellingPrice.textContent = sellingPriceElement.value;

        const tdBtns = document.createElement('td');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('action-btn', 'edit');
        editBtn.addEventListener('click', onEdit);

        const sellBtn = document.createElement('button');
        sellBtn.textContent = 'Sell';
        sellBtn.classList.add('action-btn', 'sell');
        sellBtn.addEventListener('click', onSell);

        tdBtns.appendChild(editBtn);
        tdBtns.appendChild(sellBtn);
        trElement.appendChild(tdMake);
        trElement.appendChild(tdModel);
        trElement.appendChild(tdYear);
        trElement.appendChild(tdFuel);
        trElement.appendChild(tdOriginalPrice);
        trElement.appendChild(tdSellingPrice);
        trElement.appendChild(tdBtns);
        tbody.appendChild(trElement);

        makeElement.value = '';
        modelElement.value = '';
        yearElement.value = '';
        fuelElement.value = '';
        originalPriceElement.value = '';
        sellingPriceElement.value = '';

        function onEdit(e) {
            const editElement = e.target.parentElement.parentElement;
            console.log(editElement);
            makeElement.value = make;
            modelElement.value = model;
            yearElement.value = year;
            fuelElement.value = fuel;
            originalPriceElement.value = originalPrice;
            sellingPriceElement.value = sellingPrice;

            editElement.remove();
        }

        function onSell(e) {
            const editElement = e.target.parentElement.parentElement;
            editElement.remove();
            const difference = sellingPrice - originalPrice;

            const liElement = document.createElement('li');
            liElement.classList.add('each-list');

            const carSpan = document.createElement('span');
            carSpan.textContent = `${make} ${model}`;

            const yearSpan = document.createElement('span');
            yearSpan.textContent = year;

            const diffSpan = document.createElement('span');
            diffSpan.textContent = difference;

            liElement.appendChild(carSpan);
            liElement.appendChild(yearSpan);
            liElement.appendChild(diffSpan);
            ulCarList.appendChild(liElement);

            profit += difference;
            profitElement.textContent = profit.toFixed(2);
        }
    }
}
