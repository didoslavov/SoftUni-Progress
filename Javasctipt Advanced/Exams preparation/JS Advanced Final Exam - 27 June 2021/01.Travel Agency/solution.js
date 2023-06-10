window.addEventListener('load', solution);

function solution() {
    const main = document.getElementById('block');
    const infoPreviewEelement = document.getElementById('infoPreview');
    const fullNameElement = document.getElementById('fname');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const postcodeElement = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    continueBtn.addEventListener('click', onContinue);

    editBtn.disabled = true;
    continueBtn.disabled = true;

    submitBtn.addEventListener('click', onSubmit);

    function onSubmit(e) {
        e.preventDefault();

        const fullName = fullNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        console.log(phoneElement);
        const address = addressElement.value;
        const postcode = postcodeElement.value;

        // Check for the other inputs ?
        if (fullName === '' || email === '') {
            return;
        }

        infoPreviewEelement.appendChild(createElement('li', `Full Name: ${fullName}`));
        infoPreviewEelement.appendChild(createElement('li', `Email: ${email}`));
        infoPreviewEelement.appendChild(createElement('li', `Phone Number: ${phone}`));
        infoPreviewEelement.appendChild(createElement('li', `Address: ${address}`));
        infoPreviewEelement.appendChild(createElement('li', `Postal Code: ${postcode}`));

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        fullNameElement.value = '';
        emailElement.value = '';
        phoneElement.value = '';
        addressElement.value = '';
        postcodeElement.value = '';

        editBtn.addEventListener('click', onEdit);

        function onEdit(e) {
            fullNameElement.value = fullName;
            emailElement.value = email;
            phoneElement.value = phone;
            addressElement.value = address;
            postcodeElement.value = postcode;

            Array.from(infoPreviewEelement.children).forEach((li) => li.remove());

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        }
    }

    function onContinue() {
        main.innerHTML = '';
        main.appendChild(createElement('h3', 'Thank you for your reservation!'));
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
