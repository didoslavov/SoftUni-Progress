window.addEventListener('load', solve);

function solve() {
    const productTypeElement = document.getElementById('type-product');
    const descriptionElement = document.getElementById('description');
    const clientNameElement = document.getElementById('client-name');
    const clientPhoneElement = document.getElementById('client-phone');

    const sendBtn = document.querySelector('#right button');
    sendBtn.addEventListener('click', onSend);

    const recievedOrdersSection = document.getElementById('received-orders');
    const completeOrdersSection = document.getElementById('completed-orders');

    document.querySelector('.clear-btn').addEventListener('click', onClear);

    function onSend(e) {
        e.preventDefault();

        const productType = productTypeElement.value;
        const description = descriptionElement.value;
        const clientName = clientNameElement.value;
        const clientPhone = clientPhoneElement.value;

        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }

        const divContainer = createElement('div', null, { class: 'container', onclick: onRepair }, [
            createElement('h2', `Product type for repair: ${productType}`),
            createElement('h3', `Client information: ${clientName}, ${clientPhone}`),
            createElement('h4', `Description of the problem: ${description}`),
            createElement('button', 'Start repair', { class: 'start-btn' }),
            createElement('button', 'Finish repair', { class: 'finish-btn', disabled: true }),
        ]);

        recievedOrdersSection.appendChild(divContainer);

        descriptionElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';

        function onRepair(e) {
            if (e.target.className == 'start-btn') {
                e.target.setAttribute('disabled', '');
                e.target.nextSibling.removeAttribute('disabled');
            } else if (e.target.className == 'finish-btn') {
                const divContainer = createElement('div', null, { class: 'container' }, [
                    createElement('h2', `Product type for repair: ${productType}`),
                    createElement('h3', `Client information: ${clientName}, ${clientPhone}`),
                    createElement('h4', `Description of the problem: ${description}`),
                ]);

                completeOrdersSection.appendChild(divContainer);
                e.target.parentElement.remove();
            }
        }
    }

    function onClear() {
        Array.from(document.querySelectorAll('#completed-orders>.container')).forEach((c) => c.remove());
    }

    function createElement(tagName, textContent, attributes, children = []) {
        const element = document.createElement(tagName);
        const PARAMS = {
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
