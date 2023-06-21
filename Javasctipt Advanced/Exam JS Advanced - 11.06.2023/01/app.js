window.addEventListener('load', solve);

function solve() {
    const carModelInput = document.getElementById('car-model');
    const carYearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumberInput = document.getElementById('part-number');
    const conditionInput = document.getElementById('condition');

    const completeImgElement = document.getElementById('complete-img');
    const completeTextElement = document.getElementById('complete-text');

    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        completeImgElement.style.visibility = 'hidden';
        completeTextElement.textContent = '';

        const carModel = carModelInput.value;
        const carYear = carYearInput.value;
        const partName = partNameInput.value;
        const partNumber = partNumberInput.value;
        const condition = conditionInput.value;

        if (
            carModel == '' ||
            carYear == '' ||
            partName == '' ||
            partNumber == '' ||
            condition == '' ||
            Number(carYear) < 1980 ||
            Number(carYear) > 2023
        ) {
            return;
        }

        const liElement = createElement('li', null, { class: 'part-content' }, [
            createElement('article', null, null, [
                createElement('p', `Car Model: ${carModel}`),
                createElement('p', `Car Year: ${carYear}`),
                createElement('p', `Part Name: ${partName}`),
                createElement('p', `Part Number: ${partNumber}`),
                createElement('p', `Condition: ${condition}`),
            ]),
            createElement('button', 'Edit', { class: 'edit-btn', onclick: onEdit }),
            createElement('button', 'Continue', { class: 'continue-btn', onclick: onContinue }),
        ]);

        infoListElement.appendChild(liElement);

        carModelInput.value = '';
        carYearInput.value = '';
        partNameInput.value = '';
        partNumberInput.value = '';
        conditionInput.value = '';

        nextBtn.disabled = true;

        function onEdit() {
            carModelInput.value = carModel;
            carYearInput.value = carYear;
            partNameInput.value = partName;
            partNumberInput.value = partNumber;
            conditionInput.value = condition;

            nextBtn.disabled = false;
            liElement.remove();
        }

        function onContinue() {
            liElement.remove();

            const continueLiElement = createElement('li', null, { class: 'part-content' }, [
                createElement('article', null, null, [
                    createElement('p', `Car Model: ${carModel}`),
                    createElement('p', `Car Year: ${carYear}`),
                    createElement('p', `Part Name: ${partName}`),
                    createElement('p', `Part Number: ${partNumber}`),
                    createElement('p', `Condition: ${condition}`),
                ]),
                createElement('button', 'Confirm', { class: 'confirm-btn', onclick: onConfirm }),
                createElement('button', 'Cancel', { class: 'cancel-btn', onclick: onCancel }),
            ]);

            confirmListElement.appendChild(continueLiElement);

            function onConfirm() {
                continueLiElement.remove();

                completeImgElement.style.visibility = 'visible';
                completeTextElement.textContent = 'Part is Ordered!';
                nextBtn.disabled = false;
            }

            function onCancel() {
                continueLiElement.remove();

                nextBtn.disabled = false;
            }
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
}
