window.addEventListener('load', solve);

function solve() {
    const furnitureList = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('.total-price');

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');

    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        const model = modelInput.value.trim();
        const year = yearInput.value.trim();
        const description = descriptionInput.value.trim();
        const price = priceInput.value.trim();

        if (model == '' || year == '' || description == '' || price == '') {
            return;
        }

        if (Number(year) < 0 || Number(price) < 0) {
            return;
        }

        const infoTr = createElement('tr', null, { class: 'info' }, [
            createElement('td', model),
            createElement('td', Number(price).toFixed(2)),
            createElement('td', null, null, [
                createElement('button', 'More Info', { class: 'moreBtn', onclick: onMoreInfo }),
                createElement('button', 'Buy it', { class: 'buyBtn', onclick: onBuyProduct }),
            ]),
        ]);
        const hideTr = createElement('tr', null, { class: 'hide' }, [
            createElement('td', 'Year: ' + year),
            createElement('td', 'Description: ' + description, { colspan: '3' }),
        ]);

        furnitureList.appendChild(infoTr);
        furnitureList.appendChild(hideTr);

        clearInputFields();

        function onMoreInfo(e) {
            if (e.target.textContent == 'More Info') {
                e.target.textContent = 'Less Info';
                hideTr.style.display = 'contents';
            } else {
                e.target.textContent = 'More Info';
                hideTr.style.display = 'none';
            }
        }

        function onBuyProduct() {
            totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(price)).toFixed(2);

            infoTr.remove();
            hideTr.remove();
        }
    }

    function createElement(tagName, textContent, attributes, children = []) {
        const element = document.createElement(tagName);
        const PARAMS = {
            colspan: (value) => element.setAttribute('colspan', value),
            class: (value) => element.classList.add(value),
            id: (value) => (element.id = value),
            onclick: (value) => element.addEventListener('click', value),
            disabled: () => element.setAttribute('disabled', ''),
            src: (value) => element.setAttribute('src', value),
        };

        if (textContent) {
            element.textContent = textContent;
        }

        if (attributes) {
            Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
        }

        if (children.length == 0) {
            return element;
        }

        children.forEach((c) => element.appendChild(c));

        return element;
    }

    function clearInputFields() {
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }
}
